import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { defaults, resolvers } from "./store";

const cache = new InMemoryCache();

persistCache({
  storage: window.localStorage,
  debug: process.env.NODE_ENV !== 'production',
  cache
});

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://five-yards-api.herokuapp.com/graphql' : 'http://localhost:7777/graphql',
  credentials: 'include',
  clientState: {
    defaults,
    resolvers
  },
  cache
});

client.onResetStore(client.writeDefaults);

export default client;
