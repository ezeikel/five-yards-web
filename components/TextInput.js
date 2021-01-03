import React, { useLayoutEffect, useRef, useState } from "react";
import { useField } from "formik";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "./Error";

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    left: var(--spacing-medium);
    top: 50%;
    margin-top: -0.4375em;
    z-index: 1;
  }

  .error {
    margin-top: var(--spacing-small);
  }
`;

const InputContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
`;

const Input = styled.input`
  position: relative;
  line-height: normal;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-input-border);
  width: 100%;
  padding: var(--spacing-medium);
  margin: 0;
  font-family: var(--font-family-primary);
  font-size: 1.6rem;

  padding: ${({ iconWidth }) =>
    iconWidth
      ? `var(--spacing-medium) var(--spacing-medium) var(--spacing-medium) calc(
  ${iconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
);`
      : `var(--spacing-medium)`};
`;

const Label = styled.label`
  display: flex;
`;

const TextInput = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);
  const iconRef = useRef();
  const [iconWidth, setIconWidth] = useState(null);

  useLayoutEffect(() => {
    if (icon) {
      const { width } = iconRef.current.getBoundingClientRect();
      setIconWidth(width);
    }
  }, [iconRef.current]);

  return (
    <Wrapper className="input text-input">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <InputContainer>
        {icon && (
          <FontAwesomeIcon
            icon={["fal", icon]}
            color="var(--color-black)"
            size="2x"
            forwardedRef={iconRef}
          />
        )}
        <Input
          iconWidth={iconWidth}
          error={meta.touched && meta.error !== undefined}
          {...field}
          {...props}
        />
      </InputContainer>
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </Wrapper>
  );
};

export default TextInput;
