import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-large);
`;

export const LogoWrapper = styled.div`
  a {
    display: block;
  }
  svg {
    width: 152px;
  }
`;

export const Navigation = styled.nav`
  svg {
    width: 152px;
  }
  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: 1px solid var(--color-grey);
      border-radius: var(--border-radius);
      + li {
        margin-left: var(--spacing-medium);
      }
    }
  }
`;
