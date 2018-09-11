import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  //uri: 'https://five-yards-api.herokuapp.com/graphql',
  uri: 'http://localhost:7777/graphql',
  onError: (e) => { console.log(e.graphQLErrors) }
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
