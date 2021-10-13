import React from "react";

function Navbar({ children }, props) {
  return (
    <div className="" {...props}>
      {children ? children : " hello navbar"}
    </div>
  );
}

export default Navbar;
