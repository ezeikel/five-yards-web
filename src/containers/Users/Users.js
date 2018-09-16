import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from 'styled-components';
import EditMode from '../../components/EditMode/EditMode';

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
    isEditMode @client
  }
`;

const Users = () => (
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const { users, isEditMode } = data;

      return (
        <Wrapper>
          <h3>Registered Users</h3>
          {isEditMode ? <span>Edit mode</span> : <span>Non edit mode</span>}
          <EditMode isEditMode={isEditMode}/>
          <p>{`${isEditMode}`}</p>
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