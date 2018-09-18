import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import App from './containers/App/App';

import client from './apollo/client';
import { AuthProvider } from './context/auth';

const app = (
  <ApolloProvider client={client}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </ApolloProvider>
);

render(app, document.querySelector('#root'));
