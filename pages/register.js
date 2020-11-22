import styled from "styled-components";
import SignupForm from "../components/SignUpForm";

const Wrapper = styled.div`
  display: flex;
`;

const RegisterPage = () => {
  return (
    <Wrapper>
      <SignupForm />
    </Wrapper>
  );
};

export default RegisterPage;
