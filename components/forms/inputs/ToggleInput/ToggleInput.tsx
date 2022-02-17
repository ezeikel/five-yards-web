import { useField } from "formik";
import Icon from "../../../Icon/Icon";
import { Wrapper, StyledSwitch } from "./ToggleInput.styled";

const ToggleInput = ({ ...props }) => {
  const [field, , helpers] = useField({ ...props, type: "checkbox" });
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
