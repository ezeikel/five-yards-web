import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Spinner from './Spinner';
import Button from './styles/Button';
import Form from './styles/Form';
import FormFields from './styles/FormFields';
import FormActions from './styles/FormActions';
import FieldSet from './styles/FieldSet';
import FormInput from './styles/FormInput';
import FormInputError from './styles/FormInputError';
import { withAuth } from '../context/auth';

const ResetSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
});

class Reset extends Component {
  render() {
    const { resetPassword } = this.props;

    return (
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={ResetSchema}
        onSubmit={async (values, actions) => {
          values.resetToken = this.props.resetToken;
          await resetPassword(values, actions);
          //TODO: Redirect to homepage if successful
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
              <Button type="submit" disabled={isSubmitting}>
                <span>Reset password</span> {isSubmitting ? <Spinner /> : null}
              </Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    )
}}

export default withAuth(Reset);
