import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type CloseButtonProps = {
  color?: string;
  size?: SizeProp;
  handleClick: () => void;
  circle?: boolean;
};

const CloseButton = ({
  color = "var(--color-primary)",
  size = "3x",
  handleClick,
  circle,
}: CloseButtonProps) => (
  <FontAwesomeIcon
    icon={["fal", circle ? "times-circle" : "times"]}
    color={color}
    size={size}
    onClick={handleClick}
  />
);

export default CloseButton;
