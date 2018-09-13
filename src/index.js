import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from 'react-apollo';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const link = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ? 'https://five-yards-api.herokuapp.com/graphql' : 'http://localhost:7777/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

const app = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

render(app, document.querySelector('#root'));
registerServiceWorker();
