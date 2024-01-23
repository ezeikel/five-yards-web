import styled from 'styled-components';

export const LoggedOut = styled.ul`
  font-size: 2.5rem;

  li {
    &.horizontal-rule-after {
      border-bottom: 1px solid var(--color-dark-grey);
      padding-bottom: var(--spacing-medium);
      + li {
        margin-top: var(--spacing-medium);
      }
    }
    &.has-children {
      flex-direction: column;
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

export const UserAvatar = styled.div`
  width: var(--spacing-large);
  height: var(--spacing-large);
  border-radius: 50%;
  background-color: tomato;
  margin-right: var(--spacing-medium);
`;
