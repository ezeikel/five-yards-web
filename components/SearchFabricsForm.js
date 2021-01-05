import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectInput from "./SelectInput";
import Button from "./Button";

const FABRIC_OPTIONS = ["ANKARA", "LACE", "GEORGE", "ASOKE", "LINEN"];

const SearchFabricsSchema = Yup.object().shape({
  style: Yup.string(),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: var(--spacing-medium);
  }
`;

const SearchFabricsForm = () => {
  return (
    <Formik
      initialValues={{ style: "" }}
      validationSchema={SearchFabricsSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async ({ style }, { setSubmitting, resetForm }) => {
        try {
          // TODO: do something
          console.log({ style });

          resetForm();
        } catch (error) {
          console.error({ error });
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <SelectInput
            name="style"
            icon="layer-group"
            placeholder="Choose a type of fabric"
          >
            {FABRIC_OPTIONS.map(option => (
              <option key={option} value={option.replace(/\s/g, "")}>
                {option.charAt(0) + option.slice(1).toLowerCase()}
              </option>
            ))}
          </SelectInput>
          <Button
            primary
            type="submit"
            text={`${isSubmitting ? "Searching" : "Search"}`}
          />
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchFabricsForm;
