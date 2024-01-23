import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import mixpanel from 'mixpanel-browser';
import {
  CURRENT_USER_QUERY,
  CREATE_USER_MUTATION,
} from '../../../apollo/queries';
import TextInput from '../inputs/TextInput/TextInput';
import Button from '../../Button/Button';
import formatAPIErrors from '../../../utils/formatAPIErrors';
import { Wrapper, InputWrapper, StyledForm } from './SignUpForm.styled';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'That name is too short')
    .max(50, 'That name is too long')
    .required('Please enter a first name'),
  lastName: Yup.string()
    .min(2, 'That name is too short')
    .max(50, 'That name is too long')
    .required('Please enter a last name'),
  email: Yup.string()
    .email('That email is invalid. Please try again')
    .required('Please enter an email'),
  password: Yup.string()
    .min(9, 'That password is too short')
    .required('Please enter a password'),
});

const SignUpForm = () => {
  const router = useRouter();

  const [signup, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          try {
            await signup({ variables: values });
            mixpanel.track('Register');
            resetForm();
            router.push('/');
          } catch (err) {
            const formattedErrors = formatAPIErrors(err);
            setErrors(formattedErrors);
            console.error(err);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputWrapper>
              <TextInput
                name="firstName"
                type="text"
                icon="user"
                placeholder="First name"
              />
              <TextInput
                name="lastName"
                type="text"
                icon="user"
                placeholder="Last name"
              />
              <TextInput
                name="email"
                type="email"
                icon="envelope"
                placeholder="Email"
              />
              <TextInput
                name="password"
                type="password"
                icon="key"
                placeholder="Create password"
              />
            </InputWrapper>
            <Button
              type="submit"
              disabled={isSubmitting}
              text={`Register${isSubmitting ? 'ing' : ''}`}
            />
          </StyledForm>
        )}
      </Formik>
      {loading && <>{console.warn('loading...')}</>}
      {error && <>{console.error({ error })}</>}
    </Wrapper>
  );
};

export default SignUpForm;
