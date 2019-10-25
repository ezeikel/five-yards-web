import { useState } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { REQUEST_LAUNCH_NOTIFICATION_MUTATION } from '../apollo/queries';
import { rotateKeyFrame } from "../GlobalStyle";

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
  margin-bottom: 350px;
  @media(min-width: 768px) {
    height: 75vh;
    margin-bottom: 200px;
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
  text-decoration: ${props => props.disabled ? 'line-through' : 'none'};
  width: 100%;
  @media (min-width: 768px) {
    margin-left: 8px;
    width: auto;
  }
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
  right: 50%;
  margin-right: -160px;
  margin-top: -80px;
  width: 320px;
  height: 160px;
  font-family: 'Canted FX Bold';
  font-size: 48px;
  color: var(--color-white);

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h4 {
    margin: 0;
    font-size: 32px;
    span {
      font-family: 'Canted FX Regular';
    }
  }
  @media (min-width: 768px) {
    left: 50px;
    h4 {
      font-size: 48px;
    }
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    div + div {
      margin-left: 8px;
    }
  }
`;

const FieldWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
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
  display: none;
  flex-direction: column;
  width: 200px;
  height: 160px;
  margin-top: -80px;
  img {
    width: 100%;
    height: 80px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const IphoneMockup = styled.div`
  display: flex;
  height: 600px;
  margin-bottom: 64px;
  background-image: url('/static/images/iphone-mockup-single.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    background-image: url('/static/images/iphone-mockup-double.png');
  }
`;

const Spinner = styled(FontAwesomeIcon)`
    animation: ${rotateKeyFrame} ease-in-out 1.2s infinite;
    flex: 0 1 auto;
`;

const SuccessMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-bottom: 32px;
  }
`;

const SuccessMessage = styled.span`
  font-size: 26px;
  font-weight: bold;
  line-height: 37px;
`;

const PreLaunchLanding = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
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
              {!formSubmitted ? (
                <React.Fragment>
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
                        setFormSubmitted(true);
                      } catch(e) {
                        console.error(e);
                      }
                    }}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <StyledForm>
                        <React.Fragment>
                          <FieldWrapper>
                            <StyledField error={touched.firstName && errors.firstName} type="text" name="firstName" placeholder="First name" />
                            <StyledErrorMessage name="firstName" component="span" />
                          </FieldWrapper>
                          <FieldWrapper>
                            <StyledField error={touched.email && errors.email} type="email" name="email" placeholder="Email address" />
                            <StyledErrorMessage name="email" component="span" />
                          </FieldWrapper>
                          <StyledButton type="submit" disabled={!touched.firstName || !touched.email || errors.firstName || errors.email}>
                            {isSubmitting || loading ? <Spinner icon={["fad", "spinner-third"]} size="lg" /> : 'Notify Me'}
                          </StyledButton>
                        </React.Fragment>
                      </StyledForm>
                    )}
                  </Formik>
                </React.Fragment>
              ) : (
                <SuccessMessageWrapper>
                  <FontAwesomeIcon icon={["fas", "check-circle"]} color="#27AE60" size="10x" />
                  <SuccessMessage>Got it. You're all set &nbsp; 🎉</SuccessMessage>
                </SuccessMessageWrapper>
              )}
            </FormWrapper>
          </Hero>
          <IphoneMockup />
        </Wrapper>
      )}
    </Mutation>
  );
};

export default PreLaunchLanding;