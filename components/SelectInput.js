import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    left: var(--spacing-medium);
    top: 50%;
    margin-top: -0.4375em;
    z-index: 1;
  }
`;

const InputContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
`;

const Select = styled.select`
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

  padding: var(--spacing-medium) var(--spacing-medium) var(--spacing-medium)
    calc(0.875em + var(--spacing-medium) + var(--spacing-medium));
`;

const Label = styled.label`
  display: flex;
`;

const SelectInput = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper className="input select-input">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <InputContainer>
        <FontAwesomeIcon
          icon={["fal", icon]}
          color="var(--color-black)"
          size="2x"
        />
        <Select {...field} {...props} />
      </InputContainer>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

export default SelectInput;
