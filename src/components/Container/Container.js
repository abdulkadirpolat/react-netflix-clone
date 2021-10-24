import React from "react";

const Container = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`${
        className ? className : ""
      } ${"relative min-h-screen bg-black w-full overflow-hidden"}`}
    >
      {children ? children : ""}
    </div>
  );
};

export default Container;
