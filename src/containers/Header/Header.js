import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';

const Wrapper = styled.header`
  display: grid;
  place-items: center;
`;

const NavLinks = styled.ul`
  display: grid;
`;

const Title = styled.h1`
  display: grid;
`;

const Header = () => {
  return (
    <Wrapper>
      <MobileNav />
      <Nav />
    </Wrapper>
  );
}

export default Header;
