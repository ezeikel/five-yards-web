import { Wrapper } from "./Button.styled";

const Button = ({ text, children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Wrapper {...props}>
    {children}
    {text}
  </Wrapper>
);

export default Button;
