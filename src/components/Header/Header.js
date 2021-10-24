import React from "react";
import {Link} from 'react-router-dom'
const Header =({ className, children, singUpHeader, ...props }) => {
  return (
    <header
      className={`${
        className ? className : ""
      } ${`top-0 left-0 right-0 w-full h-h-91 z-20 flex items-center justify-between mdm-2:h-h-75 mdmin-3:absolute ${singUpHeader ? "border border-b" : "" }`}  `}
      {...props}
    > 
       <Link
          to="/"
          className="mdmin-3:ml-14 ml-m-1 h-11 w-44 flex cursor-pointer z-20"
          >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </Link>
      {singUpHeader ? <Link to="/login" className="hover:underline mx-m-1">Oturum Aç</Link> : null}
      { children ? children : ""}
    </header>
  );
}

export default Header;
