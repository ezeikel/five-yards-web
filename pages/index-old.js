import PropTypes from 'prop-types';
import { withAuth } from '../context/auth';

const HomePage = ({ currentUser }) => (
  <div>
    {
      currentUser.isAuthenticated ?
        <h1>Welcome {currentUser.fullName.split(' ')[0]} <span role="img" aria-label="spud">👊🏿</span></h1> :
        <h1>You should try signing in <span role="img" aria-label="dunno">🤷🏿‍♂️</span></h1>
    }
  </div>
);

HomePage.propTypes = {
  currentUser: PropTypes.object
};

export default withAuth(HomePage);
