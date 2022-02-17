import { Wrapper } from "./Error.styled";

// TODO: not actuallys ure what this component is meant to do - was originally just the styled component 🤦🏿‍♂️
const Error = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
);
export default Error;
