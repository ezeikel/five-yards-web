import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  place-items: center;
`;

// query
const USERS_QUERY = gql `
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

      return (
        <Wrapper>
          <h3>Registered Users</h3>
          {users.map(({ fullName, username }) => (
            <div key={username}>
              <p>{`${fullName} ==> ${username}`}</p>
            </div>
          ))}
        </Wrapper>
      )
    }}
  </Query>
);

export default Users;