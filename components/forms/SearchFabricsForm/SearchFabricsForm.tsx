import { Formik } from "formik";
import * as Yup from "yup";
import SelectInput from "../inputs/SelectInput/SelectInput";
import Button from "../../Button/Button";
import { StyledForm } from "./SearchFabricsForm.styled";

const FABRIC_OPTIONS = ["ANKARA", "LACE", "GEORGE", "ASOKE", "LINEN"];

const SearchFabricsSchema = Yup.object().shape({
  style: Yup.string(),
});

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
          console.log({ style }); // eslint-disable-line no-console

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
            {FABRIC_OPTIONS.map((option) => (
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
