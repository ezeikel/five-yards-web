import React, { createContext, Component } from 'react';
import { withApollo, Query } from 'react-apollo';

import { GET_CURRENT_USER, SIGNIN_MUTATION, SIGNOUT_MUTATION } from '../apollo/queries';

// create React context
export const AuthContext = createContext();

class Provider extends Component {
  state = {
    signin: async (email, password) => {
      const { client } = this.props;

      // get full user details using cookie set in browser after SIGNIN_MUTATION
      try {
        // manually firing off mutation and pull id from response
        await client.mutate({
          mutation: SIGNIN_MUTATION,
          variables: { email, password },
          update: (cache, { data: { signin:user } }) => {
            this._updateCurrentUser(cache, { ...user, isAuthenticated: true });
          }
        });
      } catch (e) {
        console.log(`Promise rejected. Error: ${e}`);
      }

    },
    signout: async () => {
      const { client } = this.props;

      // trigger res.clearCookie() on the server
       await client.mutate({
        mutation: SIGNOUT_MUTATION
       });

      // reset cache to its defaults
      client.resetStore();
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
export const AuthProvider = withApollo(Provider);

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
