import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
import { toast } from "react-toastify";
import { CHANGE_PASSWORD_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./Button";

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Please choose an old password"),
  newPassword: Yup.string().required("Please choose a new password"),
  passwordHint: Yup.string(),
});

const Wrapper = styled.div`
  display: flex;
  margin-bottom: var(--spacing-medium);

  input {
    border-color: #bebebe;
  }
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
              primary
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
