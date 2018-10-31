import React from 'react';
import styled from 'styled-components';
import { withAuth } from '../context/auth';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  h1 {
    margin: 0;
    font-size: 22px;
  }
`;

const Signup = () => (
  <Wrapper>
    <h1>Sign up</h1>
    <Signup />
  </Wrapper>
);

export default withAuth(Signup);
