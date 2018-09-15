import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIGN_OUT_MUTATION } from '../../components/Signout/Signout';
import { CURRENT_USER_QUERY } from '../../components/User/User';

const Wrapper = styled.nav`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavLinks = styled.ul`
  display: grid;
`;

const Title = styled.h1`
  display: grid;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Title><Link to="/">Five Yards</Link></Title>
      <NavLinks>
        <Link to="/signin">Sign in</Link>
        <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
          {signout => <button onClick={signout}>Sign Out</button>}
        </Mutation>
      </NavLinks>
    </Wrapper>
  );
}

export default Nav;
