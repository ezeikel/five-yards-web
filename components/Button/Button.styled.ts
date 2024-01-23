/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-primary-medium);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-small) var(--spacing-medium);
  outline: 0;
  cursor: pointer;
  &[disabled] {
    background-color: #bebebe;
    border-color: #bebebe;
    color: #5f5f5f;
  }
`;
