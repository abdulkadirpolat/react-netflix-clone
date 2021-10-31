import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Toggle = ({ items, ...props }) => {
  const [actived, setActived] = useState(false);

  return (
    <li {...props} className="bg-nx-gray-700 mb-2">
      <button
        onClickCapture={() => setActived(!actived)}
        className="border-b border-black w-full lgm:p-7 p-5 smm3:py-3 smm3:px-5 text-left relative"
      >
        {items.title}
        {!actived ? (
          <AiOutlinePlus className="absolute right-3 bottom-1/4 lgm:bottom-1/3 text-4xl smm3:text-2xl " />
        ) : (
          <AiOutlineClose className="absolute right-3 bottom-1/4 lgm:bottom-1/3 text-4xl smm3:text-2xl " />
        )}
      </button>
      <div className={`mt-3 p-7 max-h-3xl ${actived ? "" : "hidden"}`}>
        {items.text}
      </div>
    </li>
  );
};

export default Toggle;
