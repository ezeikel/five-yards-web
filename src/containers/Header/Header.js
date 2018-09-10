import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: grid;
  place-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Five Yards.</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </ul>
    </Wrapper>
  );
}
 
export default Header;
