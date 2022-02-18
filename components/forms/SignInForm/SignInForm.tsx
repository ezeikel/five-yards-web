import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";
import mixpanel from "mixpanel-browser";
import { CURRENT_USER_QUERY, LOGIN_MUTATION } from "../../../apollo/queries";
import TextInput from "../inputs/TextInput/TextInput";
import Button from "../../Button/Button";
import CheckboxInput from "../inputs/CheckboxInput/CheckboxInput";
import formatAPIErrors from "../../../utils/formatAPIErrors";
import { Wrapper, InputWrapper, StyledForm, Help } from "./SignInForm.styled";

const SigninSchema = Yup.object().shape({
  email: Yup.string().required("Please enter an email"),
  password: Yup.string().required("Please enter a password"),
  rememberMe: Yup.bool(),
});

const SignInForm = () => {
  const router = useRouter();

  const [logIn, { loading, error }] = useMutation(LOGIN_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={SigninSchema}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          try {
            await logIn({ variables: values });
            mixpanel.track("Log in");
            resetForm();
            router.push("/");
          } catch (err) {
            const formattedErrors = formatAPIErrors(error);
            setErrors(formattedErrors);
            console.error({ err });
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
                icon="envelope"
                type="email"
              />
              <TextInput
                name="password"
                placeholder="Password"
                icon="key"
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
            <Button
              type="submit"
              disabled={isSubmitting}
              text={`Sign${isSubmitting ? "ing" : ""} In`}
            />
          </StyledForm>
        )}
      </Formik>
      {loading && console.warn("loading...")}
      {error && console.error({ error })}
    </Wrapper>
  );
};

export default SignInForm;
