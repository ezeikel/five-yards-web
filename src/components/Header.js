import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenderSelector from './GenderSelector';
import Search from './Search';
import Widgets from './Widgets';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Wrapper = styled.header`
  display: grid;
  padding: var(--spacing-medium);
  @media(min-width: 1024px) {
    grid-template-rows: 1fr 1fr;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  a {
    color: var(--color-black);
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const TopNav = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 25px 1fr auto;
  grid-column-gap: var(--spacing-medium);
  align-items: center;
  h1 {
    justify-self: start;
  }
  @media(min-width: 768px) {
    grid-template-columns: auto auto 1fr auto;
    grid-column-gap: var(--spacing-medium);
  }
`;

const Hamburger = styled(FontAwesomeIcon)`
  cursor: pointer;
  justify-self: center;
  @media (min-width: 1024px) {
    display: none;
  }
`;

class Header extends Component {
  state = {
    acitve: false
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };


  render() {
    return (
      <Wrapper>
        <TopNav>
          <Hamburger icon="bars" color="#000" size="2x" onClick={this.toggleActive} />
          <Logo><Link to="/">Five Yards</Link></Logo>
          <GenderSelector />
          <Search />
          <Widgets />
        </TopNav>
        <Nav />
        <MobileNav active={this.state.active} toggleActive={this.toggleActive} />
      </Wrapper>
    );
  }
}

export default Header;
