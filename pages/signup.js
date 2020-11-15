import styled from "styled-components";
import SignupForm from "../components/SignupForm";

const Wrapper = styled.div`
  display: flex;
`;

const SignupPage = () => {
  return (
    <Wrapper>
      <SignupForm />
    </Wrapper>
  );
};

export default SignupPage;
