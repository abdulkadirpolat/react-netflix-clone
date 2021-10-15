import React, { useEffect, useState } from "react";

function Navbar({ children }, ...props) {
  const [navBgShow, setNavBgShow] = useState(false);
  console.log(navBgShow);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setNavBgShow(true);
      else setNavBgShow(false);
      console.log(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div
      className={`h-16 xlm:px-1/25 px-15 text-nx-gray-100 right-0 left-0 top-0 fixed z-20 ${
        navBgShow && "bg-nx-black"
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Navbar;
