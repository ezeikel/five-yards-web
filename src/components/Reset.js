import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { RESET_MUTATION, CURRENT_USER_QUERY } from '../apollo/queries'
import Spinner from './Spinner';
import Button from '../styles/Button';
import Form from '../styles/Form';
import FormFields from '../styles/FormFields';
import FormActions from '../styles/FormActions';
import FieldSet from '../styles/FieldSet';
import FormInput from '../styles/FormInput';
import FormInputError from '../styles/FormInputError';
import styled from 'styled-components';

const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
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

class RequestReset extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Forgot your password?</h1>
        <Mutation
          mutation={RESET_MUTATION}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(reset, { error, loading, called }) => (
            <Formik
              initialValues={{ password: '', confirmPassword: '' }}
              validationSchema={ResetSchema}
              onSubmit={async (values, actions) => {
                const res = await reset({
                  variables: {
                    ...values,
                    resetToken: this.props.resetToken
                  }
                });
                return res;
              }}
            >
              {({
                isSubmitting,
                errors,
                touched
              }) => (
                <Form>
                  <FormFields>
                    {/* {!error && !loading && called && <p>Success! Check your email for a reset link!</p>} */}
                    <FieldSet>
                      <label htmlFor="password">Password</label>
                      {errors.password && touched.password && <FormInputError>{errors.password}</FormInputError>}
                      <FormInput type="password" name="password" />
                    </FieldSet>
                    <FieldSet>
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      {errors.confirmPassword && touched.confirmPassword && <FormInputError>{errors.confirmPassword}</FormInputError>}
                      <FormInput type="password" name="confirmPassword" />
                    </FieldSet>
                  </FormFields>
                  <FormActions>
                    <Button type="submit" disabled={loading}>
                      <span>Reset password</span> {isSubmitting ? <Spinner /> : null}
                    </Button>
                  </FormActions>
                </Form>
              )}
            </Formik>
          )}
        </Mutation>
      </Wrapper>
    )
}}

export default RequestReset;
