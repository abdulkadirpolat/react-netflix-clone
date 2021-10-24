import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center bg-black">
      <AiOutlineLoading3Quarters className="animate-spin  text-7xl text-nx-red" />
    </div>
  );
}

export default Loading;
