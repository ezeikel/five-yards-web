import React, { createContext, Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert2';
import {
  CURRENT_CACHED_USER_QUERY,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  SIGNUP_MUTATION,
  RESET_MUTATION
} from '../apollo/queries';
import { formatFormErrors } from '../utils/formatFormErrors';

// create React context
export const AuthContext = createContext();

class Provider extends Component {
  state = {
    signup: async ({ email, fullName, username, password }, { setSubmitting, setErrors, resetForm }) => {
      try {
        const { client, history } = this.props;

        await client.mutate({
          mutation: SIGNUP_MUTATION,
          variables: { email, fullName, username, password },
          update: async (cache, { data: { signup:user } }) => {
            this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

            await swal({
              type: 'success',
              title: `Hello ${user.fullName.split('.')[0]}. Welcome to Five Yards Gang ✌🏿`
            });

            resetForm();

            // redirect to homepage
            history.push('/');
          }
        });
      } catch (e) {
        setErrors(formatFormErrors(e));
      }
      setSubmitting(false);
    },
    resetPassword: async({ password, confirmPassword, resetToken }, { setSubmitting, setErrors, resetForm }) => {
      try {
        const { client, history } = this.props;

        await client.mutate({
          mutation: RESET_MUTATION,
          variables: { password, confirmPassword, resetToken },
          update: async( cache, { data: { resetPassword:user } }) => {
            this._updateCurrentUser(cache, {...user, isAuthenticated: true });

            resetForm();

            // redirect to homepage
            history.push('/');
          }
        });
      } catch (e) {
        console.log(e);
        //setErrors(formatFormErrors(e));
      }
      setSubmitting(false);
    },
    signin: async ({ email, password }, { setSubmitting, setErrors, resetForm }) => {
      // get full user details using cookie set in browser after SIGNIN_MUTATION
      try {
        const { client, history } = this.props;

        // manually firing off mutation and pull id from response
        await client.mutate({
          mutation: SIGNIN_MUTATION,
          variables: { email, password },
          update: async (cache, { data: { signin:user } }) => {
            // TODO: deleting cart for now as causing errors when writing to cache
            console.log({ user });
            console.log(user.cart);
            user.cart = [];
            this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

            // exposed by Formik
            resetForm();

            // redirect to homepage
            history.push('/');
          }
        });
      } catch (e) {
        // send erros back to Formik form
        setErrors(formatFormErrors(e));
      }
      setSubmitting(false);
    },
    signout: async () => {
      const result  = await swal({
        title: 'You sure?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D32E5E',
        cancelButtonColor: '#0078A7',
        confirmButtonText: 'Yeah',
        cancelButtonText: 'Nah'
    });

    if (result.value) {
      try {
        const { client, history } = this.props;

        // trigger res.clearCookie() on the server
        await client.mutate({
          mutation: SIGNOUT_MUTATION,
          update: async(cache, { data: { signout: { message } }}) => {
            await swal(
              `${message}`,
              'Sad to see you go 😥',
              'success'
            );

            // redirect to homepage
            history.push('/');

            // reset cache to its defaults
            await client.resetStore();
          }
        });

      } catch (e) {
        await swal({
          type: 'warning',
          title: 'Signout error',
          text: e.message
        });
      }
    }

    }
  };

  async componentDidMount() {
    const { client } = this.props;
    /**
     * When component is mounted
     * you can get the user from cache
     * verify token validity etc
     */
    const {
      data: { currentUser }
    } = await client.query({ query: CURRENT_CACHED_USER_QUERY });
    console.log({ currentUser });
  }

  render() {
    return <AuthContext.Provider value={{ ...this.state }} {...this.props} />;
  }

  _updateCurrentUser(cache, user) {
    const data = {
      currentUser: {
        ...user,
        __typename: 'CurrentUser'
      }
    };
    // TODO: Error occuring after writing to cache after signin with cart in data
    // Maybe needs __typename CartItem and Item for nested objects?
    // Look into writing to cache
    cache.writeData({ data });
  }
}

// withApollo() will create a new component which passes in an instance of ApolloClient as a client prop
export const AuthProvider = withApollo(withRouter(Provider));

// consumer for AuthContext
export const AuthConsumer = props => <AuthContext.Consumer {...props} />;

// withAuth hoc passes down original props and currentUser and context as props to new wrapped component
export const withAuth = WrappedComponent => props => (
  <Query
    query={CURRENT_CACHED_USER_QUERY}
    fetchPolicy='cache-only'
  >
    {({ data: { currentUser } }) => (
      <AuthConsumer>
        {ctx => <WrappedComponent {...props} currentUser={currentUser} {...ctx} />}
      </AuthConsumer>
    )}
  </Query>
);
