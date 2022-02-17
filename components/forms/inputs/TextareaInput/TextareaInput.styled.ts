import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .error {
    margin-top: var(--spacing-small);
  }
`;

export const Input = styled(TextareaAutosize)`
  position: relative;
  line-height: normal;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-input-border);
  width: 100%;
  padding: var(--spacing-medium);
  margin: 0;
  font-family: var(--font-family-primary);
  font-size: 1.6rem;
  background-color: var(--color-white);
  padding: var(--spacing-medium);
  resize: none;
`;

export const Label = styled.label`
  display: flex;
`;
