import TextareaAutosize from "react-textarea-autosize";

import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import Error from "./Error";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .error {
    margin-top: var(--spacing-small);
  }
`;

const Input = styled(TextareaAutosize)`
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

const Label = styled.label`
  display: flex;
`;

const TextareaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper className="input textarea-input">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input minRows={4} {...field} {...props} />
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </Wrapper>
  );
};

export default TextareaInput;
