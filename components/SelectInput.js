import React, { useEffect, useRef, useState } from "react";
import { useField } from "formik";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  padding: ${({ leftIconWidth, angleDownIconWidth }) =>
    leftIconWidth
      ? `var(--spacing-medium) calc(
  ${angleDownIconWidth}px  +
    var(--spacing-medium) + var(--spacing-medium)
) var(--spacing-medium) calc(
  ${leftIconWidth}px  +
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

const LeftIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: var(--spacing-medium);
  top: 50%;
  margin-top: ${({ leftIconHeight }) =>
    leftIconHeight ? `-${leftIconHeight / 2}px` : "0"};
  z-index: 1;
`;

const RightIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: var(--spacing-medium);
  top: 50%;
  margin-top: ${({ rightIconHeight }) =>
    rightIconHeight ? `-${rightIconHeight / 2}px` : "0"};
  z-index: 1;
`;

const SelectInput = ({ className, label, leftIcon, ...props }) => {
  const [field, meta] = useField(props);

  const leftIconRef = useRef();
  const angleDownIconRef = useRef();

  const [leftIconWidth, setLeftIconWidth] = useState(null);
  const [leftIconHeight, setIconHeight] = useState(null);
  const [angleDownIconWidth, setAngleDownIconWidth] = useState(null);
  const [rightIconHeight, setRightIconHeight] = useState(null);

  useEffect(() => {
    if (leftIcon) {
      const { width, height } = leftIconRef.current.getBoundingClientRect();
      setLeftIconWidth(width);
      setIconHeight(height);
    }
  }, [leftIconRef.current]);

  useEffect(() => {
    const { width, height } = angleDownIconRef.current.getBoundingClientRect();
    setAngleDownIconWidth(width);
    setRightIconHeight(height);
  }, [angleDownIconRef.current]);

  return (
    <Wrapper
      className={`${className} input select-input"`.trim()}
      rightIconHeight={rightIconHeight}
    >
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <InputContainer>
        {leftIcon && (
          <LeftIcon
            icon={["fal", leftIcon]}
            color="var(--color-black)"
            size="2x"
            leftIconHeight={leftIconHeight}
            forwardedRef={leftIconRef}
          />
        )}
        <Select
          leftIconWidth={leftIconWidth}
          angleDownIconWidth={angleDownIconWidth}
          {...field} // eslint-disable-line react/jsx-props-no-spreading
          {...props} // eslint-disable-line react/jsx-props-no-spreading
        />
        <RightIcon
          icon={["fal", "angle-down"]}
          color="var(--color-black)"
          size="2x"
          rightIconHeight={rightIconHeight}
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
