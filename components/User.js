import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { CURRENT_CACHED_USER_QUERY } from '../apollo/queries';

const User = props => (
  <Query {...props} query={CURRENT_CACHED_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;