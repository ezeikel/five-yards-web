import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'https://five-yards-api.herokuapp.com/graphql',
  onError: (e) => { console.log(e.graphQLErrors) }
});

client.query({
  query: gql`
  {
    books {
      title,
      author
    }
  }
  `
})
.then(result => console.log(result));

const app = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

render(app, document.querySelector('#root'));
registerServiceWorker();
