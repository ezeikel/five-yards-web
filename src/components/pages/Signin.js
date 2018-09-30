import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { withAuth } from '../../context/auth';
import Spinner from '../Spinner';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
});

class Signin extends Component {
  render() {
    const { signin } = this.props;

    return (
      <div>
        <h1>Signin</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SigninSchema}
          onSubmit={async (values, actions) => {
            await signin(values, actions);
          }}
        >
          {({
            isSubmitting
          }) => (
            <Form>
              <label>Email</label>
              <Field type="email" name="email" placeholder="kayne@yeezy.com" />
              <ErrorMessage name="email" />
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
              <Link to="/request-reset">Forgot password?</Link>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : 'Signin'}
              </button>
              <span>
                Don't have an account yet?
                <br />
                Just click <Link to="/signup">here</Link> to create one.
              </span>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withAuth(Signin);
