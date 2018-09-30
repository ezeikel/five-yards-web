import React from 'react';
import { withAuth } from '../../context/auth';
import PropTypes from 'prop-types';

const Home = props => (
  <div>
    {
      props.currentUser.fullName ?
        <h1>Welcome {props.currentUser.fullName.split(' ')[0]} 👊🏿</h1> :
        <h1>You should try signing in 🤷🏿‍♂️</h1>
    }
  </div>
);

Home.propTypes = {
  currentUser: PropTypes.object
};

export default withAuth(Home);
