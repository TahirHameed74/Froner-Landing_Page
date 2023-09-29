"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Brand = () => {
  useEffect(() => {
    const logo = gsap.to(".logo", {
      scrollTrigger: {
        trigger: ".logo",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="absolute logo flex flex-col bg-transparent pl-3 pr-3  h-full items-center justify-between top-0 left-0   w-full ">
      <img className="bg-transparent text-white " src="/forner-logo.svg" />
    </div>
  );
};

export default Brand;
