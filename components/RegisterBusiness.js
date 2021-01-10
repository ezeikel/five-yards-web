import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SelectInput from "./SelectInput";
import Button from "./Button";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";

const PROFESSION_OPTIONS = ["TAILOR", "FABRIC SELLER"];
const DAYS_OF_THE_WEEK = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
const HOURS = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
];

const RegisterBusinessSchema = Yup.object().shape({
  profession: Yup.string(),
  companyName: Yup.string(),
});

const Wrapper = styled.div`
  width: 100%;
`;

const Save = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.6rem;
  font-weight: var(--font-weight-primary-semi-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-large);
`;

const Progress = styled.div`
  height: 10px;
  background-color: var(--color-primary);
  margin-bottom: var(--spacing-huge);
`;

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 3rem;
  line-height: 33px;
  font-weight: var(--font-weight-secondary-medium);
  margin: 0 0 var(--spacing-large);
`;

const StyledForm = styled(Form)`
  .input-wrapper {
    & + .input-wrapper {
      margin-top: var(--spacing-huge);
    }
  }

  button {
    margin-top: var(--spacing-large);
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: var(--font-weight-primary-semi-bold);
    line-height: 25px;
    margin: 0 0 var(--spacing-medium);
  }

  p {
    font-size: 1.6rem;
    line-height: 21px;
    margin: 0 0 var(--spacing-large);
  }

  span {
    font-size: 1.4rem;
  }

  textarea {
    margin: 0 0 var(--spacing-large);
  }

  > .select-input {
    & + .select-input {
      margin-top: var(--spacing-medium);
    }
  }

  .hour-selection {
    & + .hour-selection {
      margin-top: var(--spacing-large);
    }
  }

  .day {
    & + .day {
      margin-top: var(--spacing-large);
    }
  }
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-medium);
      > span {
        &:first-of-type {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const HourSelection = styled.div`
  display: flex;
  > div {
    flex: 1 1 50%;
    + div {
      margin-left: var(--spacing-small);
    }
  }
`;

const RegisterBusiness = () => (
  <Wrapper>
    <Save>Save and exit</Save>
    <Progress />
    <Heading>Tell us about your business.</Heading>
    <Formik
      initialValues={{
        profession: "",
        companyName: "",
      }}
      validationSchema={RegisterBusinessSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          // TODO: do something
          console.log({ values });
        } catch (error) {
          console.error({ error });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, values }) => (
        <StyledForm>
          <InputWrapper className="input-wrapper">
            <h3>What is your profession?</h3>
            <SelectInput name="profession" placeholder="Select your profession">
              {PROFESSION_OPTIONS.map(option => (
                <option key={option} value={option.replace(/\s/g, "")}>
                  {option.charAt(0) + option.slice(1).toLowerCase()}
                </option>
              ))}
            </SelectInput>
          </InputWrapper>
          <InputWrapper className="input-wrapper">
            <h3>What is your company&apos;s name?</h3>
            <TextInput
              type="text"
              name="companyName"
              placeholder="Enter your company's name"
            />
          </InputWrapper>
          <InputWrapper className="input-wrapper">
            <h3>Company bio?</h3>
            <p>
              Write a short summary to sell yourself to your customers. Let them
              know about you, your company, experience etc...
            </p>
            <TextareaInput name="companyBio" placeholder="Sell yourself!" />
            <span>500 character limit.</span>
          </InputWrapper>
          <InputWrapper className="input-wrapper">
            <h3>What are your opening hours?</h3>
            {DAYS_OF_THE_WEEK.map(day => (
              <Day className="day" key={day}>
                <div>
                  <span>{day.charAt(0) + day.slice(1).toLowerCase()}</span>
                  <span>Toggle</span>
                </div>
                <HourSelection className="hour-selection">
                  <SelectInput name={day.toLowerCase() + "-start"}>
                    {HOURS.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectInput>
                  <SelectInput name={day.toLowerCase() + "-end"}>
                    {HOURS.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectInput>
                </HourSelection>
              </Day>
            ))}
          </InputWrapper>
          <InputWrapper className="input-wrapper">
            <h3>What time do you usually take your lunch break?</h3>
            <p>This will be used to populate your calendar.</p>
            <SelectInput name="lunchBreakStart" placeholder="Select time">
              {HOURS.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              name="lunchBreakLength"
              placeholder="Select your your lunch break length"
            >
              {HOURS.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectInput>
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
  </Wrapper>
);

export default RegisterBusiness;
