import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withAuth } from '../context/auth';

const Navigation = styled.nav`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-medium);
`;

const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: var(--spacing-large);
  font-size: 1.6rem;
  a {
    color: var(--color-black);
  }
`;

const Nav = ({ currentUser, signout, className}) => {
  return (
    <Navigation className={className}>
      <NavLinks>
        <li><Link to='/new-in'>New in</Link></li>
        <li><Link to='/fabrics'>Fabrics</Link></li>
        <li><Link to='/tailors'>Tailors</Link></li>
        <li><Link to='/accessories'>Accessories</Link></li>
        <li><Link to='/inspiration'>Inspiration</Link></li>
        {/* <li><Link to='#' onClick={signout}>Sign out</Link></li> */}
      </NavLinks>
    </Navigation>
  );
};

Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
};

export default withAuth(Nav);
