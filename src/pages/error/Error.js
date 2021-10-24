import React from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "../../components";
import "./error.css"

function Error() {
  return (
    <Container className="error-container text-xl">
      <Header className="mdm-2:h-h-75 max-h-16 mdmin-3:absolute block bg-black">
        <Link
          to="/"
          className="mdmin-3:ml-14 ml-m-1 h-h-25 flex cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </Link>
      </Header>
      <div className="pt-20 text-white error-content min-h-screen flex flex-col relative">
         <div className="flex flex-col items-center text-center h-full flex-2 w-1/2 mx-auto">

          <h1 className="font-bold text-5xl mb-5">Lost your way?</h1>
          <div className="flex flex-col items-center">
<p className="mb-4">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
<Link to="/" className="bg-white text-black px-5 py-1 rounded">Netflix Home</Link>
<div className="border-l-2 border-nx-red mt-5 leading-10 px-2"><span>Error Code <strong>NSES-404</strong></span></div>
          </div>
         </div>
         <span className="bottom-0 right-0 fixed text-gray-300 text-xs mx-m-1 my-m-1"><span className="opacity-60">FROM</span> <strong className="opacity-80">LOST IN SPACE</strong></span>
      </div>
    </Container>
  );
}

export default Error;
