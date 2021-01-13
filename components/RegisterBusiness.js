import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import { useEffect, useState } from "react";
import StepOne from "./register-business/StepOne";
import StepTwo from "./register-business/SetpTwo";
import StepThree from "./register-business/StepThree";
import ProgressBar from "./ProgressBar";

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

const StyledProgressBar = styled(ProgressBar)`
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

// eslint-disable-next-line
const pages = [<StepOne />, <StepTwo />, <StepThree />];

const RegisterBusiness = () => {
  const [page, setPage] = useState(0);
  const [percent, setPercent] = useState(0);

  const nextPage = () => setPage(page => page + 1);
  const previousPage = () => setPage(page => page - 1);

  const isLastStep = page === pages.length - 1;
  const isFirstStep = page === 0;

  useEffect(() => {
    setPercent(Math.round(((page + 1) / pages.length) * 100));
  }, [page]);

  return (
    <Wrapper>
      <Save>Save and exit</Save>
      <StyledProgressBar percent={percent} />
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
            {pages[page]}
            {isLastStep ? (
              <div>
                <Button primary text="Back" onClick={previousPage} />
                <Button
                  primary
                  type="submit"
                  disabled={isSubmitting}
                  text={`Sav${isSubmitting ? "ing" : "e"} changes`}
                />
              </div>
            ) : (
              <div>
                {!isFirstStep && (
                  <Button primary text="Back" onClick={previousPage} />
                )}
                <Button primary text="Next" onClick={nextPage} />
              </div>
            )}
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterBusiness;
