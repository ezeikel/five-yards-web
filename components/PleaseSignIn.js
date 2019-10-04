import { Query } from 'react-apollo';
import { CURRENT_CACHED_USER_QUERY } from '../apollo/queries';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={CURRENT_CACHED_USER_QUERY}>
    {({ data, loading }) => {
      const { currentUser: { isAuthenticated } } = data;
      if (loading) return <p>Loading...</p>;
      if (!isAuthenticated) {
        return (
          <div>
            <p>Please Sign In before continuing</p>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
