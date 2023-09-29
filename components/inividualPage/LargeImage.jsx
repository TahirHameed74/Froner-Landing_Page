import React from "react";

const LargeImage = ({ src }) => {
  return (
    <div
      className={
        "md:w-[90%] mb-16 mt-4 md:mt-16 md:mb-16 lg:mt-10 lg:mb-10 lg:w-[80%] w-[95%] flex items-center flex-col mx-auto h-full"
      }
    >
      <img className="lg:h-[1200px] object-cover w-full  " src={src} />
    </div>
  );
};

export default LargeImage;
