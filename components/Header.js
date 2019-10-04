import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import GenderSelector from './GenderSelector';
import Search from './Search';
import Widgets from './Widgets';
import Hamburger from './Hamburger';
import Cart from './Cart';

const Wrapper = styled.header`
  display: grid;
  transition: background-color 0.3s ease-in-out;
  padding: var(--spacing-medium);
  box-shadow: 0px 4px 1.5rem 0px rgba(0, 0, 0, 0.1);
  @media(min-width: 1024px) {
    box-shadow: none;
    position: relative;
    z-index: 2;
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
  position: relative;
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

class Header extends Component {
  render() {
    const { toggleActive, className, active } = this.props;
    return (
      <Wrapper className={className} active={active}>
        <TopNav>
          <Hamburger active={active} toggleActive={toggleActive} />
          <Logo><Link href="/">Five Yards</Link></Logo>
          <GenderSelector />
          <Search />
          <Widgets />
          <Cart />
        </TopNav>
      </Wrapper>
    );
  }
}

export default Header;
