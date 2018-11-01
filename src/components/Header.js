import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GenderSelector from './GenderSelector';
import Search from './Search';
import Widgets from './Widgets';
import Nav from './Nav';

const Wrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  padding: var(--spacing-medium);
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: #FF0000;
    color: white;
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
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: var(--spacing-medium);
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <TopNav>
        <Logo><Link to="/">Five Yards</Link></Logo>
        <GenderSelector />
        <Search />
        <Widgets />
      </TopNav>
      <Nav />
    </Wrapper>
  );
}

export default Header;
