import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { withAuth } from '../../context/auth';

const SignupSchema = Yup.object().shape({
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

class Signup extends Component {
  render() {
    const { signup } = this.props;

    return (
      <div>
        <h1>Signin</h1>
        <Formik
          initialValues={{ email: '', fullName: '', username: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={signup}
        >
          {({
            isSubmitting
          }) => (
            <Form>
              <label>Full name</label>
              <Field type="fullName" name="fullName" placeholder="Kanye West" />
              <ErrorMessage name="fullName" />
              <label>Username</label>
              <Field type="username" name="username" placeholder="yeezy" />
              <ErrorMessage name="username" />
              <label>Email</label>
              <Field type="email" name="email" placeholder="kanye@yeezy.com" />
              <ErrorMessage name="email" />
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
              <button type="submit" disabled={isSubmitting}>Signup</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withAuth(Signup);
