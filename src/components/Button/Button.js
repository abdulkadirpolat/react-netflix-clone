import React from "react";
import PropTypes from "prop-types";
import "./button.css"

const Button = ({ className, children, label, onClick, ...props }) => {
  return (
    <button onClick= {onClick} className={`btn ${className}`} {...props}>
      {children ? children : label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

Button.defaultProps = {
  label: "Login",
  className: "red",
};

export default Button;
