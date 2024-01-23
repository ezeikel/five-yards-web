import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../Button/Button';
import StepOne from './steps/StepOne/StepOne';
import StepTwo from './steps/StepTwo/StepTwo';
import StepThree from './steps/StepThree/StepThree';
import StepFour from './steps/StepFour/StepFour';
import {
  Wrapper,
  Save,
  StyledProgressBar,
  StyledForm,
} from './RegisterBusinessForm.styled';

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

// eslint-disable-next-line
const pages = [
  <StepOne />, // name and opening hours
  <StepTwo />, // services and expertise
  <StepThree />, // location
  <StepFour />, // final
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
          profession: '',
          companyName: '',
          companyBio: '',
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
                <Button text="Back" onClick={previousPage} />
                <Button
                  disabled={isSubmitting}
                  text={`Submit${isSubmitting ? 'ting' : ''}`}
                  onClick={() => submitForm()}
                />
              </div>
            ) : (
              <div>
                {!isFirstStep && <Button text="Back" onClick={previousPage} />}
                <Button text="Next" onClick={nextPage} />
              </div>
            )}
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterBusiness;
