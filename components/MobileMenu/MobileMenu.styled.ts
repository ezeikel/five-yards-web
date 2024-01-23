import styled from 'styled-components';

type WrapperProps = {
  active: boolean;
  user: any;
};

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({ user }) =>
    user ? 'var(--color-white)' : 'var(--color-black)'};
  color: ${({ user }) => (user ? 'var(--color-black)' : 'var(--color-white)')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  text-align: center;
  a,
  a:link,
  a:visited,
  a:active {
    color: ${({ user }) =>
      user ? 'var(--color-black)' : 'var(--color-white)'};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-large);
`;

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);

  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 2.5rem;
    li {
      display: flex;
      align-items: center;
      + li {
        margin-top: var(--spacing-large);
      }
      &:last-of-type {
        flex: 0 0 auto;
        border-top: 1px solid var(--color-dark-grey);
        padding-top: var(--spacing-medium);
        margin-top: auto;
      }
      svg {
        margin-right: var(--spacing-medium);
      }
      /* fixes css for nested list */
      ul li:last-of-type {
        border-top: none;
        padding-top: 0;
      }
    }
  }
`;
