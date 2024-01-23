/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */

import styled from 'styled-components';

export const Wrapper = styled.ul`
  font-size: 2.5rem;
  li {
    &.has-children {
      flex-direction: column;
      border-bottom: 1px solid var(--color-dark-grey);
      padding-bottom: var(--spacing-medium);
      + li {
        margin-top: var(--spacing-medium);
      }
      &.open {
        svg {
          transform: rotate(180deg);
        }
      }
      > span {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      > ul {
        width: 100%;
        margin-top: var(--spacing-medium);
        li {
          font-size: 1.6rem;
          + li {
            margin-top: var(--spacing-medium);
          }
        }
      }
    }
  }
`;
