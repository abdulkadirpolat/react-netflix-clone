import React from "react";
import styles from "./input.module.css";
const Input = ({
  className,
  placeholder,
  type,
  id,
  children,
  label,
  props,
}) => {
  return (
    <div
      className={`flex ${
        label ? " flex-row content-center justify-between" : styles.input_container
      }`}
    >
      <div>
        <input
          id={id ? id : ""}
          className={`${className ? className : ""} ${
            label ? styles.input_checkbox :   `${styles.input}`  
          }  `}
          type={type}
          placeholder={placeholder ? placeholder : ""}
          {...props}
        />
        {label ? (
          <label className="text-gray-400" htmlFor={id}>{label}</label>
        ) : (
          <div className="text-">error message</div>
        )}
      </div>
      {children ? children : null}
    </div>
  );
};

export default Input;
