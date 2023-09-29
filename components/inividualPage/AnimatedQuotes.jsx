import React from "react";

const AnimatedQuotes = ({ topQuote, bottomQuote, midText }) => {
  return (
    <div className="lg:h-[60vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
      <div className="text-center font-semibold ">
        <h1 className="lg:text-8xl md:text-6xl text-3xl ">{topQuote}</h1>
        <p className="lg:text-7xl md:text-5xl text-2xl ">{midText}</p>
      </div>
      <h1 className=" text-xs md:text-sm lg:text-base text-center">
        {bottomQuote}
      </h1>
    </div>
  );
};

export default AnimatedQuotes;
