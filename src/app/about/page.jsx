"use client";
import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Contact from "../../../components/Contact";

import WhoWeAre from "../../../components/WhoWeAre";
import StudioAbout from "../../../components/StudioAbout";
import Footer from "../../../components/Footer";
import AboutSec from "../../../components/AboutSec";
import Marquee from "../../../components/Marquee";
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const image = gsap.to(".image", {
      scrollTrigger: {
        trigger: ".image",
        scrub: 4,
        start: "top+=150 top",
        end: "bottom bottom",
      },
      scale: 1,
      duration: 2,
    });
    const image2 = gsap.to(".image2", {
      scrollTrigger: {
        trigger: ".image2",
        scrub: 4,

        start: "top center",
        end: "bottom+=20 bottom",
      },
      scale: 1,
      duration: 2,
    });

    const headingBlock = gsap.from(
      ".headingBlock",

      {
        scrollTrigger: {
          trigger: ".headingBlock",

          start: "top bottom-=170",
          end: "center center",
        },
        opacity: 0,
        y: 100,
        duration: 1.1,
      }
    );
    const heading = gsap.from(
      ".heading",

      {
        scrollTrigger: {
          trigger: ".heading",

          start: "top bottom-=170",
          end: "center center",
        },
        opacity: 0,

        duration: 0.8,
      }
    );
    const images = gsap.from(".scroll-image", {
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".scroll-image",
        start: "center bottom",
        end: "bottom center",
      },
      height: "0px",
      duration: 1.5,

      delay: 0.6,
    });
  }, []);
  return (
    <div className="w-full  h-[100vh] ">
      <div className="h-[900px] w-full object-cover overflow-hidden">
        <img
          className="image h-[900px] relative  w-full object-cover scale-[1.1]  "
          src="/about-bg-main.webp"
        />
        <h1 className="lg:text-9xl text-5xl p-8 text-[#ecece4] w-[80%]  lg:w-[85%] bg-transparent absolute md:bottom-12 bottom-0 left-0 font-semibold">
          Considered creative for elevated brands
        </h1>
      </div>

      <div className="lg:max-w-[80%] bg-transparent headingBlock  md:gap-20 lg:gap-32 p-4 w-full mt-12 md:flex items-center justify-center flex-col mx-auto">
        <h1 className="lg:text-6xl bg-transparent text-3xl md:text-5xl font-semibold text-[#bfbfa3] flex md:text-center flex-col items-center justify-center w-full">
          Pairing modern minimalist design with meaningful messaging, we craft
          exquisite identities that reveal each brand’s unique story.
        </h1>
        <p className="md:text-lg bg-transparent paragraph font-semibold text-xs w-full lg:w-[70%] text-center  ">
          OUR WORK COMMUNICATES QUALITY AT EVERY TOUCHPOINT TO CREATE A PRESENCE
          THAT RESONATES DEEPLY, GENERATING THE TRUST THAT LEADS TO MARKETPLACE
          SUCCESS.
        </p>
      </div>
      <div className="relative ">
        <div className="h-[900px]  w-full object-cover overflow-hidden">
          <img
            className="image2 h-[900px] w-full object-cover scale-[1.2]"
            src="/forner-about-2.webp"
          />
        </div>
        <div className="w-full  items-center justify-center flex">
          <Contact about={true} />
        </div>
      </div>

      <div className="bg-[#aab4b8] pt-20 lg:pt-44 flex flex-col items-center justify-center w-full lg:h-[1400px] h-[1100px] ">
        <div className=" lg:pt-20 h-[60%] gap-12 md:gap-20 lg:gap-40 flex flex-col items-center justify-center bg-transparent w-full ">
          <h1 className="w-[100%]  heading  md:text-2xl md:w-[80%] text-[#4a4036] font-semibold text-sm lg:text-3xl bg-transparent text-center">
            WE VALUE BUILDING RELATIONSHIPS OF TRUST WITH OUR CLIENTS AND OUR
            CREATIVE TALENT. WE TAKE A BESPOKE APPROACH TO EACH PROJECT, WORKING
            IN SMALL, SPECIALIZED TEAMS WITH A NETWORK OF HIGHLY SKILLED
            CREATIVES.
          </h1>
          <div className="flex h-[350px]   bg-transparent gap-3">
            <img
              className="scroll-image bg-transparent object-cover h-[150px] lg:w-[300px] w-[150px] lg:h-[300px] "
              src="https://images.ctfassets.net/d9627l0amdl4/1dF52XxA7dH9n1J4msxNmr/931eb706f48634ec891d0d0d696fc256/about3.jpg?h=650&w=400&q=80&fit=fill&&fm=webp&q=80"
            />
            <img
              className="scroll-image bg-transparent object-cover  h-[150px] lg:w-[300px] w-[150px] lg:h-[300px] "
              src="/image-brand-2.webp"
            />
          </div>
        </div>
      </div>
      <Marquee />
      <WhoWeAre />
      <div>
        <StudioAbout />
        <AboutSec />
      </div>
      <div>
        <Footer src="/book2.webp" main={true} />
      </div>

      {/* <img src=" " className='image h-full scale-[1.2] object-cover w-full lg:h-screen' /> */}
      {/* <div className='slider-frame'>
            <div className="slide-images">
                    <div className="img-container">
                        <img src="/image-slider-1.webp"/>
                    </div>
                    <div className="img-container">
                        <img src="/image-slider-2.webp"/>
                    </div>
                    <div className="img-container">
                        <img src="/image-slider-3.webp"/>
                    </div>
                    <div className="img-container">
                        <img src="/image-slider-4.webp"/>
                    </div>
                    </div>
    </div> */}
    </div>
  );
};

export default page;
