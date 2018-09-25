import React, { createContext, Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

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
    signup: async (email, fullName, username, password) => {
      try {
        const { client, history } = this.props;

        await client.mutate({
          mutation: SIGNUP_MUTATION,
          variables: { email, fullName, username, password },
          update: (cache, { data: { signup:user } }) => {
            this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

            // redirect to homepage
            history.push('/');
          }
        });
      } catch (e) {
        console.log(`Signup failed. ${e}`);
      }
    },
    signin: async (email, password) => {
      // get full user details using cookie set in browser after SIGNIN_MUTATION
      try {
        const { client, history } = this.props;

        // manually firing off mutation and pull id from response
        await client.mutate({
          mutation: SIGNIN_MUTATION,
          variables: { email, password },
          update: (cache, { data: { signin:user } }) => {
            this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

            // redirect to homepage
            history.push('/');
          }
        });
      } catch (e) {
        console.log(`Promise rejected. ${e}`);
      }

    },
    signout: async () => {
      try {
        const { client, history } = this.props;

        // trigger res.clearCookie() on the server
         await client.mutate({
          mutation: SIGNOUT_MUTATION
         });

         // TODO: Wrap this is an update function
        // redirect to homepage
        history.push('/');

        // reset cache to its defaults
        await client.resetStore();
      } catch (e) {
        console.log(`Promise rejected. ${e}`);
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
