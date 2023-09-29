import React from "react";

const AnimatedQuote = ({ quote }) => {
  return (
    <div className="w-[75%] h-[30vh]  flex items-center justify-center lg:h-[75vh] mx-auto">
      <h1 className="text-center text-4xl md:text-6xl lg:text-9xl ">{quote}</h1>
    </div>
  );
};

export default AnimatedQuote;
