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

const Signin = ({ signin }) => (
  <Wrapper>
    <h1>Welcome back</h1>
    <Signin signin={signin} />
  </Wrapper>
);

export default withAuth(Signin);
