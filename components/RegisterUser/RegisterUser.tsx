import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleIcon from '../svgs/GoogleIcon';
import SignUpForm from '../forms/SignUpForm/SignUpForm';
import Button from '../Button/Button';
import {
  Wrapper,
  Heading,
  ContinueWith,
  DontHave,
} from './RegisterUser.styled';

const RegisterUser = () => (
  <Wrapper>
    <Heading>Create an account</Heading>
    <SignUpForm />
    <DontHave>
      Already have an account? <Link href="/sign-in">Sign in</Link>
    </DontHave>
    <ContinueWith>
      <hr />
      <span>Or continue with</span>
      <hr />
    </ContinueWith>
    <Button className="facebook" text="Facebook">
      <FontAwesomeIcon
        icon={['fab', 'facebook-square']}
        color="var(--color-white)"
        size="2x"
      />
    </Button>
    <Button className="google" text="Google">
      <GoogleIcon />
    </Button>
  </Wrapper>
);

export default RegisterUser;
