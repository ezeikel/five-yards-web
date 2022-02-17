import { useEffect, useRef, useState } from "react";
import { useField } from "formik";
import {
  Wrapper,
  InputContainer,
  Select,
  Label,
  LeftIcon,
  RightIcon,
} from "./SelectInput.styled";

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
    <Wrapper className={`${className} input select-input"`.trim()}>
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
