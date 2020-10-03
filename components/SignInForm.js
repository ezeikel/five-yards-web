import { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { isIOS } from "react-device-detect";
import TextInput from "./TextInput";
import Link from "next/link";

const SignInSchema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string(),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    &:first-of-type {
      flex-direction: column;
      margin-bottom: var(--spacing-medium);
    }
    &:nth-of-type(2) {
      align-items: center;
      margin-bottom: var(--spacing-medium);
      justify-content: space-between;
      font-size: 14px;
      a {
        color: var(--color-primary);
      }
      > span {
        display: flex;
        align-items: center;
        input[type="checkbox"] {
          margin: 0 var(--spacing-small) 0 0;
        }
      }
    }
    &:nth-of-type(3) {
      font-size: 16px;
      font-weight: 300;
      justify-content: center;
      margin-bottom: var(--spacing-large);
      a {
        font-weight: 400;
        color: var(--color-primary);
      }
    }
  }
  .text-input {
    + .text-input {
      margin-top: var(--spacing-large);
    }
    input {
      font-size: 16px;
      padding: 16px;
    }
  }

  button[type="submit"] {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: 20px;
    border: 1px solid var(--color-primary);
    font-family: var(--primary-font-family);
    border-radius: 6px;
    padding: var(--spacing-small);
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
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async ({ email, password }, { setSubmitting, resetForm }) => {
        try {
          // TODO: do something
          console.log({ email, password });

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
              name="email"
              type="email"
              placeholder="E-mail address"
              isIOS={isIOSBrowser}
            />
            <TextInput
              name="password"
              type="password"
              placeholder="Password"
              isIOS={isIOSBrowser}
            />
          </div>
          <div>
            <span>
              <input type="checkbox" />
              <label>Remember me</label>
            </span>
            <Link href="/">
              <a>Forgot password?</a>
            </Link>
          </div>
          <button type="submit">
            {isSubmitting ? "Signing in" : "Sign in"}
          </button>
          <div>
            Do not have an account? &nbsp;
            <Link href="/">
              <a>Sign up</a>
            </Link>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchFabricsForm;
