import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleIcon from "./svgs/GoogleIcon";
import SignUpForm from "./SignUpForm";
import Button from "./Button";

const Wrapper = styled.div`
  width: 100%;

  button {
    &.facebook,
    &.google {
      font-size: 1.6rem;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      svg {
        margin-right: var(--spacing-medium);
        height: 32px;
        width: 32px;
      }
    }

    &.facebook {
      background-color: var(--color-facebook);
      border: 1px solid var(--color-facebook);
      margin-bottom: var(--spacing-medium);
      color: var(--color-white);
    }
    &.google {
      background-color: var(--color-white);
      border: 1px solid var(--color-black);
      color: var(--color-black);
    }
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
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

export default RegisterUser;
