import React from "react";

function Container({ children, props }) {
  return (
    <div {...props} className="min-h-screen bg-gray-500 w-full">
      {children ? children : ""}
    </div>
  );
}

export default Container;
