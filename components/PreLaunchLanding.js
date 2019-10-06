import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Wrapper = styled.div`
  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
  /* min-height: 73vh; */
  min-width: 100vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* margin-bottom: 30vh; */
`;

const FormWrapper = styled.section`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 600px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
  background-color: #fff;
  transform: translateY(200px);
`;

const Logo = styled.img`
  width: 250px;
  flex: 0 0 auto;
`;

const LogoText = styled.img`
  width: 212px;
  margin-bottom: 64px;
`;

const Copy = styled.div`
  margin-bottom: 28px;
  font-family: 'Source Sans Pro';
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

const Button = styled.button`
  background-color: #F47793;
  border: 1px solid #F47793;
  border-radius: 4px;
  font-size: 16px;
  font-weight:bold;
  color: #fff;
  padding: 13px 25px 12px 25px;
  cursor: pointer;
`;

const StyledField = styled(Field)`
  border-radius: 4px;
  border: 1px solid #EBEBEB;
  font-size: 16px;
  padding: 13px 0 12px 11px;
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
  color: #fff;
  h4 {
    margin: 0;
    span {
      font-family: 'Canted FX Regular';
    }
  }
`;

const StyledForm = styled(Form)`
  font-family: 'Source Sans Pro';
  input + input, button {
    margin-left: 8px;
  }
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

const PreLaunchLanding = () => (
  <Wrapper>
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
          <StyledForm>
            <StyledField type="text" name="firstName" placeholder="First name" />
            <StyledField type="email" name="email" placeholder="Email address" />
            <ErrorMessage name="email" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Notify me
            </Button>
          </StyledForm>
        )}
      </Formik>

    </FormWrapper>
  </Wrapper>
);

export default PreLaunchLanding;