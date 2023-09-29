import React from "react";

const OurWorkCard = () => {
  return (
    <div className="lg:h-[100vh] md:h-[40vh] our-work-item md:flex w-full">
      <div className="flex-[1]">
        <img
          className="lg:w-full lg:h-full object-cover "
          src="/right-work-img.webp"
        />
      </div>
      <div className="flex pt-3 pb-3 flex-col items-center justify-between flex-[1]">
        <h1 className="lg:text-6xl text-center md:text-5xl">Item Name</h1>
        <h3 className="text-3xl">1</h3>
        <div className="flex flex-col items-center gap-4">
          <img
            className="object-cover w-[130px] lg:w-[200px] "
            src="/left-image-mini.webp"
          />
          <h3 className="text-3xl">Desc</h3>
        </div>
      </div>
    </div>
  );
};

export default OurWorkCard;
