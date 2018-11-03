import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withAuth } from '../context/auth';

const Navigation = styled.nav`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: var(--spacing-medium);
  align-items: space-between;
  padding: var(--spacing-medium);
  background-color: var(--color-white);
  box-shadow: ${({active}) => active ? '4px 0px 1.5rem 0px rgba(0, 0, 0, 0.1)' : 'none'};
  opacity: ${({active}) => active ? '1' : '0'};
  @media (min-width: 1024px) {
    display: grid;
    align-items: center;
    opacity: 1;
    box-shadow: 0px 4px 1.5rem -4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLinks = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, 78px);
  grid-row-gap: var(--spacing-medium);
  font-size: 1.6rem;
  li {
    display: grid;
    place-items: center;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #F0F0F0;
  }
  a {
    color: var(--color-black);
  }
  @media(min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(5, auto);
    li {
      background-color: transparent;
      text-transform: none;
      font-weight: normal;
    }
  }
`;

const Legal = styled.span`
  grid-row: 4 / span 1;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  @media(min-width: 1024px) {
    display: none;
  }
`;

const SocialLinks = styled.ul`
  grid-row: 3 / span 1;
  display: grid;
  grid-template-columns: repeat(3, auto);
  place-items: center;
  @media(min-width: 1024px) {
    display: none;
  }
`;

const UserActions = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, auto);
  place-items: center;
  font-size: 1.4rem;
  li {
    display: grid;
    place-items: center;
    padding: var(--spacing-medium);
    width: 100%;
    & + li {
      border-top: 1px solid #ddd;
    }
  }
  @media(min-width: 1024px) {
    display: none;
  }
`;

const User = styled.li`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Bold = styled.span`
  font-weight: bold;
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
      <UserActions>
        <User><Bold>Hi Ezeikel</Bold> <Underline>Sign Out</Underline></User>
        <li>My Account</li>
        <li>My Orders</li>
        <li>Returns Information</li>
        <li>Contact Preferences</li>
      </UserActions>
      <SocialLinks>
        <li><a href="www.instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} color="#000" size="3x" /></a></li>
        <li><a href="www.instagram.com"><FontAwesomeIcon icon={['fab', 'twitter']} color="#000" size="3x" /></a></li>
        <li><a href="www.instagram.com"><FontAwesomeIcon icon={['fab', 'facebook-f']} color="#000" size="3x" /></a></li>
      </SocialLinks>
      <Legal>&copy; {new Date().getFullYear()} Five Yards</Legal>
    </Navigation>
  );
};

Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
};

export default withAuth(Nav);
