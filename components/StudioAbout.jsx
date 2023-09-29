import React, { useEffect } from "react";
import Contact from "./Contact";
import AboutFlyer from "./AboutFlyer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const StudioAbout = () => {
  useEffect(() => {
    const image_studio = gsap.from(".image_studio", {
      scrollTrigger: {
        trigger: ".image_studio",
        start: "top top",
        scrub: 3,
        end: "bottom bottom",
      },
      scale: 1.2,
      scrub: 2,
      duration: 3,
    });
  }, []);
  return (
    <div className="w-full border relative h-full">
      <div className="lg:h-[1800px] overflow-hidden h-screen w-full">
        <img
          className=" image_studio w-full object-cover"
          src="/forner-about-bg.webp"
        />
      </div>
      <div className=" h-full items-center justify-center flex">
        <AboutFlyer />
      </div>
    </div>
  );
};

export default StudioAbout;
