import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper, Checkbox } from "./CheckboxInput.styled";

const CheckboxInput = ({ children, name, ...props }) => {
  const [field, meta] = useField({ ...props, name, type: "checkbox" });

  return (
    <Wrapper className="input checkbox-input">
      <label htmlFor={name}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input type="checkbox" {...field} {...props} />
        <Checkbox checked={field.value}>
          {field.value && (
            <FontAwesomeIcon
              icon={["fal", "check"]}
              color="var(--color-white)"
              size="1x"
            />
          )}
        </Checkbox>
        <span>{children}</span>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

export default CheckboxInput;
