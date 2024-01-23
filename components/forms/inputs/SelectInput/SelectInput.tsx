import { ReactNode, useCallback, useState } from 'react';
import { useField } from 'formik';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
  Wrapper,
  InputContainer,
  Select,
  Label,
  LeftIcon,
  RightIcon,
} from './SelectInput.styled';

type SelectInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  name: string;
  leftIcon?: IconName;
  children: ReactNode;
};

// TODO: replace this with react dropdown library
const SelectInput = ({
  label,
  name,
  leftIcon,
  className,
  children,
  ...props
}: SelectInputProps) => {
  const [field, meta] = useField({ ...props, name });
  const [leftIconWidth, setLeftIconWidth] = useState(0);
  const [leftIconHeight, setIconHeight] = useState(0);
  const [angleDownIconWidth, setAngleDownIconWidth] = useState(0);
  const [rightIconHeight, setRightIconHeight] = useState(0);

  const leftIconRef = useCallback((node) => {
    if (node !== null) {
      const { width, height } = node.getBoundingClientRect();
      setLeftIconWidth(width);
      setIconHeight(height);
    }
  }, []);

  const angleDownIconRef = useCallback((node) => {
    if (node !== null) {
      const { width, height } = node.getBoundingClientRect();
      setAngleDownIconWidth(width);
      setRightIconHeight(height);
    }
  }, []);

  return (
    <Wrapper className={`${className} input select-input"`.trim()}>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <InputContainer>
        {leftIcon ? (
          <LeftIcon
            type="fal"
            name={leftIcon}
            color="var(--color-black)"
            size="2x"
            leftIconHeight={leftIconHeight}
            ref={leftIconRef}
          />
        ) : null}
        <Select
          leftIconWidth={leftIconWidth}
          angleDownIconWidth={angleDownIconWidth}
          {...field} // eslint-disable-line react/jsx-props-no-spreading
          {...props} // eslint-disable-line react/jsx-props-no-spreading
        >
          {children}
        </Select>
        <RightIcon
          type="fal"
          name="angle-down"
          color="var(--color-black)"
          size="2x"
          rightIconHeight={rightIconHeight}
          ref={angleDownIconRef}
        />
      </InputContainer>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

export default SelectInput;
