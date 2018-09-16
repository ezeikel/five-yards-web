import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';

const Wrapper = styled.header`
  display: grid;
  place-items: center;
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
