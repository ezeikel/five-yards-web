import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
import { CURRENT_USER_QUERY, SIGNIN_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./Button";
import CheckboxInput from "./CheckboxInput";

const SigninSchema = Yup.object().shape({
  email: Yup.string().required("Please enter a Email."),
  password: Yup.string().required("Please enter a Password."),
  rememberMe: Yup.bool(),
});

const Wrapper = styled.div`
  display: flex;
  margin-bottom: var(--spacing-medium);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-large);
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  .text-input + .text-input {
    margin-top: var(--spacing-medium);
  }
`;

const Help = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: var(--spacing-medium);
  .input-checkbox {
    font-weight: var(--font-weight-primary-regular);
    display: flex;
    align-items: center;
    input {
      margin-right: var(--spacing-small);
    }
  }
  a {
    font-weight: var(--font-weight-primary-medium);
    color: var(--color-primary);
  }
`;

const SignInForm = () => {
  const router = useRouter();

  const [signin, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={SigninSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await signin({ variables: values });
            mixpanel.track("Sign in");
            resetForm();
            router.push("/");
          } catch (error) {
            console.error({ error });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputWrapper>
              <TextInput
                name="email"
                placeholder="Email address"
                type="email"
              />
              <TextInput
                name="password"
                placeholder="Password"
                type="password"
              />
            </InputWrapper>
            <Help>
              <CheckboxInput name="rememberMe">
                Remember me &nbsp;
              </CheckboxInput>
              {/* <label>
                <input type="checkbox" />
              </label> */}
              <Link href="/request-reset">
                <a>Forgot password?</a>
              </Link>
            </Help>
            <Button primary type="submit" disabled={isSubmitting}>
              Sign{isSubmitting ? "ing" : null} In
            </Button>
          </StyledForm>
        )}
      </Formik>
      {loading && console.log("loading...")}
      {error && console.error({ error })}
    </Wrapper>
  );
};

export default SignInForm;
