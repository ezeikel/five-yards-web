import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { toast } from "react-toastify";
import mixpanel from "mixpanel-browser";
import { UPDATE_USER_MUTATION } from "../apollo/queries";
import TextInput from "./TextInput";
import Button from "./Button";
import useUser from "../hooks/useUser";
import removeNullProperties from "../utils/removeNullProperties";
import SelectInput from "./SelectInput";

const GENDER_OPTIONS = ["MALE", "FEMALE", "NON BINARY", "NOT SPECIFIED"];

const PHONE_REGEX = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const MyDetailsSchema = Yup.object().shape({
  firstName: Yup.string().max(15, "Must be 15 characters or less"), // TODO: think these fields should be required unless means you have to submit every time
  lastName: Yup.string().max(20, "Must be 20 characters or less"),
  email: Yup.string().email("Invalid email address"),
  phone: Yup.string().matches(PHONE_REGEX, "Phone number is not valid"),
  gender: Yup.string().required("Gender is required"),
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
  .input + .input {
    margin-top: var(--spacing-medium);
  }
`;

const Heading = styled.h2`
  font-family: var(--font-family-secondary);
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

// const SelectInput = styled(Field)`
//   position: relative;
//   line-height: normal;
//   border-radius: var(--border-radius);
//   border: 1px solid var(--color-input-border);
//   width: 100%;
//   padding: var(--spacing-medium);
//   font-family: var(--font-family-primary);
//   font-size: 1.6rem;
//   @media (min-width: 1280px) {
//     font-size: 2rem;
//     line-height: 31px;
//     padding: 16px 34px;
//   }
// `;

const MyDetailsForm = () => {
  const { user } = useUser();

  const [updateDetails, { loading, error }] = useMutation(UPDATE_USER_MUTATION);

  if (!user) return null;

  const { id, bag, gravatar, permissions, __typename, ...userData } = user;

  const userInitialValues = removeNullProperties({
    ...userData,
  });

  return (
    <Wrapper>
      <Formik
        initialValues={userInitialValues}
        validationSchema={MyDetailsSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const userUpdatePayload = {
              id,
            };

            // TODO: this wont work for nested objects e.g. measurements
            Object.keys(values).forEach(key => {
              if (
                !userInitialValues[key] ||
                userInitialValues[key] !== values[key]
              ) {
                userUpdatePayload[key] = values[key];
              }
            });

            await updateDetails({
              variables: userUpdatePayload,
            });

            mixpanel.track("Update details");

            toast("Your details have been updated successfully.");
          } catch (error) {
            toast("Something went wrong, please try again.");
            console.error({ error });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values }) => (
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
              <SelectInput
                name="gender"
                leftIcon="venus-mars"
                placeholder="Gender"
              >
                {GENDER_OPTIONS.map(option => (
                  <option key={option} value={option.replace(/\s/g, "")}>
                    {option.charAt(0) + option.slice(1).toLowerCase()}
                  </option>
                ))}
              </SelectInput>
              <TextInput
                name="email"
                type="email"
                icon="envelope"
                placeholder="Email"
              />
              <TextInput
                name="phone"
                type="tel"
                icon="phone-alt"
                placeholder="Phone number"
              />
            </InputWrapper>
            <InputWrapper>
              <Heading>My Measurements</Heading>
              <SubHeading>
                Please only input measurements, if they have been taken by a
                professional tailor.
              </SubHeading>
              <TextInput
                name="measurements.neck"
                type="number"
                icon="ruler"
                placeholder="Neck"
              />
              <TextInput
                name="measurements.waist"
                type="number"
                icon="ruler"
                placeholder="Waist"
              />
              <TextInput
                name="bust"
                type="number"
                icon="ruler"
                placeholder="Bust"
              />
              <TextInput
                name="measurements.armLength"
                type="number"
                icon="ruler"
                placeholder="Arm Length"
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
      {loading && console.log("loading...")}
      {error && console.error({ error })}
    </Wrapper>
  );
};

export default MyDetailsForm;
