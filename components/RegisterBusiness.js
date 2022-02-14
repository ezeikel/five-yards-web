import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import Button from "./Button";
import NameAndOpeningHours from "./register-business/NameAndOpeningHours";
import ServicesAndExpertise from "./register-business/ServicesAndExpertise";
import Location from "./register-business/Location";
import Final from "./register-business/Final";
import ProgressBar from "./ProgressBar";

// TODO: fix nested object schema
const RegisterBusinessSchema = Yup.object().shape({
  profession: Yup.string(),
  companyName: Yup.string(),
  companyBio: Yup.string(),
  // hours: {
  //   monday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  //   tuesday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  //   wednesday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  //   thursday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  //   friday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  //   saturday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  //   sunday: {
  //     open: false,
  //     openTime: 0,
  //     closeTime: 0,
  //   },
  // },
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
const pages = [
  <NameAndOpeningHours />,
  <ServicesAndExpertise />,
  <Location />,
  <Final />,
];

const RegisterBusiness = () => {
  const [page, setPage] = useState(0);
  const [percent, setPercent] = useState(0);

  const nextPage = () => setPage((currentPage) => currentPage + 1);
  const previousPage = () => setPage((currentPage) => currentPage - 1);

  const isLastStep = page === pages.length - 1;
  const isFirstStep = page === 0;

  useEffect(() => {
    setPercent(Math.round(((page + 1) / pages.length) * 100));
  }, [page]);

  // TODO: https://stackoverflow.com/questions/17460235/mongodb-opening-hours-schema-and-query-for-open-closed

  return (
    <Wrapper>
      <Save>Save and exit</Save>
      <StyledProgressBar percent={percent} />
      <Formik
        initialValues={{
          profession: "",
          companyName: "",
          companyBio: "",
          hours: {
            monday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
            tuesday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
            wednesday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
            thursday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
            friday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
            saturday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
            sunday: {
              open: false,
              openTime: 0,
              closeTime: 0,
            },
          },
          yearsExperience: 0,
          priceRange: 0,
          services: {
            alterations: false,
            designServices: false,
            bespokeOutfits: false,
            groupBookings: false,
            remoteTailoring: false,
            inPersonTailoring: false,
            other: false,
          },
        }}
        validationSchema={RegisterBusinessSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // TODO: do something
            // eslint-disable-next-line no-console
            console.log({ values });
          } catch (error) {
            console.error({ error });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, submitForm }) => (
          <StyledForm>
            {pages[page]}
            {isLastStep ? (
              <div>
                <Button
                  type="button"
                  primary
                  text="Back"
                  onClick={previousPage}
                />
                <Button
                  type="button"
                  primary
                  disabled={isSubmitting}
                  text={`Submit${isSubmitting ? "ting" : ""}`}
                  onClick={() => submitForm()}
                />
              </div>
            ) : (
              <div>
                {!isFirstStep && (
                  <Button
                    type="button"
                    primary
                    text="Back"
                    onClick={previousPage}
                  />
                )}
                <Button type="button" primary text="Next" onClick={nextPage} />
              </div>
            )}
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterBusiness;
