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
    grid-template-rows: 1fr;
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
    &.signin {
      grid-template-columns: 1fr;
    }
    a {
      color: var(--color-black);
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

const StyledLink = styled(Link)`
display: grid;
grid-template-columns: auto 1fr;
grid-column-gap: var(--spacing-medium);
`

const formatName = name => {
  const firstName = name.split(' ')[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}

const Nav = ({ currentUser, signout, className, active}) => {
  return (
    <Navigation className={className} active={active}>
      <NavLinks>
        <li><Link to='/new-in'>New in</Link></li>
        <li><Link to='/fabrics'>Fabrics</Link></li>
        <li><Link to='/tailors'>Tailors</Link></li>
        <li><Link to='/accessories'>Accessories</Link></li>
        <li><Link to='/inspiration'>Inspiration</Link></li>
      </NavLinks>
      <UserActions>
        {
          currentUser && currentUser.fullName
            ? <User><Bold>Hi {formatName(currentUser.fullName)}</Bold> <Underline  onClick={signout}>Sign Out</Underline></User>
            : <User className='signin'><Underline><Link to='/signin'>Sign In</Link></Underline></User>
        }
        <li><StyledLink to='my-account'><FontAwesomeIcon icon="user" color="#000" size="1x" /> My Account</StyledLink></li>
        <li><StyledLink to='my-orders'><FontAwesomeIcon icon="box" color="#000" size="1x" /> My Orders</StyledLink></li>
        <li><StyledLink to='returns'><FontAwesomeIcon icon="exchange-alt" color="#000" size="1x" /> Returns Information</StyledLink></li>
        <li><StyledLink to='contact-preferences'><FontAwesomeIcon icon="comment-alt" color="#000" size="1x" /> Contact Preferences</StyledLink></li>
      </UserActions>
      <SocialLinks>
        <li><a href="https://www.instagram.com/fiveyardsapp"><FontAwesomeIcon icon={['fab', 'instagram']} color="#000" size="3x" /></a></li>
        <li><a href="https://www.twitter.com/fiveyardsapp"><FontAwesomeIcon icon={['fab', 'twitter']} color="#000" size="3x" /></a></li>
        <li><a href="https://www.facebook.com/fiveyardsapp"><FontAwesomeIcon icon={['fab', 'facebook-f']} color="#000" size="3x" /></a></li>
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
