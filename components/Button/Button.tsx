import { HTMLProps, MouseEvent, ReactNode } from "react";
import { Wrapper } from "./Button.styled";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  text?: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event?: MouseEvent) => void;
};

const Button = ({
  text,
  disabled = false,
  children,
  type = "button",
  onClick,
}: ButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Wrapper disabled={disabled} type={type} onClick={onClick}>
    {children}
    {text}
  </Wrapper>
);

export default Button;
