import { useCallback, useState } from "react";
import { useField } from "formik";
import Error from "../../../Error/Error";
import Icon from "../../../Icon/Icon";
import { Wrapper, InputContainer, Input, Label } from "./TextInput.styled";

const TextInput = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);

  const [iconWidth, setIconWidth] = useState(null);
  const [iconHeight, setIconHeight] = useState(null);
  const [passwordIconHeight, setPasswordIconHeight] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField =
    field.name === "password" ||
    field.name === "oldPassword" ||
    field.name === "newPassword";

  const iconRef = useCallback((node) => {
    if (node !== null) {
      const { width, height } = node.getBoundingClientRect();
      setIconWidth(width);
      setIconHeight(height);
    }
  }, []);

  const passwordIconRef = useCallback((node) => {
    if (isPasswordField && node !== null) {
      const { height } = node.getBoundingClientRect();
      setPasswordIconHeight(height);
    }
  }, []);

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
          {icon && <Icon name={icon} size="2x" ref={iconRef} />}
          <Input
            iconWidth={iconWidth}
            {...field} // eslint-disable-line react/jsx-props-no-spreading
            {...props} // eslint-disable-line react/jsx-props-no-spreading
            type={showPassword ? "text" : "password"}
          />
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size="2x"
            onClick={() => setShowPassword(!showPassword)}
            ref={passwordIconRef}
          />
        </InputContainer>
      ) : (
        <InputContainer>
          {icon && <Icon name={icon} size="2x" />}
          <Input
            iconWidth={iconWidth}
            {...field} // eslint-disable-line react/jsx-props-no-spreading
            {...props} // eslint-disable-line react/jsx-props-no-spreading
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
