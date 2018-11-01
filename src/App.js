import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingBag, faHeart  } from '@fortawesome/free-solid-svg-icons';
import { AuthProvider } from './context/auth';
import Header from './components/Header';
import Main from './components/Main';
import setupClient from './apollo/client';
import './globalStyles';

library.add(faUser, faShoppingBag, faHeart);

class App extends Component {
  state = {
    client: null
  }

  async componentDidMount() {
    const client = await setupClient();
    this.setState({ client });
  }

  render() {
    const { client } = this.state;
    if (!client) return 'loading client...';
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <AuthProvider>
              <Header />
              <Main />
          </AuthProvider>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;