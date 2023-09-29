import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const AboutSec = () => {
  useEffect(() => {
    gsap.from(".heading-top", {
      scrollTrigger: {
        trigger: ".heading-top",

        start: "top+=10 center+=60   ",
      },
      opacity: 0,
      duration: 1,
    });
    gsap.from(".heading-bottom", {
      scrollTrigger: {
        trigger: ".cen-image",

        start: "center center+=60   ",
      },
      opacity: 0,
      y: 100,
      duration: 1,
    });
    gsap.from(".cen-image", {
      scrollTrigger: {
        trigger: ".heading-top",

        start: "top+=10 center+=60   ",
      },
      opacity: 0,
      dealy: 0.05,
      duration: 1,
      y: 100,
    });
  }, []);
  return (
    <div className="flex lg:p-10 gap-7 flex-col w-full">
      <h1 className="lg:w-[60%] text-2xl md:w-[60%] p-4 lg:p-20 heading-top  md:text-3xl w-[90%] font-semibold lg:text-7xl">
        Forner discovers the deep heart of your brand,
      </h1>

      <div className="flex w-full items-end justify-center ">
        <div className="lg:w-[600px] w-[200px] md:w-[320px] lg:h-[700px] ">
          <img className="w-full cen-image " src="/aboutcause.webp" />
        </div>
      </div>
      <h1 className="lg:w-[80%] heading-bottom mx-auto text-center text-xl md:w-[60%] p-4 lg:p-20  md:text-3xl w-[90%] font-semibold lg:text-7xl">
        an elevated ecosystem of messaging and design beautifully tailored to
        audience lifestyles and desires.
      </h1>
    </div>
  );
};

export default AboutSec;
