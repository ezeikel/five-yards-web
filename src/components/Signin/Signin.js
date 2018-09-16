import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User/User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      fullName
    }
  }
`;

class Signin extends Component {
  state = {
    fullName: '',
    password: '',
    email: ''
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // remove fullName from variables sent to mutation
    const { fullName, ...state } = this.state;
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        awaitRefetchQueries={true}
        onCompleted={() => this.props.history.push('/')}
      >
        {(signin, { data, error, loading, client }) => {
          const onSuccess = () => client.writeData({ data: { editMode: true }})
          return (
            <form
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                debugger;
                onSuccess();
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Welcome back</h2>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <Link to="/request-reset">Forgot password?</Link>
                <button type="submit">Sign In</button>
                <span>
                  Don't have an account yet?
                  <br />
                  Just click <Link to="/signup">here</Link> to create one.
                </span>
              </fieldset>
            </form>
          )
        }}
      </Mutation>
    );
  }
}

export default Signin;