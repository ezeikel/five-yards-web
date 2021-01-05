import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: var(--primary-font-family);
  font-weight: var(--font-weight-primary-medium);
  border-radius: var(--border-radius);
  padding: var(--spacing-small) var(--spacing-medium);
  outline: 0;
  cursor: pointer;

  ${({ primary }) =>
    primary
      ? `
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 1px solid var(--color-primary);
  `
      : null}

  ${({ ghost }) =>
    ghost
      ? `
    background-color: #f0f0f0;
    color: var(--color-black);
    border: 1px solid #cccccc;
  `
      : null}

  ${({ primary, ghost }) =>
    primary && ghost
      ? `
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  `
      : null}

  ${({ disabled }) =>
    disabled
      ? `
      background-color: #bebebe;
      border: 1px solid #bebebe;
      color: #5f5f5f;
  `
      : null}
`;

const Button = ({ text, children, ...props }) => (
  <Wrapper {...props}>
    {children}
    {text}
  </Wrapper>
);

export default Button;
