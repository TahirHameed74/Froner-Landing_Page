import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/animation-lottie.json";
const WhatIsKriss = () => {
  return (
    <div
      id="what-kriss"
      className="lg:h-[100vh] mob-kriss lg:c md:c md:h-[90vh] md:my-20 h-full p-10 flex items-center justify-center"
    >
      <div>
        <h1 className="uppercase font-semibold text-[25px] w-full md:text-[40px]  text-center lg:text-[62.34px] font-[surtRegular] ">
          What is Kriss.ai?
        </h1>
        <div className="flex items-center md:pt-10 pt-5  mx-auto lg:w-[80%]">
          <div className="flex-[1] lottie-anim hidden md:block ">
            <img
              className="min-w-full md:max-w-[300px] lg:min-w-[500px] object-contain min-h-full "
              src="/mobile-green-mid.png"
            />
            {/* <Lottie  animationData={animationData} /> */}
          </div>
          <p className="xl:text-4xl lg:text-[30px] flex-[2] text-center  text-xl md:text-[30px]  leading-8 font-[lightItalic]">
            Hello! I’m Kriss.ai, a chatbot designed specifically for the dental
            industry. I’m here to revolutionize the way you interact with your
            patients and improve your case acceptance rate. I provide concise,
            accurate, and easily understandable information about dental
            treatments in real-time, reducing misconceptions and fears. I’m
            available 24/7 to answer patient queries, even outside of your
            regular office hours. This not only enhances the patient experience
            but also reduces the workload on your front desk staff, allowing
            them to spend more time on patients in the office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIsKriss;
