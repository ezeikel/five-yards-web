import React, { useLayoutEffect, useRef, useState } from "react";
import { useField } from "formik";
import styled from "styled-components";
import Error from "./Error";
import Icon from "./Icon";

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  svg {
    &:first-of-type {
      position: absolute;
      left: var(--spacing-medium);
      top: 50%;
      margin-top: ${({ iconHeight }) =>
        iconHeight ? `-${iconHeight / 2}px` : "0"};
      z-index: 1;
    }
    &:nth-of-type(2) {
      position: absolute;
      right: var(--spacing-medium);
      top: 50%;
      margin-top: ${({ passwordIconHeight }) =>
        passwordIconHeight ? `-${passwordIconHeight / 2}px` : "0"};
      z-index: 1;
    }
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
  background-color: var(--color-white);

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
  const passwordIconRef = useRef();

  const [iconWidth, setIconWidth] = useState(null);
  const [iconHeight, setIconHeight] = useState(null);
  const [passwordIconWidth, setPasswordIconWidth] = useState(null);
  const [passwordIconHeight, setPasswordIconHeight] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField =
    field.name === "password" ||
    field.name === "oldPassword" ||
    field.name === "newPassword";

  useLayoutEffect(() => {
    if (icon) {
      const { width, height } = iconRef.current.getBoundingClientRect();
      setIconWidth(width);
      setIconHeight(height);
    }
  }, [iconRef.current]);

  useLayoutEffect(() => {
    if (isPasswordField) {
      const { width, height } = passwordIconRef.current.getBoundingClientRect();
      setPasswordIconWidth(width);
      setPasswordIconHeight(height);
    }
  }, [passwordIconRef.current]);

  return (
    <Wrapper
      className="input text-input"
      iconHeight={iconHeight}
      passwordIconHeight={passwordIconHeight}
    >
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      {/* TODO: probably a cleaner way to show either password or text input */}
      {isPasswordField ? (
        <InputContainer>
          {icon && <Icon name={icon} size="2x" forwardedRef={iconRef} />}
          <Input
            iconWidth={iconWidth}
            passwordIconWidth={passwordIconWidth}
            error={meta.touched && meta.error !== undefined}
            {...field}
            {...props}
            type={showPassword ? "text" : "password"}
          />
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size="2x"
            forwardedRef={passwordIconRef}
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputContainer>
      ) : (
        <InputContainer>
          {icon && <Icon name={icon} size="2x" forwardedRef={iconRef} />}
          <Input
            iconWidth={iconWidth}
            error={meta.touched && meta.error !== undefined}
            {...field}
            {...props}
          />
        </InputContainer>
      )}
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </Wrapper>
  );
};

export default TextInput;
