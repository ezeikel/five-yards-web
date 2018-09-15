import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const defaultState = {
  isEditMode: false
};

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://five-yards-api.herokuapp.com/graphql' : 'http://localhost:7777/graphql',
  credentials: 'include',
  clientState: {
    defaults: defaultState,
    resolvers: {
      Query: {},
      Mutation: {}
    }
  }
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
