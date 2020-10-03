import { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { isIOS } from "react-device-detect";
import TextInput from "./TextInput";

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
  const [isIOSBrowser, setisIOSBrowser] = useState(false);

  // FIX: react hydrate causing issues when using isIOS outside of lifecycle hook - https://github.com/gatsbyjs/gatsby/issues/9849
  useEffect(() => {
    setisIOSBrowser(isIOS);
  }, []);

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
          <TextInput
            name="style"
            type="text"
            placeholder="Choose a type of fabric"
            isIOS={isIOSBrowser}
          />
          <button type="submit">{isSubmitting ? "Searching" : "Search"}</button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchFabricsForm;
