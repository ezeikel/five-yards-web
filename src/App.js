import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faShoppingBag, faHeart, faBox, faExchangeAlt, faCommentAlt, faMoneyBill, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { AuthProvider } from './context/auth';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import setupClient from './apollo/client';
import './globalStyles';

library.add(fab, faUser, faShoppingBag, faHeart, faBox, faExchangeAlt, faCommentAlt, faMoneyBill, faCalendarAlt);

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 265px 1fr;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
  @media(min-width: 1024px) {
    grid-template-rows: 80px 60px 1fr;
    grid-template-columns: 1fr;
  }
`;

const StyledHeader = styled(Header)`
  grid-row: 1 / span 1;
  grid-column: 2 / -1;
  min-width: 100vw;
  transform: translate3d(${({ active }) => active ?  '0' : '-265px'},0,0);
  transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  @media(min-width: 1024px) {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;
    transform: translate3d(0,0,0);
    transition: none;
  }
`;

const StyledNav = styled(Nav)`
  grid-row: 1 / -1;
  grid-column: 1 / span 1;
  width: 100%;
  transform: translate3d(${({ active }) => active ?  '0' : '-265px'},0,0);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  @media(min-width: 1024px) {
    grid-row: 2 / span 1;
    grid-column: 1 / -1;
    transform: translate3d(0,0,0);
    transition: none;
  }
`;

const StyledMain = styled(Main)`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  width: 100%;
  transform: translate3d(${({ active }) => active ?  '0' : '-265px'},0,0);
  transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  @media(min-width: 1024px) {
    grid-row: 3 / -1;
    grid-column: 1 / -1;
    transform: translate3d(0,0,0);
    transition: none;
  }
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translate3d(${({ active }) => active ?  '265px' : '0'},0,0);
  transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  background-color: ${({active}) => active ? 'rgba(45,45,45,.65)' : 'transparent'};
  pointer-events: none;
  margin-top: 80px;

  @media(min-width: 1024px) {
    display: none;
  }
`;

class App extends Component {
  state = {
    client: null,
    active: false
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

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
            <Wrapper>
              <StyledHeader active={this.state.active} toggleActive={this.toggleActive} />
              <StyledNav active={this.state.active} />
              <StyledMain active={this.state.active} />
              <Overlay active={this.state.active} />
            </Wrapper>
          </AuthProvider>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;
