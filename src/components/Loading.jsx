import React from "react";
import "ldrs/ring";
import { quantum } from "ldrs";
import ReactTypingEffect from "react-typing-effect";

quantum.register();

const Loading = () => {
  return (
    <div className="bg-[#FCFBFC] w-screen h-screen flex flex-col justify-center items-center text-center" data-aos="zoom-out">
      <l-quantum size="150" speed="1.75" color="#3B82F6"></l-quantum>
      <ReactTypingEffect
        text={[
          "WELCOME TO"
        ]}
        speed={50} // Faster typing speed
        typingDelay={500}
        eraseDelay={1000000} // Set a very high value to effectively prevent erasing
        cursorRenderer={() => null} // Hides the cursor
        className="text-gray-800 mt-8 text-3xl"
      />
      <ReactTypingEffect
        text={[
          "QUANTUM INNOVATION INSTITUTE OF TECHNOLOGY"
        ]}
        speed={50} // Faster typing speed
        typingDelay={2000}
        eraseDelay={1000000} // Set a very high value to effectively prevent erasing
        cursorRenderer={() => null} // Hides the cursor
        className="text-gray-800 mt-10 text-[40px]"
      />
    </div>
  );
};

export default Loading;
