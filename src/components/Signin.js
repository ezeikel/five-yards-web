import React, { Component } from 'react';
import { withAuth } from '../../context/auth';

class Signin extends Component {
  render() {
    const { signin } = this.props;

    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SigninSchema}
        onSubmit={async (values, actions) => {
          await signin(values, actions);
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
                <label>Email address</label>
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
              <Link to="/request-reset">Forgot password?</Link>
              <Button type="submit" disabled={isSubmitting}>
                <span>Sign in</span> {isSubmitting ? <Spinner /> : null}
              </Button>
              <span>Don't have an account yet?</span>
              <span>Just click <Link to="/signup">here</Link> to create one.</span>
            </FormActions>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withAuth(Signin);
