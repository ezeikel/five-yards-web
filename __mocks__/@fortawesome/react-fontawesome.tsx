import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

type FontAwesomeIconProps = {
  icon: IconProp;
  color: string;
  size: SizeProp;
};

// ISSUE: https://github.com/FortAwesome/react-fontawesome/issues/154

const FontAwesomeIcon = ({ icon, color, size }: FontAwesomeIconProps) => {
  const iconClass = Array.isArray(icon) ? icon.join("-") : icon;
  return (
    // TODO: Not quite exactly what real icon outputs but fine for now
    <svg className={`svg-inline--fa ${iconClass} fa-${size}`} color={color} />
  );
};

export default FontAwesomeIcon;
