import React from "react";
import AboutPeople from "./AboutPeople";

const WhoWeAre = () => {
  return (
    <div className="w-full mb-20 ">
      <h1 className="w-full text-center  mx-auto text-4xl ">Who We Are</h1>
      <div className="max-w-[80%] gap-5 bg-transparent relative  flex flex-col   mx-auto ">
        {/* <div className='w-full absolute mix-blend-multiply h-full bg-[#D0E5E4]/50 ' /> */}
        <AboutPeople
          className="people-image1"
          src="alisson.webp"
          name="Allison Dobkin"
          role="Creative Director, Strategy and Copy"
        />
        <AboutPeople
          className="people-image2"
          src="alisson.webp"
          name="Allison Dobkin"
          role="Creative Director, Strategy and Copy"
        />
        <AboutPeople
          className="people-image3"
          src="alisson.webp"
          name="Allison Dobkin"
          role="Creative Director, Strategy and Copy"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
