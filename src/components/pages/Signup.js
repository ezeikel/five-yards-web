import React, { Component } from 'react';
import { withAuth } from '../../context/auth';

class Signup extends Component {
  state = {
    email: '',
    fullName: '',
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, fullName, username, password } = this.state;
    const { signup } = this.props;

    await signup(email, fullName, username, password);
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullName">
            Full name
            <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
          </label>
          <label htmlFor="username">
            Username
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default withAuth(Signup);