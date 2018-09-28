import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { REQUEST_RESET_MUTATION } from '../apollo/queries'

const ReqeuestResetSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long')
    .required(),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(9, 'Too short')
    .required('Required')
});

class RequestReset extends Component {
  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <Formik
            initialValues={{ email: '' }}
            validationSchema={ReqeuestResetSchema}
            onSubmit={reset}
          >
            <Form>
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Request a password reset</h2>
                {!error && !loading && called && <p>Success! Check your email for a reset link!</p>}
                <label htmlFor="email">
                  Email
                  <Field type="email" name="email" placeholder="kanye@yeezy.com" />
                  <ErrorMessage name="email" />
                </label>
                <button type="submit">Request Reset!</button>
              </fieldset>
            </Form>
          </Formik>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;
