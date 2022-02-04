import React from "react";
import PropTypes from "prop-types";

// import "./Hello.css";

/**
 * The only true Hello.
 */
export default function Hello({ color, size, onClick, disabled, children }) {
  const styles = {
    color,
    fontSize: Hello.sizes[size],
  };

  return (
    <p className="Hello" style={styles} onClick={onClick} disabled={disabled}>
      {children}
    </p>
  );
}
Hello.propTypes = {
  /** Hello label */
  children: PropTypes.node.isRequired,
  /** The color for the Hello */
  color: PropTypes.string,
  /** The size of the Hello */
  size: PropTypes.oneOf(["small", "normal", "large"]),
  /** Disable Hello */
  disabled: PropTypes.bool,
  /** Gets called when the user clicks on the Hello */
  onClick: PropTypes.func,
};
Hello.defaultProps = {
  color: "#333",
  size: "normal",
  onClick: (event) => {
    // eslint-disable-next-line no-console
    console.log("You have clicked me!", event.target);
  },
};
Hello.sizes = {
  small: "10px",
  normal: "14px",
  large: "18px",
};
