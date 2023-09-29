"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";
import FullScreenMenu from "../../../components/FullScreenMenu";
import Footer from "../../../components/Footer";
import { gsap } from "gsap";

const page = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const heading = tl.from(".heading", {
      opacity: 0,
      delay: 0.5,
      duration: 0.3,
      y: 50,
    });
    const images = tl.from(".scroll-image", {
      stagger: 0.06,
      height: "0px",
      duration: 1.2,
    });
    const subheading = tl.from(".subheading", {
      duration: 0.4,
      stagger: 0.05,
      opacity: 0,
      y: 100,
    });

    const image = gsap.from(".image", {
      scrollTrigger: {
        trigger: ".image",
        start: "top top",
        end: "bottom bottom",
      },
      scale: 1.2,
      scrub: 2,
      duration: 1.5,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[100vh]">
      <Navbar setIsOpen={setIsOpen} />

      <div className="w-full text-[#4a4036] flex flex-col items-center  justify-center">
        <p className="lg:text-[210px] md:text-[90px] flex items-center  text-[45px] font-semibold  p-0 m-0 ">
          GET IN TOUCH
        </p>
        <span className="mt-10 font-semibold heading lg:text-4xl">
          INFO@FORNER.STUDIO
        </span>
        <div className="flex h-[200px] lg:h-[500px] mt-7 gap-4">
          <img
            className="scroll-image lg:min-w-[350px] max-w-[150px]  h-[175px] lg:h-[400px]"
            src="/contact-1.webp"
          />
          <img
            className="scroll-image lg:min-w-[350px] max-w-[150px]    h-[175px] lg:h-[400px]"
            src="/contact-2.webp"
          />
        </div>
        <div className="flex text-2xl lg:mt-8 mt-4 font-semibold lg:text-4xl items-center flex-col">
          <span className="lg:text-5xl subheading ">WE LOOK FORWARD</span>
          <i className="subheading">to hearing from you</i>
        </div>
        <div className="mt-20 lg:text-2xl gap-6 lg:w-[1200px] md:w-[600px] w-screen text-[#4a4036] flex items-center flex-col">
          <input
            required
            placeholder="NAME"
            className="border-b outline-none text-center w-full placeholder:text-[#4a4036] pb-4 mt-12 flex items-center justify-center border-b-[#4a4036]"
          />
          <input
            required
            placeholder="EMAIL"
            className="border-b text-center outline-none w-full pb-4 mt-12 flex items-center justify-center placeholder:text-[#4a4036] border-b-[#4a4036]"
          />
          <input
            required
            placeholder="MESSAGE"
            className="border-b text-center outline-none w-full h-[200px]  flex items-center justify-center placeholder:text-[#4a4036] border-b-[#4a4036]"
          />
        </div>
        <h1 className=" flex font-semibold lg:text-[120px] md:text-[90px] text-[60px] cursor-pointer items-center justify-center h-[230px]">
          SEND
        </h1>
      </div>
      <div className="overflow-hidden w-full lg:h-[1200px]">
        <img
          className="mt-20 image lg:h-[1200px] scale-[1] w-full object-cover "
          src="/contactus-footer.webp"
        />
      </div>
      <Footer />
      <FullScreenMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default page;
