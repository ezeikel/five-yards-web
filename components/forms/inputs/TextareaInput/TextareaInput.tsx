import { useField } from 'formik';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import Error from '../../../Error/Error';
import { Wrapper, Input, Label } from './TextareaInput.styled';

type TextareaInputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  name: string;
  handleChange?: (e: ChangeEvent) => void;
  className?: string;
};

const TextareaInput = ({
  label,
  name,
  className,
  ...props
}: TextareaInputProps) => {
  const [field, meta] = useField({ ...props, name });

  return (
    <Wrapper className={`input textarea-input ${className}`}>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input minRows={4} {...field} {...props} />
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </Wrapper>
  );
};

export default TextareaInput;
