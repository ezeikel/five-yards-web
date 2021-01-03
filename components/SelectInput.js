import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
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

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper className="input select-input">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <Select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

export default SelectInput;
