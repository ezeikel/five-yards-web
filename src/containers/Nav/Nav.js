import React, { Component } from "react";
import styled from "styled-components";
import { withAuth, withCurrentUser } from '../../context/auth';

class Nav extends Component {
  render() {
    const { currentUser: { isAuthenticated }, signout } = this.props;

    return isAuthenticated ? (
      <a onClick={signout}>signout</a>
    ) : (
      <div>
        <a href="#">register</a>
        /
        <a href="#">signin</a>
      </div>
    )
  }
}

export default withAuth(withCurrentUser(Nav));
