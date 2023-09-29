import React from "react";

const Image = ({ src }) => {
  return (
    <div
      className={
        "md:w-[90%] mb-16 mt-4 md:mt-16 md:mb-16 lg:mt-32 lg:mb-32 lg:w-[80%] w-[95%] flex items-center flex-col mx-auto h-full"
      }
    >
      <img className="lg:h-[900px] w-full object-cover   " src={src} />
    </div>
  );
};

export default Image;
