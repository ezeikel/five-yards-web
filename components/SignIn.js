import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import GoogleIcon from "./svgs/GoogleIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  padding: 0 var(--spacing-large);
  > div {
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
  }
  .facebook,
  .google {
    display: flex;
    align-items: center;
    padding: var(--spacing-medium);
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
`;

const SignIn = () => {
  return (
    <Wrapper>
      <SignInForm />
      <div>
        <span>Or continue with</span>
      </div>
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

export default SignIn;
