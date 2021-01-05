import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name, type, ...props }) => (
  <FontAwesomeIcon icon={[type, name]} {...props} />
);

Icon.defaultProps = {
  color: "var(--color-black)",
  type: "fal",
  size: "lg",
};

Icon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Icon;
