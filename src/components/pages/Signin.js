import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { withAuth } from '../../context/auth';

class Signin extends Component {
  render() {
    const { signin } = this.props;

    return (
      <div>
        <h1>Signin</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {}
            if (!values.email) {
              errors.email = 'Email required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Password required';
            }
            return errors;
          }}
          onSubmit={signin}
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
              <label>email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label>password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <Link to="/request-reset">Forgot password?</Link>
              <button type="submit" disabled={isSubmitting}>
                Signin
              </button>
              <span>
                Don't have an account yet?
                <br />
                Just click <Link to="/signup">here</Link> to create one.
              </span>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withAuth(Signin);
