import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { CURRENT_USER_QUERY, SIGNUP_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./styles/Button";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "That name is too short.")
    .max(50, "That name is too long")
    .required("Please enter a name."),
  email: Yup.string()
    .email("That email is invalid. Please try again.")
    .required("Please enter an email."),
  password: Yup.string()
    .min(9, "That password is too short.")
    .required("Please enter a password."),
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
        initialValues={{ email: "", fullName: "", username: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log({ values });
          try {
            await signup({ variables: values });
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
              <TextInput name="fullName" type="text" placeholder="Full name" />
              <TextInput name="email" type="email" placeholder="Email" />
              <TextInput
                name="password"
                type="password"
                placeholder="Create password"
              />
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
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
