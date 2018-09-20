import React, { createContext, Component } from 'react';
import { withApollo, Query } from 'react-apollo';

import { GET_CURRENT_USER, UPDATE_CURRENT_USER, SIGNIN_MUTATION, SIGNOUT_MUTATION, CURRENT_USER_QUERY } from '../apollo/queries';

// create React context
export const AuthContext = createContext();

class Provider extends Component {
  state = {
    signin: async (email, password) => {
      const { client } = this.props;

      // manually firing off mutation
      // https://www.apollographql.com/docs/react/essentials/queries.html#manual-query
      // pull id from response
      const { data: { signin: id } } = await client.mutate({
        mutation: SIGNIN_MUTATION,
        variables: { email, password }
      });

      // get full user details
      const { data: { me: { fullName, permissions } } } = await client.query({
        query: CURRENT_USER_QUERY
      });

      // TODO: handle errors for query/mutate calls
      await client.mutate({
        mutation: UPDATE_CURRENT_USER,
        variables: { id, email, fullName, permissions, isAuthenticated: true }
      });

    },
    signout: async () => {
      const { client } = this.props;

       await client.mutate({
        mutation: SIGNOUT_MUTATION
       });

       // manually setting the store back to defaults for now
      await client.resetStore();
      // client.mutate({
      //   mutation: UPDATE_CURRENT_USER,
      //   variables: { id: '', email: '', fullName: '', permissions: [], isAuthenticated: false }
      // });
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

// withAuth hoc passes down context and propes to wrapped component
export const withAuth = WrappedComponent => props => (
  <AuthConsumer>{ctx => <WrappedComponent {...ctx} {...props} />}</AuthConsumer>
);

// withCurrentUser hoc passed currentUser as a prop to wrapped component
export const withCurrentUser = WrappedComponent => props => (
  <Query
    query={GET_CURRENT_USER}
    pollInterval={500}
    onCompleted={() => console.log('Query completed.')}
  >
    {({ data: { currentUser } }) => (
      <WrappedComponent currentUser={currentUser} {...props} />
    )}
  </Query>
);
