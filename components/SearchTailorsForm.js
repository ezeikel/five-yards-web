import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import Button from "./Button";
import SelectInput from "./SelectInput";

const GLOBAL_OPTIONS = ["LOREM IPSUM 1", "LOREM IPSUM 2", "LOREM IPSUM 3"];

const SearchTailorsSchema = Yup.object().shape({
  location: Yup.string(),
  global: Yup.boolean(),
  collectionDate: Yup.date(),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  > div {
    > div + div {
      margin-top: var(--spacing-medium);
    }
    margin-bottom: var(--spacing-large);
  }
`;

const SearchTailorsForm = () => {
  return (
    <Formik
      initialValues={{ location: "", global: "", collectionDate: "" }}
      validationSchema={SearchTailorsSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (
        { location, global, collectionDate },
        { setSubmitting, resetForm },
      ) => {
        try {
          // TODO: do something
          console.log({ location, global, collectionDate });

          resetForm();
        } catch (error) {
          console.error({ error });
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div>
            <TextInput
              name="location"
              type="text"
              icon="map-marker-alt"
              placeholder="Choose a location"
            />
            <SelectInput name="global" icon="globe" placeholder="Lorem ipsum">
              {GLOBAL_OPTIONS.map(option => (
                <option key={option} value={option.replace(/\s/g, "")}>
                  {option.charAt(0) + option.slice(1).toLowerCase()}
                </option>
              ))}
            </SelectInput>
            <TextInput
              name="collection-date"
              type="text"
              icon="calendar"
              placeholder="Choose a collection date"
            />
          </div>
          <Button
            primary
            type="submit"
            text={isSubmitting ? "Searching" : "Search"}
          />
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchTailorsForm;
