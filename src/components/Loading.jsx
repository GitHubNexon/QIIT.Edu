import React from "react";
import "ldrs/ring";
import { quantum } from "ldrs";

quantum.register();

const Loading = () => {
  return (
    <div className="bg-[#FCFBFC] w-screen h-screen flex flex-col justify-center items-center text-center" data-aos="zoom-out">
      <l-quantum size="150" speed="1.75" color="#3B82F6"></l-quantum>
      <div className="text-gray-800 mt-8 text-3xl">
        WELCOME TO
      </div>
      <div className="text-gray-800 mt-10 text-[40px]">
        QUANTUM INNOVATION INSTITUTE OF TECHNOLOGY
      </div>
    </div>
  );
};

export default Loading;
