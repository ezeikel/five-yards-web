import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Books = () => (
  <Query
    query={gql`
      {
        books {
          title,
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(({ title, author }) => (
        <div key={title}>
          <p>{`${title}: ${author}`}</p>
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
        <Books />
      </div>
    );
  }
}

export default Register;
