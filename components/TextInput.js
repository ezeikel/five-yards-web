import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  position: relative;
  line-height: normal;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-input-border);
  width: 100%;
  padding: var(--spacing-medium);
  font-family: var(--font-family-primary);
  font-size: 1.6rem;
  @media (min-width: 1280px) {
    font-size: 2rem;
    line-height: 31px;
    padding: 16px 34px;
  }
`;

const Label = styled.label`
  display: flex;
`;

const TextInput = ({ label, isIOS, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper className="text-input">
      <Input
        error={meta.touched && meta.error !== undefined}
        isIOS={isIOS}
        {...field}
        {...props}
      />
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
    </Wrapper>
  );
};

export default TextInput;
