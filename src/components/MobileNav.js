import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withAuth } from '../context/auth';

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

const MobileNav = ({ currentUser, signout, className }) => {
  return (
    <Wrapper className={className}>
      <NavLinks>
        <li><Link to='/'>Home</Link></li>
        {currentUser.isAuthenticated
        ? <li><Link to='#' onClick={signout}>Signout</Link></li>
        : (
          <Fragment>
            <li><Link to='/signin'>Signin</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </Fragment>
        )}
      </NavLinks>
    </Wrapper>
  );
}

MobileNav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
};

export default withAuth(MobileNav);
