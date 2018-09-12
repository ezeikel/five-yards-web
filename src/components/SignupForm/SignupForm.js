import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const SIGNUP_MUTATION = gql`
  mutation Signup(
    $email: String!,
    $fullName: String!,
    $username: String!,
    $password: String!,
    ) {
    signup(
      email: $email
      fullName: $fullName
      username: $username
      password: $password
    ) {
      id
      email
      fullName
    }
  }
`;

class SignupForm extends Component {
  state = {
    email: '',
    fullName: '',
    username: '',
    password: ''
  }

  saveToState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
      >
        {(signup, { loading, error }) => (
          <section>
            <form onSubmit={async e => {
              e.preventDefault();
              const res = await signup();
              console.log({ res });

            }}>
              <label htmlFor="fullName">
                Full name
                <input type="text" name="fullName" value={this.state.fullName} onChange={this.saveToState} />
              </label>
              <label htmlFor="username">
                Username
                <input type="text" name="username" value={this.state.username} onChange={this.saveToState} />
              </label>
              <label htmlFor="email">
                Email
                <input type="email" name="email" value={this.state.email} onChange={this.saveToState} />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" name="password" value={this.state.password} onChange={this.saveToState} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </section>
        )}
      </Mutation>
    );
  }
}

export default SignupForm;
