import ApolloClient from 'apollo-boost';

import { defaults, resolvers } from "./store";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://five-yards-api.herokuapp.com/graphql' : 'http://localhost:7777/graphql',
  credentials: 'include',
  clientState: {
    defaults,
    resolvers
  }
});

client.onResetStore(client.writeDefaults);

export default client;
