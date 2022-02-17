import MyDetailsForm from "../forms/MyDetailsForm/MyDetailsForm";
import { Wrapper, Heading } from "./MyDetails.styled";

const ChangePassword = () => {
  return (
    <Wrapper>
      <Heading>My Details</Heading>
      <MyDetailsForm />
    </Wrapper>
  );
};

export default ChangePassword;
