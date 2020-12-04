import styled from "styled-components";
import ChangePasswordForm from "./ChangePasswordForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: var(--secondary-font-family);
  font-size: 3rem;
  font-weight: var(--font-weight-secondary-medium);
  text-align: center;
  margin: 0 0 var(--spacing-large);
`;

const ChangePassword = () => {
  return (
    <Wrapper>
      <Heading>Change password</Heading>
      <ChangePasswordForm />
    </Wrapper>
  );
};

export default ChangePassword;
