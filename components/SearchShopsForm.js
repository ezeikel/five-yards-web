import { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { isIOS } from "react-device-detect";
import TextInput from "./TextInput";
import Button from "./Button";

const SearchShopsSchema = Yup.object().shape({
  name: Yup.string(),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: var(--spacing-medium);
  }
`;

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
          console.log({ name });

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
            placeholder="Choose a shop name"
            isIOS={isIOSBrowser}
          />
          <Button primary type="submit">
            {isSubmitting ? "Searching" : "Search"}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchShopsForm;
