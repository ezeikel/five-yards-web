/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: var(--spacing-large);
  height: var(--spacing-large);
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--spacing-small);
  img {
    max-width: 100%;
    max-height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;
