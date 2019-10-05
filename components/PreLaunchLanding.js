import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Wrapper = styled.div`
  background-image: radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 210px;
`;

const MailingListWrapper = styled.div`
  border: 3px solid red;
`;

const PreLaunchLanding = () => (
  <Wrapper>
    <MailingListWrapper>
      <Logo src="/static/images/logo-2-white.png" />
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          let erros = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </MailingListWrapper>
  </Wrapper>
);

export default PreLaunchLanding;