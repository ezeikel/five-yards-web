import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
import { CURRENT_USER_QUERY, SIGNUP_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./Button";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "That name is too short")
    .max(50, "That name is too long")
    .required("Please enter a first name"),
  lastName: Yup.string()
    .min(2, "That name is too short")
    .max(50, "That name is too long")
    .required("Please enter a last name"),
  email: Yup.string()
    .email("That email is invalid. Please try again")
    .required("Please enter an email"),
  password: Yup.string()
    .min(9, "That password is too short")
    .required("Please enter a password"),
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

const SignUpForm = () => {
  const router = useRouter();

  const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    mutation: SIGNUP_MUTATION,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log({ values });
          try {
            await signup({ variables: values });
            mixpanel.track("Register");
            resetForm();
            router.push("/");
          } catch (error) {
            console.error(error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputWrapper>
              <TextInput
                name="firstName"
                type="text"
                icon="user"
                placeholder="First name"
              />
              <TextInput
                name="lastName"
                type="text"
                icon="user"
                placeholder="Last name"
              />
              <TextInput
                name="email"
                type="email"
                icon="envelope"
                placeholder="Email"
              />
              <TextInput
                name="password"
                type="password"
                icon="key"
                placeholder="Create password"
              />
            </InputWrapper>
            <Button primary type="submit" disabled={isSubmitting}>
              Register{isSubmitting ? "ing" : null}
            </Button>
          </StyledForm>
        )}
      </Formik>
      {loading && console.log("loading...")}
      {error && console.error({ error })}
    </Wrapper>
  );
};

export default SignUpForm;
