import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { withAuth } from '../../context/auth';
import Spinner from '../Spinner';
import Button from '../../styles/Button';
import Form from '../../styles/Form';
import FormFields from '../../styles/FormFields';
import FormActions from '../../styles/FormActions';
import FieldSet from '../../styles/FieldSet';
import FormInput from '../../styles/FormInput';
import FormInputError from '../../styles/FormInputError';
import styled from 'styled-components';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
});

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  h1 {
    margin: 0;
    font-size: 22px;
  }
`;

class Signin extends Component {
  render() {
    const { signin } = this.props;

    return (
      <Wrapper>
        <h1>Welcome back</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SigninSchema}
          onSubmit={async (values, actions) => {
            await signin(values, actions);
          }}
        >
          {({
            isSubmitting,
            errors,
            touched
          }) => (
            <Form>
              <FormFields>
                <FieldSet>
                  <label>Email address</label>
                  {errors.email && touched.email && <FormInputError>{errors.email}</FormInputError>}
                  <FormInput type="email" name="email" placeholder="kanye@yeezy.com" />
                </FieldSet>
                <FieldSet>
                  <label>Password</label>
                  {errors.password && touched.password && <FormInputError>{errors.password}</FormInputError>}
                  <FormInput type="password" name="password" />
                </FieldSet>
              </FormFields>
              <FormActions>
                <Link to="/request-reset">Forgot password?</Link>
                <Button type="submit" disabled={isSubmitting}>
                  <span>Sign in</span> {isSubmitting ? <Spinner /> : null}
                </Button>
                <span>Don't have an account yet?</span>
                <span>Just click <Link to="/signup">here</Link> to create one.</span>
              </FormActions>
            </Form>
          )}
        </Formik>
      </Wrapper>
    );
  }
}

export default withAuth(Signin);
