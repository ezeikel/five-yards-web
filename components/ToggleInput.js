import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import Switch from "react-switch";
import Icon from "./Icon";

const Wrapper = styled.div`
  display: flex;
`;

const StyledSwitch = styled(Switch)`
  display: flex;

  .react-switch-bg,
  .react-switch-handle {
    border: 1px solid var(--color-input-border) !important;
  }
  .react-switch-handle > div {
    display: flex;
    justify-content: center;
    align-items: center;

    .fa-times {
      margin-left: -0.2em; // TODO: not sure why x is not centered correctly without this?
    }
  }
`;

const ToggleInput = ({ ...props }) => {
  const [field, helpers] = useField({ ...props, type: "checkbox" });
  const { setValue } = helpers;

  return (
    <Wrapper className="input">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <StyledSwitch
          {...field} // eslint-disable-line react/jsx-props-no-spreading
          {...props} // eslint-disable-line react/jsx-props-no-spreading
          checked={field.value}
          onChange={(checked) => {
            setValue(checked, false);
          }}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#CCCCCC"
          onColor="#D8FCFF"
          checkedHandleIcon={
            <Icon name="check" size="lg" color="var(--color-primary)" />
          }
          uncheckedHandleIcon={<Icon name="times" size="lg" color="#CCCCCC" />}
        />
      </label>
    </Wrapper>
  );
};

export default ToggleInput;
