import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withAuth } from '../context/auth';

const Nav = ({ currentUser, signout, className}) => {
  return (
    <ul className={className}>
      <li><Link to='/'>Home</Link></li>
      {currentUser.isAuthenticated
      ? <li><Link to='#' onClick={signout}>Signout</Link></li>
      : (
        <Fragment>
          <li><Link to='/signin'>Signin</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </Fragment>
      )}
    </ul>
  );
};

Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired
};

export default withAuth(Nav);
