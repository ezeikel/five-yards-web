import { forwardRef } from "react";
import {
  IconName,
  IconPrefix,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconProps = {
  color?: string;
  type?: IconPrefix;
  name: IconName;
  size?: SizeProp;
  className?: string;
  onClick?: () => void;
};

const Icon = forwardRef(
  (
    {
      name,
      type = "fal",
      color = "var(--color-black)",
      size = "lg",
      className,
      onClick,
    }: IconProps,
    ref: { current: HTMLElement },
  ) => (
    <FontAwesomeIcon
      icon={[type, name]}
      color={color}
      size={size}
      onClick={onClick}
      className={className}
      forwardedRef={ref}
    />
  ),
);

export default Icon;
