import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CloseButton = ({ color, size, handleClick, circle }) => (
  <FontAwesomeIcon
    icon={["fal", circle ? "times-circle" : "times"]}
    color={color}
    size={size}
    onClick={handleClick}
  />
);

CloseButton.defaultProps = {
  color: "var(--color-primary)",
  size: "3x",
};

CloseButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default CloseButton;
