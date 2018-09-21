import React from 'react';
import { withAuth } from '../../context/auth';
import PropTypes from 'prop-types';

const Home = props => (
  <div>
    <h1>Home</h1>
    {props.currentUser && props.currentUser.email}
  </div>
);

Home.propTypes = {
  currentUser: PropTypes.object
};

export default withAuth(Home);
