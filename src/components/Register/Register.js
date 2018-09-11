import React, { Component } from 'react';
import styled from 'styled-components';
import NewUserForm from '../NewUserForm/NewUserForm';
import Users from '../../containers/Users/Users';

const Wrapper = styled.div `
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Heading = styled.h1 `
  grid-row: 1 / 1;
  grid-column: 1 / -1;
`;

class Register extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>Register</Heading>
        <NewUserForm />
        <Users />
      </Wrapper>
    );
  }
}

export default Register;
