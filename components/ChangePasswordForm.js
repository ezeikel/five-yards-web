import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
import { CHANGE_PASSWORD_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./styles/Button";

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Please enter a Email."),
  newPassword: Yup.string().required("Please enter a Password."),
  passwordHint: Yup.string().required("Please enter a Password."),
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

const ChangePasswordForm = () => {
  const router = useRouter();

  const [changePassword, { data, loading, error }] = useMutation(
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
                name="oldPassword"
                placeholder="Old password"
                type="password"
              />
              <TextInput
                name="newPassword"
                placeholder="New password"
                type="password"
              />
              <TextInput
                name="passwordHint"
                placeholder="Password hint"
                type="text"
              />
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Sav{isSubmitting ? "ing" : "e"} changes
            </Button>
          </StyledForm>
        )}
      </Formik>
      {loading && console.log("loading...")}
      {error && console.error({ error })}
    </Wrapper>
  );
};

export default ChangePasswordForm;
