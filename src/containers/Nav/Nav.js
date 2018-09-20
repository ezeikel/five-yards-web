import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withAuth, withCurrentUser } from '../../context/auth';

class Nav extends Component {
  render() {
    console.log('render()');
    const { currentUser, currentUser: { isAuthenticated }, signout } = this.props;

    return isAuthenticated ? (
      <React.Fragment>
        <span>Welcome {currentUser.email}</span>
        <a onClick={signout}>signout</a>
      </React.Fragment>
    ) : (
      <div>
        <Link to="signup">signup</Link>
        /
        <Link to="signin">signin</Link>
      </div>
    )
  }
}

export default withAuth(withCurrentUser(Nav));
