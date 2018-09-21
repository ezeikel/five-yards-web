import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Wrapper = styled.header`
  display: grid;
  place-items: center;
`;

const Title = styled.h1`
  display: grid;
`;

const StyledMobileNav = styled(MobileNav)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled(Nav)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Title><Link to="/">Five Yards</Link></Title>
      <StyledMobileNav />
      <StyledNav />
    </Wrapper>
  );
}

export default Header;
