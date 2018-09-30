import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Wrapper = styled.header`
  display: grid;
  place-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
}

export default Header;
