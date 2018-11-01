import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import Nav from './Nav';
import GenderSelector from './GenderSelector';
import Search from './Search';
import Widgets from './Widgets';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: var(--spacing-medium);
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

const Header = () => {
  return (
    <Wrapper>
      <Logo><Link to="/">Five Yards</Link></Logo>
      <GenderSelector />
      <Search />
      <Widgets />
    </Wrapper>
  );
}

export default Header;
