import styled from "styled-components";
import SignUpForm from "../components/SignUpForm";

const Wrapper = styled.div`
  display: flex;
`;

const RegisterPage = () => {
  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

export default RegisterPage;
