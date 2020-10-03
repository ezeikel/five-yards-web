import { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { isIOS } from "react-device-detect";
import TextInput from "./TextInput";

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
  const [isIOSBrowser, setisIOSBrowser] = useState(false);

  // FIX: react hydrate causing issues when using isIOS outside of lifecycle hook - https://github.com/gatsbyjs/gatsby/issues/9849
  useEffect(() => {
    setisIOSBrowser(isIOS);
  }, []);

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
              placeholder="Choose a location"
              isIOS={isIOSBrowser}
            />
            <TextInput
              name="global"
              type="text"
              placeholder="Lorem ipsum"
              isIOS={isIOSBrowser}
            />
            <TextInput
              name="collection-date"
              type="text"
              placeholder="Choose a collection date"
              isIOS={isIOSBrowser}
            />
          </div>
          <button type="submit">{isSubmitting ? "Searching" : "Search"}</button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchTailorsForm;
