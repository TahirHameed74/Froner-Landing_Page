import React from "react";

const AboutFlyer = () => {
  return (
    <div className="absolute bg-center bottom-0 md:bottom-[25%]  about-flyer   p-10 min-h-[500px] w-[350px] md:w-[500px] lg:w-[800px] text-center  lg:h-[900px] flex flex-col justify-between items-center  bg-[#fbf5eb]">
      <div className="relative  ">
        <img
          className="h-[220px] lg:h-[370px]"
          src="/forner-about-studio.jpg"
          alt="Studio Image"
        />
        <div className="w-full flex flex-col items-center">
          <i className="absolute top-0 z-10 bg-transparent text-6xl transform -translate-y-1/2">
            Our
          </i>
          <i className="absolute z-10 bottom-0 bg-transparent text-6xl transform translate-y-1/2">
            Studio
          </i>
        </div>
      </div>
      <div className="bg-transparent font-semibold lg:w-[90%] ">
        <h1 className="bg-transparent text-xs md:text-base lg:text-lg   ">
          OUR LOS ANGELES STUDIO IS SITUATED IN CHINATOWN, HOME TO HISTORIC
          PLAZAS, ECLECTIC RESTAURANTS, INDEPENDENT GALLERIES AND AN INSPIRED
          CREATIVE CULTURE.
        </h1>
      </div>
    </div>
  );
};

export default AboutFlyer;
