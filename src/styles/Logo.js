import styled from 'styled-components';

const Logo = styled.h1`
  margin: 0;
  a {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: var(--spacing-tiny);
    text-decoration: none;
    color: var(--color-black);
    span {
      padding: var(--spacing-small);
      &:last-child {
        background-color: var(--color-primary);
        color: var(--color-white);
      }
    }
  }
`;

export default Logo;
