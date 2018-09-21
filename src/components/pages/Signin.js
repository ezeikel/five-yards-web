import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signin } = this.props;
    signin(email, password);

    // reset form
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Signin</h1>
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <label>password</label>
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Link to="/request-reset">Forgot password?</Link>
          <button type="submit">Sign In</button>
          <span>
            Don't have an account yet?
            <br />
            Just click <Link to="/signup">here</Link> to create one.
          </span>
        </form>
      </div>
    );
  }
}

export default withAuth(Signin);