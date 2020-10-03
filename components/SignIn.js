import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import SignInForm from "./SignInForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
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
        background-color: #cccccc;
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
    font-weight: 600;
    font-size: 16px;
    color: var(--color-white);
    svg {
      margin-right: var(--spacing-medium);
    }
  }

  .facebook {
    background-color: #274e8c;
    border: 1px solid #274e8c;
    margin-bottom: var(--spacing-large);
  }
  .google {
    background-color: #db4437;
    border: 1px solid #db4437;
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
        <FontAwesomeIcon
          icon={["fab", "google"]}
          color="var(--color-white)"
          size="2x"
        />
        Google
      </button>
    </Wrapper>
  );
};

export default SignIn;
