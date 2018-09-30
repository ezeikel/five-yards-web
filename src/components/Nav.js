import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withAuth } from '../context/auth';
import Button from '../styles/Button';
import Logo from '../styles/Logo';

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-medium);
`;

const NavLinks = styled.ul`
  justify-self: end;
  li {
    height: 100%;
  }
  a {
    height: 100%;
    display: flex;
  }
`;

const Nav = ({ currentUser, signout, className}) => {
  return (
    <Navigation className={className}>
      <Logo><Link to="/"><span>Five</span><span>Yards</span></Link></Logo>
      <NavLinks>
        {currentUser.isAuthenticated
        ? <li><Link to='#' onClick={signout}><Button>Sign out</Button></Link></li>
        : (
          <Fragment>
            {window.location.href.includes('signin') || window.location.href.includes('signup') ? null : <li><Link to='/signin'><Button>Sign in</Button></Link></li>}
          </Fragment>
        )}
      </NavLinks>
    </Navigation>
  );
};

Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
};

export default withAuth(Nav);
