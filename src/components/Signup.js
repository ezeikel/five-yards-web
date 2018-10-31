import React, { Component } from 'react';
import { withAuth } from '../../context/auth';

class Signup extends Component {
  render() {
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
