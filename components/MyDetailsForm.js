import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import mixpanel from "mixpanel-browser";
import { CHANGE_PASSWORD_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./Button";
import useUser from "../hooks/useUser";
import removeNullProperties from "../utils/removeNullProperties";

const MyDetailsSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string(),
  phoneNumber: Yup.string(),
  gender: Yup.string(),
  neck: Yup.string(),
  waist: Yup.string(),
  armLength: Yup.string(),
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
  const { user } = useUser();

  const [updateDetails, { data, loading, error }] = useMutation(
    CHANGE_PASSWORD_MUTATION,
  );

  if (!user) return null;

  const {
    id,
    bag,
    gravatar,
    permissions,
    measurements,
    __typename,
    ...userData
  } = user;

  const userInitialValues = removeNullProperties({
    ...userData,
    ...measurements,
  });

  return (
    <Wrapper>
      <Formik
        initialValues={userInitialValues}
        validationSchema={MyDetailsSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // TODO: create mutation for this

            const userUpdatePayload = {};

            Object.keys(userInitialValues).forEach(key => {
              // TODO: this wont work for nested objects e.g. measurements
              if (userInitialValues[key] !== values[key]) {
                userUpdatePayload[key] = values[key];
              }
            });

            await updateDetails({ variables: userUpdatePayload });
            mixpanel.track("Update details");
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
              <TextInput name="gender" placeholder="Gender" type="text" />
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
            </InputWrapper>
            <Button primary type="submit" disabled={isSubmitting}>
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
