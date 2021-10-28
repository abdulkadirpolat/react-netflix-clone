import React from "react";
import "./card.css";

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`max-w-5xl mx-auto flex items-center h-full ${
        className ? className : ""
      }`}
      {...props}
    >
      {children ? children : null}{" "}
    </div>
  );
};

export default Card;
