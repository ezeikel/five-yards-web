import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CURRENT_USER_QUERY, SIGNUP_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "That name is too short.")
    .max(50, "That name is too long")
    .required("Please enter a name."),
  username: Yup.string()
    .min(2, "That username is too short.")
    .max(50, "That username is too long.")
    .required("Please enter a username."),
  email: Yup.string()
    .email("That email is invalid. Please try again.")
    .required("Please enter an email."),
  password: Yup.string()
    .min(9, "That password is too short.")
    .required("Please enter a password."),
});

const SignupForm = () => {
  const router = useRouter();

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    mutation: SIGNUP_MUTATION,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    // onCompleted({ signup: { username } }) {
    //   router.push("/[username]", `/${username}`);
    // },
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", fullName: "", username: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log({ values });
          try {
            await signup({ variables: values });
            resetForm();
          } catch (error) {
            console.error(error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <TextInput label="fullName" name="fullName" type="text" />
            <TextInput label="email" name="email" type="email" />
            <TextInput label="username" name="username" type="text" />
            <TextInput label="password" name="password" type="password" />
            <button type="submit" disabled={isSubmitting}>
              Sign Up {isSubmitting ? <div>Loading...</div> : null}
            </button>
          </Form>
        )}
      </Formik>
      {loading && console.log("loading...")}
      {error && console.error({ error })}
    </>
  );
};

export default SignupForm;
