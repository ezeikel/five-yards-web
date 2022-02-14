import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name, type, ...props }) => (
  <FontAwesomeIcon icon={[type, name]} {...props} /> // eslint-disable-line react/jsx-props-no-spreading
);

Icon.defaultProps = {
  color: "var(--color-black)",
  type: "fal",
  size: "lg",
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
