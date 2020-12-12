import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
import { CHANGE_PASSWORD_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./styles/Button";

const MyDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter a first name."),
  lastName: Yup.string().required("Please enter a last name."),
  email: Yup.string().required("Please enter an email."),
  phoneNumber: Yup.string().required("Please enter a phone number."),
  gender: Yup.string().required("Please enter a gender."),
  neck: Yup.string().required("Please enter a neck measurement."),
  waist: Yup.string().required("Please enter a waist measurement."),
  bust: Yup.string().required("Please enter a bust measurement."),
  armLength: Yup.string().required("Please enter an arm length measurement."),
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

const Heading = styled.h2`
  font-family: var(--secondary-font-family);
  font-size: 3rem;
  font-weight: var(--font-weight-secondary-medium);
  text-align: center;
  margin: 0 0 var(--spacing-medium);
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: var(--font-weight-primary-regular);
  text-align: center;
  margin: 0 0 var(--spacing-large);
`;

const MyDetailsForm = () => {
  const router = useRouter();

  const [updateDetails, { data, loading, error }] = useMutation(
    CHANGE_PASSWORD_MUTATION,
  );

  return (
    <Wrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          neck: "",
          waist: "",
          bust: "",
          armLength: "",
          gender: "",
        }}
        validationSchema={MyDetailsSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            // TODO: create mutation for this
            // await updateDetails({ variables: values });
            mixpanel.track("Update details");
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
                name="firstName"
                placeholder="First name"
                type="text"
              />
              <TextInput name="lastName" placeholder="Last name" type="text" />
              <TextInput name="email" placeholder="Email" type="email" />
              <TextInput
                name="phoneNumber"
                placeholder="Phone number"
                type="tel"
              />
            </InputWrapper>
            <InputWrapper>
              <Heading>My Measurements</Heading>
              <SubHeading>
                Please only input measurements, if they have been taken by a
                professional tailor.
              </SubHeading>
              <TextInput name="neck" placeholder="Neck" type="number" />
              <TextInput name="waist" placeholder="Waist" type="number" />
              <TextInput name="bust" placeholder="Bust" type="number" />
              <TextInput
                name="armLength"
                placeholder="Arm Length"
                type="number"
              />
              <TextInput name="gender" placeholder="Gender" type="text" />
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

export default MyDetailsForm;
