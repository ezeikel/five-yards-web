import React, { createContext, Component } from 'react';
import { withApollo, Query } from 'react-apollo';

import { GET_CURRENT_USER, UPDATE_CURRENT_USER, SIGNIN_MUTATION, SIGNOUT_MUTATION, CURRENT_USER_QUERY } from '../apollo/queries';

// create React context
export const AuthContext = createContext();

class Provider extends Component {
  state = {
    signin: async (email, password) => {
      const { client } = this.props;

      // manually firing off mutation and pull id from response
      const { data: { signin: id } } = await client.mutate({
        mutation: SIGNIN_MUTATION,
        variables: { email, password }
      });

      // get full user details using cookie set in browser after SIGNIN_MUTATION
      try {
        const { data: { me: { fullName, permissions } } } = await client.query({
          query: CURRENT_USER_QUERY
        });
        //TODO: remove this
        console.log({ fullName, permissions});

        // TODO: handle errors for query/mutate calls
        await client.mutate({
          mutation: UPDATE_CURRENT_USER,
          variables: { id, email, fullName, permissions, isAuthenticated: true }
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
