import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withAuth } from '../context/auth';

const Nav = props => {
  console.log({ props });
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      {props.currentUser.isAuthenticated
      ? <li><Link to='#' onClick={props.signout}>Signout</Link></li>
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
