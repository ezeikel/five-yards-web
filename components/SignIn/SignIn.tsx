import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleIcon from "../svgs/GoogleIcon";
import SignInForm from "../forms/SignInForm/SignInForm";
import Button from "../Button/Button";
import { Wrapper, Heading, ContinueWith, DontHave } from "./SignIn.styled";

const SignIn = () => (
  <Wrapper>
    <Heading>Sign In</Heading>
    <SignInForm />
    <DontHave>
      Don&apos;t have an account? <Link href="/register/user">Sign up</Link>
    </DontHave>
    <ContinueWith>
      <hr />
      <span>Or continue with</span>
      <hr />
    </ContinueWith>
    <Button className="facebook" text="Facebook">
      <FontAwesomeIcon
        icon={["fab", "facebook-square"]}
        color="var(--color-white)"
        size="2x"
      />
    </Button>
    <Button className="google" text="Google">
      <GoogleIcon />
    </Button>
  </Wrapper>
);

export default SignIn;
