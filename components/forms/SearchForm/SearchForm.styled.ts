import styled from 'styled-components';

type SearchTypeProps = {
  active: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: var(--spacing-large);

  hr {
    background-color: var(--color-grey);
    height: 1px;
    width: 100%;
    border: 0;
    margin: 0 0 var(--spacing-medium);
  }

  ul {
    display: flex;
    margin-bottom: var(--spacing-medium);
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.6rem;
      flex: 0 1 33.33%;
      padding-bottom: var(--spacing-tiny);
      + li {
        margin-left: var(--spacing-large);
      }
    }
  }
`;

export const Heading = styled.h3`
  font-family: var(--font-family-secondary);
  font-size: 2.5rem;
  line-height: 30px;
  font-weight: 600;
  margin: 0 0 var(--spacing-medium);
`;

export const SearchType = styled.li<SearchTypeProps>`
  color: ${({ active }) =>
    active ? 'var(--color-primary)' : 'var(--color-black)'};
  border-bottom: ${({ active }) =>
    active ? '3px solid var(--color-primary)' : '3px solid transparent'};
  svg {
    margin-bottom: var(--spacing-tiny);
  }
`;
