import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./input.module.css";

const errorMessageSwitch = (errorType) => {
  console.log(errorType);
  switch (errorType) {
    case "required":
      return "This field is required.";
    case "maxLength":
      return "Your password must contain between 4 and 60 characters.";
    case "minLength":
      return "Your password must contain between 4 and 60 characters.";

    default:
      return "Error";
  }
};

const Input = forwardRef(
  (
    {
      className,
      placeholder,
      type,
      id,
      children,
      label,
      onChange,
      value,
      error,
      outline,
      signup,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={`${!signup ? "flex" : ""} ${
          label ? "flex-row items-center justify-between" : " pb-4 flex-col"
        }`}
      >
        <div>
          <input
            ref={ref}
            onChange={onChange}
            value={value}
            id={id}
            className={`${className ? className : ""} ${
              signup && label ? styles.input_checkbox_signup : ""
            } ${outline ? styles.input_outline : ""} ${
              error && outline ? styles.error : ""
            } ${!error && outline ? styles.validated : ""} ${
              error ? "border-b-2 border-solid border-nx-yellow" : ""
            } ${label ? styles.input_checkbox : `${styles.input}`}`}
            type={type}
            placeholder={placeholder}
            {...props}
          />
          {label ? (
            <label className="text-nx-gray-200 select-none" htmlFor={id}>
              {label}
            </label>
          ) : error ? (
            <div className="text-nx-yellow">
              {errorMessageSwitch(error.type)}{" "}
            </div>
          ) : null}
        </div>
        {children ? children : null}
      </div>
    );
  }
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: "Input",
  error: false,
};

export default Input;
