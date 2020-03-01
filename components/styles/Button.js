import styled from "styled-components";

const Button = styled.button`
  background-color: #f47793;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: var(--color-white);
  padding: 13px 25px 12px 25px;
  cursor: pointer;
  align-self: flex-start;
  text-decoration: ${props => (props.disabled ? "line-through" : "none")};
  width: 100%;
  @media (min-width: 768px) {
    margin-left: var(--spacing-small);
    width: auto;
  }
`;

export default Button;
