import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withAuth } from '../context/auth';

const Navigation = styled.nav`
  display: grid;
  width: 320px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: var(--spacing-medium);
  background-color: var(--color-white);
  transform: translateX(${({ active }) => active ? '0' : '-370px'});
  transition: transform .25s ease-out;
  @media(min-width: 1024px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: var(--spacing-large);
  font-size: 1.6rem;
  a {
    color: var(--color-black);
  }
`;

const Close = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 320px;
  cursor: pointer;
`;

const MobileNav = ({ currentUser, signout, className, active, toggleActive}) => {
  return (
    <Navigation active={active} className={className}>
      <NavLinks>
        <li><Link to='/new-in'>New in</Link></li>
        <li><Link to='/fabrics'>Fabrics</Link></li>
        <li><Link to='/tailors'>Tailors</Link></li>
        <li><Link to='/accessories'>Accessories</Link></li>
        <li><Link to='/inspiration'>Inspiration</Link></li>
        {/* <li><Link to='#' onClick={signout}>Sign out</Link></li> */}
      </NavLinks>
      {/* <Close onClick={toggleActive}>X</Close> */}
      <Close icon="times" color="#000" size="3x" onClick={toggleActive} />
    </Navigation>
  );
};

MobileNav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
};

export default withAuth(MobileNav);
