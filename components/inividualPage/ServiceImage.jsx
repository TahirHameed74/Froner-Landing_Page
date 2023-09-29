import React from "react";
import AnimatedQuotes from "./AnimatedQuotes";
import ProjectCard from "./ProjectCard";

const ServiceImage = ({ service, src }) => {
  return (
    <div className="md:w-[70%]  lg:w-[85%] w-[95%] flex items-center flex-col mx-auto h-full">
      {service && (
        <h1 className="text-2xl font-semibold md:m-20 m-8 uppercase ">
          {service}
        </h1>
      )}
      <img className="lg:h-[900px] object-cover   " src={src} />
    </div>
  );
};

export default ServiceImage;
