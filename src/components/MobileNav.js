import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: grid;
  place-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: grid;
`;

const Title = styled.h1`
  display: grid;
`;

const MobileNav = () => {
  return (
    <Wrapper>
      <Title><Link to="/">Five Yards</Link></Title>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/signup">Login</Link>
      </NavLinks>
    </Wrapper>
  );
}

export default MobileNav;
