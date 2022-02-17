import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { isIOS } from "react-device-detect";
import TextInput from "../inputs/TextInput/TextInput";
import Button from "../../Button/Button";
import { StyledForm } from "./SearchShopsForm.styled";

const SearchShopsSchema = Yup.object().shape({
  name: Yup.string(),
});

const SearchShopsForm = () => {
  const [isIOSBrowser, setisIOSBrowser] = useState(false);

  // FIX: react hydrate causing issues when using isIOS outside of lifecycle hook - https://github.com/gatsbyjs/gatsby/issues/9849
  useEffect(() => {
    setisIOSBrowser(isIOS);
  }, []);

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={SearchShopsSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async ({ name }, { setSubmitting, resetForm }) => {
        try {
          // TODO: do something
          console.log({ name }); // eslint-disable-line no-console

          resetForm();
        } catch (error) {
          console.error({ error });
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <TextInput
            name="name"
            type="text"
            icon="search"
            placeholder="Choose a shop name"
            isIOS={isIOSBrowser}
          />
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

export default SearchShopsForm;
