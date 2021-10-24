import React, { useEffect, useState } from "react";

const Navbar =({ children , ...props} ) => {
  const [navBgShow, setNavBgShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setNavBgShow(true);
      else setNavBgShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div
      className={`lgm:h-h-17 h-h-41 xlm:px-1/25 px-15 text-nx-gray-100 right-0 
      left-0 top-0 fixed z-20 transition-colors duration-700 ease-out text-sm  xl-md:text-100 xl-md:leading-3 select-none ${
        navBgShow ? "bg-nx-black" : ""
      }`}
      {...props}
    >
       <div className="w-full h-full flex flex-row items-center"> 
      {children ? children : null}
      </div>
    </div>
  );
}

export default Navbar;
