import React from "react";

function Header({ className, children, props }) {
  return (
    <header
      className={`${
        className ? className : ""
      } ${`top-0 left-0 absolute w-full h-24`}  `}
      {...props}
    >
      {children ? children : "header"}
    </header>
  );
}

export default Header;
