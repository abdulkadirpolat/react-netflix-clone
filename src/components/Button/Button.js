import React from "react";

function Button({ className, children, props }) {
  return (
    <button className={`${className ? className : ""}  p-4 mt-6 mb-3 rounded-md bg-red-700 w-full text-white leading-4 font-bold select-none`} {...props}>
      {children ? children : Button}
    </button>
  );
}

export default Button;
