import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { REQUEST_LAUNCH_NOTIFICATION_MUTATION } from '../apollo/queries';

const PreLaunchLandingSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('We need this.'),
  email: Yup.string()
    .email('Doesn\'t look quite right.')
    .required('We need this.')
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Hero = styled.section`
  padding: 50px 50px 0 50px;
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
  min-width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  height: 100vh;
  margin-bottom: 214px;
  @media(min-height: 768px) {
    height: 75vh;
  }
`;

const FormWrapper = styled.section`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  background-color: var(--color-white);
  transform: translateY(50%);
`;

const Logo = styled.img`
  width: 250px;
  flex: 0 0 auto;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-left: -125px;
`;

const LogoText = styled.img`
  width: 212px;
  margin-bottom: 64px;
`;

const Copy = styled.div`
  margin-bottom: 28px;
  p {
    text-align: center;
    margin: 0;
  }
  p:first-of-type {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p:nth-of-type(2) {
    font-size: 18px;
  }
`;

const StyledButton = styled.button`
  background-color: #F47793;
  border: 1px solid #F47793;
  border-radius: 4px;
  font-size: 16px;
  font-weight:bold;
  color: var(--color-white);
  padding: 13px 25px 12px 25px;
  cursor: pointer;
  align-self: flex-start;
  margin-left: 8px;
  text-decoration: ${props => props.disabled ? 'line-through' : 'none'};
`;

const StyledField = styled(Field)`
  border-radius: 4px;
  border: 1px solid ${props => props.error ? '#E74C3C' : '#EBEBEB'};
  font-size: 16px;
  padding: 12px 11px 12px 11px;
  &::placeholder {
    color: #484848;
  }
`;

const HeaderCopy = styled.div`
  top: 50%;
  position: absolute;
  left: 50px;
  margin-top: -80px;
  width: 320px;
  height: 160px;
  font-family: 'Canted FX Bold';
  font-size: 48px;
  color: var(--color-white);
  h4 {
    margin: 0;
    span {
      font-family: 'Canted FX Regular';
    }
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  div + div {
    margin-left: 8px;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  border-radius: 4px;
  border: 1px solid #EBEBEB;
  font-size: 16px;
  padding: 12px 11px 12px 11px;
  background-color: #E74C3C;
  color: white;
  margin-top: 8px;
`;

const AppStoreBadges = styled.div`
  position: absolute;
  top: 50%;
  right: 50px;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 160px;
  margin-top: -80px;
  img {
    width: 100%;
    height: 80px;
  }
`;

const IphoneMockup = styled.img`
  display: flex;
  margin-bottom: 64px;
`;

const Footer = styled.footer`
  min-height: 400px;
  background-color: #000;
  padding: 64px;
`;

const PreLaunchLanding = () => (
  <Mutation
    mutation={REQUEST_LAUNCH_NOTIFICATION_MUTATION}
  >
    {( requestLaunchNotification, { loading }) => (
      <Wrapper>
        <Hero>
          <Logo src="/static/images/logo-1-white.svg" />
          <HeaderCopy>
            <h4><span>Find</span> Fabrics</h4>
            <h4><span>Find</span> Tailors</h4>
          </HeaderCopy>
          <AppStoreBadges>
            <img src="/static/images/app-store-badge.svg" />
            <img src="/static/images/google-play-badge.svg" />
          </AppStoreBadges>
          <FormWrapper>
            <LogoText src="/static/images/logo-5-black.svg" />
            <Copy>
              <p>Transforming the way you do traditional.</p>
              <p>Sign up to be the first to know when we launch</p>
            </Copy>
            <Formik
              initialValues={{ firstName: '', email: '' }}
              validationSchema={PreLaunchLandingSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await requestLaunchNotification({
                    variables: {
                      ...values
                    }
                  });

                  setSubmitting(false);
                } catch(e) {
                  console.error(e);
                }
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <StyledForm>
                  <FieldWrapper>
                    <StyledField error={touched.firstName && errors.firstName} type="text" name="firstName" placeholder="First name" />
                    <StyledErrorMessage name="firstName" component="span" />
                  </FieldWrapper>
                  <FieldWrapper>
                    <StyledField error={touched.email && errors.email} type="email" name="email" placeholder="Email address" />
                    <StyledErrorMessage name="email" component="span" />
                  </FieldWrapper>
                  <StyledButton type="submit" disabled={!touched.firstName || !touched.email || errors.firstName || errors.email}>
                    Notify me {isSubmitting || loading ? <span>...</span> : null}
                  </StyledButton>
                </StyledForm>
              )}
            </Formik>
          </FormWrapper>
        </Hero>
        <IphoneMockup src="/static/images/iphone-mockup-double.png" />
      </Wrapper>
    )}
  </Mutation>
);

export default PreLaunchLanding;