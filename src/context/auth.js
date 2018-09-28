import React, { createContext, Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert2';
import {
  GET_CURRENT_USER,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  SIGNUP_MUTATION
} from '../apollo/queries';

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
        setErrors({
          email: e.message,
          username: e.message,
          password: e.message
        });
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
            this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

            await swal({
              type: 'success',
              title: `Hello ${user.fullName.split(' ')[0]}`,
              text: 'Welcome back 👊🏿'
            });

            // exposed by Formik
            resetForm();

            // redirect to homepage
            history.push('/');
          }
        });
      } catch (e) {
        // send erros back to Formik form
        setErrors({
          email: e.message,
          password: e.message
        });
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
    } = await client.query({ query: GET_CURRENT_USER });
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
    cache.writeData({ data });
  }
}

// withApollo() will create a new component which passes in an instance of ApolloClient as a client prop
export const AuthProvider = withApollo(withRouter(Provider));

// consumer for AuthContext
export const AuthConsumer = props => <AuthContext.Consumer {...props} />;

// withAuth hoc passes down original props and currentUser and context as props to new wrapped component
export const withAuth = WrappedComponent => props => (
  <Query query={GET_CURRENT_USER} fetchPolicy='cache-only'>
    {({ data: { currentUser } }) => (
      <AuthConsumer>
        {ctx => <WrappedComponent {...props} currentUser={currentUser} {...ctx} />}
      </AuthConsumer>
    )}
  </Query>
);
