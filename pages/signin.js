import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleIcon from "../components/svgs/GoogleIcon";
import SigninForm from "../components/SignInForm";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  justify-items: center;

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
  width: 100%;

  form {
    width: 100%;

    .text-input + .text-input {
      margin-top: var(--spacing-medium);
    }
  }
  .facebook,
  .google {
    display: flex;
    align-items: center;
    padding: var(--spacing-small) var(--spacing-medium);
    border-radius: 6px;
    font-family: var(--primary-font-family);
    font-size: 16px;
    font-weight: var(--font-weight-primary-semi-bold);
    color: var(--color-white);
    svg {
      margin-right: var(--spacing-medium);
    }
  }

  .facebook {
    background-color: var(--color-facebook);
    border: 1px solid var(--color-facebook);
    margin-bottom: var(--spacing-large);
  }
  .google {
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    color: var(--color-black);
    svg {
      width: 28px;
      height: 32px;
    }
  }

  button {
    width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 20px;
`;

const ContinueWith = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: var(--spacing-large);
  span {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    /* &:before,
      &:after {
        content: "";
        position: absolute;
        height: 1px;
        background-color: var(--color-grey);
        top: 50%;
        width: 100%;
      }
      &:before {
        left: 0;
        background-color: red;
      }
      &:after {
        right: 0;
        background-color: green;
        display: none;
      } */
  }
`;

const SigninPage = () => {
  return (
    <Wrapper>
      <Heading>Sign In</Heading>
      <SigninForm />
      <div>
        Do not have an account? <Link href="/request-reset">Sign up</Link>
      </div>
      <ContinueWith>
        <span>Or continue with</span>
      </ContinueWith>
      <button className="facebook">
        <FontAwesomeIcon
          icon={["fab", "facebook-square"]}
          color="var(--color-white)"
          size="2x"
        />
        Facebook
      </button>
      <button className="google">
        <GoogleIcon />
        Google
      </button>
    </Wrapper>
  );
};

export default SigninPage;
