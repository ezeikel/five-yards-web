import styled from 'styled-components';

type CheckboxProps = {
  checked: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    font-family: var(--font-family-primary);
    font-size: 1.4rem;

    input {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    label {
      font-size: 2rem;
      line-height: 31px;
      padding: 16px 34px;
    }
  }
`;

export const Checkbox = styled.div<CheckboxProps>`
  display: flex;
  place-items: center;
  border-radius: var(--border-radius);
  border: 1px solid
    ${({ checked }) =>
      checked ? 'var(--color-primary)' : 'var(--color-input-border)'};
  padding: var(--spacing-tiny);
  margin: 0 var(--spacing-small) 0 0;
  width: 20px;
  height: 20px;
  background-color: ${({ checked }) =>
    checked ? 'var(--color-primary)' : 'var(--color-white)'};
`;
