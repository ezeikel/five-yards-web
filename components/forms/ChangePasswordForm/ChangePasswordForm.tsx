import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";
import mixpanel from "mixpanel-browser";
import { toast } from "react-toastify";
import { CHANGE_PASSWORD_MUTATION } from "../../../apollo/queries";
import TextInput from "../inputs/TextInput/TextInput";
import Button from "../../Button/Button";
import { Wrapper, InputWrapper, StyledForm } from "./ChangePasswordForm.styled";

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Please choose an old password"),
  newPassword: Yup.string().required("Please choose a new password"),
  passwordHint: Yup.string(),
});

const ChangePasswordForm = () => {
  const router = useRouter();

  const [changePassword, { loading, error }] = useMutation(
    CHANGE_PASSWORD_MUTATION,
  );

  return (
    <Wrapper>
      <Formik
        initialValues={{ oldPassword: "", newPassword: "", passwordHint: "" }}
        validationSchema={ChangePasswordSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await changePassword({ variables: values });
            mixpanel.track("Change password");
            resetForm();
            toast("Password changed successfully.");
            router.push("/");
          } catch (err) {
            toast("Something went wrong, please try again.");
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
                name="oldPassword"
                type="password"
                icon="unlock"
                placeholder="Old password"
              />
              <TextInput
                name="newPassword"
                type="password"
                icon="lock"
                placeholder="New password"
              />
              <TextInput
                name="passwordHint"
                type="text"
                icon="question-circle"
                placeholder="Password hint"
              />
            </InputWrapper>
            <Button
              type="submit"
              disabled={isSubmitting}
              text={`Sav${isSubmitting ? "ing" : "e"} changes`}
            />
          </StyledForm>
        )}
      </Formik>
      {loading && console.warn("loading...")}
      {error && console.error({ error })}
    </Wrapper>
  );
};

export default ChangePasswordForm;
