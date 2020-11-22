import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleIcon from "../components/svgs/GoogleIcon";
import SignInForm from "../components/SignInForm";
import Button from "../components/styles/Button";

const Wrapper = styled.div`
  width: 100%;

  .facebook,
  .google {
    justify-content: flex-start;
    align-items: center;
    font-size: 1.6rem;
    padding: var(--spacing-medium);
    svg {
      margin-right: var(--spacing-medium);
      height: 24px;
      width: 24px;
    }
  }

  .facebook {
    background-color: var(--color-facebook);
    border: 1px solid var(--color-facebook);
    margin-bottom: var(--spacing-medium);
  }
  .google {
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    color: var(--color-black);
  }
`;

const Heading = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 0 0 var(--spacing-large);
`;

const ContinueWith = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: var(--spacing-large);
  span {
    flex: 0 0 auto;
    margin: 0 var(--spacing-small);
  }
  hr {
    flex: 1 1 auto;
  }
`;

const DontHave = styled.div`
  font-size: 1.6rem;
  font-weight: var(--font-weight-primary-regular);
  text-align: center;
  margin-bottom: var(--spacing-large);
  a {
    color: var(--color-primary);
    font-weight: var(--font-weight-primary-medium);
  }
`;

const SignIn = () => (
  <Wrapper>
    <Heading>Sign In</Heading>
    <SignInForm />
    <DontHave>
      Don't have an account? <Link href="/request-reset">Sign up</Link>
    </DontHave>
    <ContinueWith>
      <hr />
      <span>Or continue with</span>
      <hr />
    </ContinueWith>
    <Button className="facebook">
      <FontAwesomeIcon
        icon={["fab", "facebook-square"]}
        color="var(--color-white)"
        size="2x"
      />
      Facebook
    </Button>
    <Button className="google">
      <GoogleIcon />
      Google
    </Button>
  </Wrapper>
);

export default SignIn;
