import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    font-family: var(--font-family-primary);
    font-size: 1.4rem;

    input {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    label {
      font-size: 2rem;
      line-height: 31px;
      padding: 16px 34px;
    }
  }
`;

const Checkbox = styled.div`
  display: flex;
  place-items: center;
  border-radius: var(--border-radius);
  border: 1px solid
    ${({ checked }) =>
      checked ? "var(--color-primary)" : "var(--color-input-border)"};
  padding: var(--spacing-tiny);
  margin: 0 var(--spacing-small) 0 0;
  width: 20px;
  height: 20px;
  background-color: ${({ checked }) =>
    checked ? "var(--color-primary)" : "var(--color-white)"};
`;

const CheckboxInput = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <Wrapper className="input checkbox-input">
      <label>
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
