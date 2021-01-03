import React, { useLayoutEffect, useRef, useState } from "react";
import { useField } from "formik";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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
      margin-top: ${({ angleDownIconHeight }) =>
        angleDownIconHeight ? `-${angleDownIconHeight / 2}px` : "0"};
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

  padding: ${({ iconWidth, angleDownIconWidth }) =>
    iconWidth
      ? `var(--spacing-medium) calc(
  ${angleDownIconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
) var(--spacing-medium) calc(
  ${iconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
);`
      : `var(--spacing-medium) calc(
  ${angleDownIconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
) var(--spacing-medium) var(--spacing-medium)`};
`;

const Label = styled.label`
  display: flex;
`;

const SelectInput = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);

  const iconRef = useRef();
  const angleDownIconRef = useRef();

  const [iconWidth, setIconWidth] = useState(null);
  const [iconHeight, setIconHeight] = useState(null);
  const [angleDownIconWidth, setAngleDownIconWidth] = useState(null);
  const [angleDownIconHeight, setPasswordIconHeight] = useState(null);

  useLayoutEffect(() => {
    if (icon) {
      const { width, height } = iconRef.current.getBoundingClientRect();
      setIconWidth(width);
      setIconHeight(height);
    }
  }, [iconRef.current]);

  useLayoutEffect(() => {
    const { width, height } = angleDownIconRef.current.getBoundingClientRect();
    setAngleDownIconWidth(width);
    setPasswordIconHeight(height);
  }, [angleDownIconRef.current]);

  return (
    <Wrapper
      className="input select-input"
      iconHeight={iconHeight}
      angleDownIconHeight={angleDownIconHeight}
    >
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
        <Select
          iconWidth={iconWidth}
          angleDownIconWidth={angleDownIconWidth}
          {...field}
          {...props}
        />
        <FontAwesomeIcon
          icon={["fal", "angle-down"]}
          color="var(--color-black)"
          size="2x"
          forwardedRef={angleDownIconRef}
        />
      </InputContainer>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

export default SelectInput;
