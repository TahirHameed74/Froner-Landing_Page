import React from "react";

const OurWorkFlyer = ({ mainHeading, midText, src, bottomText }) => {
  return (
    <div className="absolute bg-center bottom-0 md:bottom-[25%]  p-10 h-[400px] w-full md:w-[500px] lg:w-[800px] text-center  lg:h-[900px] flex flex-col justify-between items-center  bg-[#fbf5eb]">
      <i className=" z-10 bg-transparent text-2xl lg:text-6xl ">
        {mainHeading}
      </i>
      <i className=" z-10 bg-transparent text-2xl lg:text-6xl ">{midText}</i>
      <div className="bg-transparent flex flex-col gap-3 ">
        <img className="lg:h-[150px] h-[130px] w-full " src={src} />
        {/* "/jars.gif" */}
        <h1 className="lg:text-3xl text-xl font-semibold bg-transparent">
          {bottomText}
        </h1>
      </div>
    </div>
  );
};

export default OurWorkFlyer;
