import React from 'react';
import styled from 'styled-components';
import Signin from '../components/Signin';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  h1 {
    margin: 0;
    font-size: 2.2rem;
  }
`;

const SigninPage = () => (
  <Wrapper>
    <h1>Welcome back</h1>
    <Signin />
  </Wrapper>
);

export default SigninPage;
