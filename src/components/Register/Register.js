import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

// query
const USERS_QUERY = gql`
  {
    users {
      fullName,
      username
    }
  }
`;

const Users = () => (
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { users } = data;

      return users.map(({ fullName, username }) => (
        <div key={username}>
          <p>{`${fullName}: ${username}`}</p>
        </div>
      ));
    }}
  </Query>
);

class Register extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div>Register!</div>
        <h1>Users</h1>
        <Users />
      </div>
    );
  }
}

export default Register;
