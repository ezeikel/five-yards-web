import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { withAuth } from '../context/auth';
import Spinner from './Spinner';
import Button from './styles/Button';
import Form from './styles/Form';
import FormFields from './styles/FormFields';
import FormActions from './styles/FormActions';
import FieldSet from './styles/FieldSet';
import FormInput from './styles/FormInput';
import FormInputError from './styles/FormInputError';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
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
      <Formik
        initialValues={{ email: '', fullName: '', username: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, actions) => {
          await signup(values, actions);
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
                <label>Full name</label>
                {errors.fullName && touched.fullName && <FormInputError>{errors.fullName}</FormInputError>}
                <FormInput type="fullName" name="fullName" placeholder="Kanye West" />
              </FieldSet>
              <FieldSet>
                <label>Username</label>
                {errors.username && touched.username && <FormInputError>{errors.username}</FormInputError>}
                <FormInput type="username" name="username" placeholder="yeezy" />
              </FieldSet>
              <FieldSet>
                <label>Email</label>
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
              <Button type="submit" disabled={isSubmitting}>
                <span>Sign up</span> {isSubmitting ? <Spinner /> : null}
              </Button>
              <span>Already have an account? <Link to="/signin">Sign in</Link></span>
            </FormActions>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withAuth(Signup);
