import React from "react";

const ResponsiveBanner = ({ src, productName }) => {
  return (
    <div className="w-full mt-5 h-full">
      <div className=" lg:h-screen md:h-[500px] h-[200px]  object-contain overflow-hidden">
        <img
          className={`image h-full ${
            productName && "relative"
          }  w-full object-cover`}
          src={src}
        />
        {productName && (
          <h1 className="lg:text-9xl text-5xl lg:p-8 text-[#ecece4] w-[80%]  lg:w-[85%] bg-transparent absolute md:bottom-12 bottom-0 left-0 font-semibold">
            {productName}
          </h1>
        )}
      </div>
    </div>
  );
};

export default ResponsiveBanner;
