"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Marquee from "react-fast-marquee";
import ShineOnHover from "./ShineOnHover";
gsap.registerPlugin(ScrollTrigger);
const Marquees = () => {
  useEffect(() => {
    const heading = gsap.from(
      ".feature-heading",

      {
        scrollTrigger: {
          trigger: ".feature-heading",

          start: "top+=30 bottom-=170",
          end: "center center",
        },
        opacity: 0,
        y: 100,
        duration: 0.8,
      }
    );
    const brands = gsap.from(
      ".wrapper",

      {
        scrollTrigger: {
          trigger: ".wrapper",

          start: "top bottom-=170",
          end: "center center",
        },
        opacity: 0,

        duration: 0.8,
      }
    );
  }, []);

  return (
    <div className="lg:h-[80vh] md:h-[50vh] flex flex-col items-center justify-between h-[30vh] ">
      <i className="lg:text-[120px] feature-heading  md:text-[80px] text-[40px] flex items-center justify-center leading-tight md:mind-w-[50%] w-[65%] xl:w-[60%] lg:w-[30%] mx-auto text-center">
        We’ve Been Featured On
      </i>
      <Marquee className="w-full">
        <div className="flex items-center w-full justify-evenly  ">
          <div className="ml-16">
            <img className="w-[150px]" src="aoga-svg.svg" />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/victionary_svg.svg"
            />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/vogue-svg.svg"
            />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/behance-svg.svg"
            />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/dieline.svg"
            />
          </div>
          <div className="ml-16">
            <img className="w-[150px]" src="aoga-svg.svg" />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/victionary_svg.svg"
            />
          </div>
          <div className="ml-16">
            <img className="w-[150px]" src="aoga-svg.svg" />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/victionary_svg.svg"
            />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/vogue-svg.svg"
            />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/behance-svg.svg"
            />
          </div>
          <div className="ml-16">
            <img
              className="lg:w-[300px] w-[70px] max-w-[100px] animation-img"
              src="/dieline.svg"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
