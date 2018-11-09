import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { REQUEST_RESET_MUTATION } from '../apollo/queries'
import Spinner from './Spinner';
import Button from './styles/Button';
import Form from './styles/Form';
import FormFields from './styles/FormFields';
import FormActions from './styles/FormActions';
import FieldSet from './styles/FieldSet';
import FormInput from './styles/FormInput';
import FormInputError from './styles/FormInputError';
import { formatFormErrors } from '../utils/formatFormErrors';

const ReqeuestResetSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

class RequestReset extends Component {
  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION}>
        {(reset, { error, loading, called }) => (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={ReqeuestResetSchema}
            onSubmit={async (values, { resetForm, setErrors }) => {
              try {
                await reset({
                  variables: values
                });

                resetForm();
              } catch(e) {
                setErrors(formatFormErrors(e));
              }
            }}
          >
            {({
              isSubmitting,
              errors,
              touched
            }) => (
              <Form>
                <FormFields>
                  {!error && !loading && called && <p>Success! Check your email for a reset link!</p>}
                  <FieldSet>
                    <label htmlFor="email">Email</label>
                    {errors.email && touched.email && <FormInputError>{errors.email}</FormInputError>}
                    <FormInput type="email" name="email" placeholder="kanye@yeezy.com" />
                  </FieldSet>
                </FormFields>
                <FormActions>
                  <Button type="submit" disabled={loading}>
                    <span>Reset password</span> {isSubmitting && loading ? <Spinner /> : null}
                  </Button>
                </FormActions>
              </Form>
            )}
          </Formik>
        )}
      </Mutation>
    )
}}

export default RequestReset;
