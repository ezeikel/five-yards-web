import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withAuth } from '../context/auth';

const Navigation = styled.nav`
  padding: var(--spacing-medium);
  background-color: var(--color-white);
  box-shadow: ${({active}) => active ? '4px 0px 1.5rem 0px rgba(0, 0, 0, 0.1)' : 'none'};
  @media (min-width: 1024px) {
    display: grid;
    align-items: center;
    box-shadow: 0px 4px 1.5rem -4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLinks = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: var(--spacing-medium);
  font-size: 1.6rem;
  a {
    color: var(--color-black);
  }
  @media(min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(5, auto);
    li {
      display: grid;
      place-items: center;
    }
  }
`;

const Nav = ({ currentUser, signout, className, active}) => {
  return (
    <Navigation className={className} active={active}>
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
