import React from 'react';
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SIGN_OUT_MUTATION } from '../../components/Signout/Signout';
import User, { CURRENT_USER_QUERY } from '../../components/User/User';

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
  display: flex;
  flex-direction: row;
  > a, > button {
    margin-left: var(--spacing-medium);
  }
`;

const Title = styled.h1`
  display: grid;
`;

const Nav = () => {
  return (
    <User>
      {({ data: { me } }) => (
        <Wrapper>
          <Title><Link to="/">Five Yards</Link></Title>
          <NavLinks>
            {me && (
              <React.Fragment>
                <Link to="/">Orders</Link>
                <Link to="/">Account</Link>
              </React.Fragment>
            )
            }
            {!me
              ?
              <Link to="/signin">Sign in</Link>
              :
              <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
                {signout => <button onClick={signout}>Sign Out</button>}
              </Mutation>
            }
          </NavLinks>
        </Wrapper>
      )}
    </User>
  );
}

export default Nav;
