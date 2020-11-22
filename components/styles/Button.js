import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: var(--spacing-small) var(--spacing-medium);
  width: 100%;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--color-primary)"};
  border: 1px solid
    ${({ bgColor }) => (bgColor ? bgColor : "var(--color-primary)")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "var(--color-white)")};
  font-family: var(--primary-font-family);
  font-size: 2rem;
  font-weight: var(--font-weight-primary-medium);
  border-radius: 6px;
  outline: 0;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.5;
    cursor: not-allowed;
  `
      : null};
`;

export default Button;
