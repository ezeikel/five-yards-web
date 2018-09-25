import React, { Component } from 'react';
import { Formik } from 'formik';
import { withAuth } from '../../context/auth';

class Signup extends Component {
  render() {
    const { signup } = this.props;

    return (
      <div>
        <h1>Signin</h1>
        <Formik
          initialValues={{ email: '', fullName: '', username: '', password: '' }}
          validate={values => {
            let errors = {}
            if (!values.email) {
              errors.email = 'Email required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.fullName) {
              errors.fullName = 'Full name required';
            }
            if (!values.username) {
              errors.username = 'Username required';
            }
            if (!values.password) {
              errors.password = 'Password required';
            }
            return errors;
          }}
          onSubmit={signup}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label>Full name</label>
              <input
                type="fullName"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && errors.fullName}
              <label>Username</label>
              <input
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Signup
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withAuth(Signup);
