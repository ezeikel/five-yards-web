import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { CURRENT_USER_QUERY, SIGNIN_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";

const SigninSchema = Yup.object().shape({
  email: Yup.string().required("Please enter a Email."),
  password: Yup.string().required("Please enter a Password."),
});

const StyledForgotPasswordLink = styled.a`
  align-self: center;
  color: #003569;
  cursor: pointer;
  margin-top: 16px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  > div + input {
    margin-top: 16px;
  }
`;

const Signin = () => {
  const router = useRouter();

  const [signin, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
    onCompleted({ signin: { id } }) {
      router.push(
        {
          pathname: "/feed",
        },
        "/",
      );
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            // await signin({ variables: values });
            resetForm();
          } catch (error) {
            console.error({ error });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <StyledForm>
            <TextInput name="email" placeholder="Email address" type="text" />
            <TextInput name="password" placeholder="Password" type="password" />
            <div>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link href="/request-reset">
                <StyledForgotPasswordLink>
                  Forgot password?
                </StyledForgotPasswordLink>
              </Link>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Sign{isSubmitting ? "ing" : null} In
            </button>
          </StyledForm>
        )}
      </Formik>
      {loading && console.log("loading...")}
      {error && console.error({ error })}
    </>
  );
};

export default Signin;
