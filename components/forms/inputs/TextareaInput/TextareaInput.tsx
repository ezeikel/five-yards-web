import { useField } from "formik";
import Error from "../../../Error/Error";
import { Wrapper, Input, Label } from "./TextareaInput.styled";

const TextareaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Wrapper className="input textarea-input">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input minRows={4} {...field} {...props} />
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </Wrapper>
  );
};

export default TextareaInput;
