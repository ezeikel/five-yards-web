import ChangePasswordForm from '../forms/ChangePasswordForm/ChangePasswordForm';
import { Wrapper, Heading } from './ChangePassword.styled';

const ChangePassword = () => {
  return (
    <Wrapper>
      <Heading>Change password</Heading>
      <ChangePasswordForm />
    </Wrapper>
  );
};

export default ChangePassword;
