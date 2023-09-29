"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

import { motion } from "framer-motion";
import Project from "../../../components/Project";
import Modal from "../../../components/Modal";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  // const [mousePosition,setMousePosition]=useState({x:0,y:0})
  // const text="Pinterest".split("")
  // const [letters, setLetters] = useState([]);
  // const moveMouse=(e)=>{
  //   setMousePosition({
  //     x:e.clientX,
  //     y:e.clientY,
  //   })
  // }

  // const [onImage,setOnImage]=useState(false)

  // useEffect(()=>{
  //   window.addEventListener("mousemove",moveMouse)

  //   return ()=>window.removeEventListener("mousemove",moveMouse)

  // },[])
  const [modal, setModal] = useState({ active: false, index: 0 });
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.from(".card1", {
      scrollTrigger: {
        trigger: ".card-system",
        scroller: "body",
        end: "bottom bottom",
        pin: true,
      },
      y: 200,
      scrub: 2,
      opacity: 0,
    });
    gsap.from(".headingScroll1", {
      scrollTrigger: {
        trigger: ".card-system",
        scroller: "body",
        end: "bottom bottom",
        pin: true,
      },
      y: -100,
      scrub: 2,
      opacity: 0,
    });
    gsap.from(".card2", {
      scrollTrigger: {
        trigger: ".card-system",
        scroller: "body",
        start: "top+=100 top",
        end: "bottom bottom",
        pin: true,
      },
      y: 200,
      scrub: 2,
      opacity: 0,
    });
    gsap.from(".card3", {
      scrollTrigger: {
        trigger: ".card-system",
        scroller: "body",
        markers: true,
        start: "top+=150 top",
        end: "bottom bottom",
        pin: true,
      },
      y: 200,
      scrub: 2,
      opacity: 0,
    });
    gsap.from(".card4", {
      scrollTrigger: {
        trigger: ".card-system",
        scroller: "body",
        markers: true,
        start: "top+=200 top",
        end: "bottom bottom",
        pin: true,
      },
      y: 200,
      scrub: 2,
      opacity: 0,
    });
  }, []);
  const projects = [
    {
      number: 18,
      project: "Wilding",
      width: "30vw",
      src: "/ig1 (1).webp",
    },
    {
      number: 19,
      project: "Neranese",
      width: "33vw",
      src: "/ig1 (2).webp",
    },
    {
      number: 20,
      project: "Desja",
      width: "36vw",
      src: "/ig1 (3).webp",
    },
    {
      number: 21,
      project: "Hey Jane",
      width: "39vw",
      src: "/ig1 (4).webp",
    },
    {
      number: 22,
      project: "Waterbody",
      width: "42vw",
      src: "/ig1 (5).webp",
    },
    {
      number: 23,
      project: "LaMaria",
      width: "45vw",
      src: "/ig1 (6).webp",
    },
    {
      number: 18,
      project: "Troop",
      width: "48vw",
      src: "/ig1 (7).webp",
    },
    {
      number: 24,
      project: "Reach",
      width: "51vw",
      src: "/ig1 (8).webp",
    },
    {
      number: 25,
      project: "Global Nourish",
      width: "54vw",
      src: "/ig1 (9).webp",
    },
  ];
  // const variants={
  //   default:{
  //     x:mousePosition.x,
  //     y:mousePosition.y,
  //   },

  // }

  return (
    //Hover Image Animation

    // <div
    //   onMouseLeave={() => setModal((modal) => ({ ...modal, active: false }))}
    //   onMouseEnter={() => setModal((modal) => ({ ...modal }))}
    //   className="flex border w-full border-black h-fit "
    // >
    //   <div className="flex text-start w-full flex-col ">
    //     {projects.map((project, i) => {
    //       return (
    //         <Project
    //           key={i}
    //           width={project.width}
    //           index={i}
    //           number={project.number}
    //           title={project.project}
    //           setModal={setModal}
    //         />
    //       );
    //     })}
    //   </div>
    //   <Modal projects={projects} modal={modal} />
    // </div>
    <div className="flex card-system font-[surtRegular]  text-[#4a4036] font-semibold flex-col mt-10 items-center justify-center">
      <Link
        href="/our-work/increase-case-acceptance"
        className="w-[90vw] h-full lg:absolute top-0"
      >
        <div className="flex gap-5 items-center">
          <h1 className="xl:text-[90.84px]  lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3 text-[30px] bg-transparent">
            Plans
          </h1>
          <div className="flex flex-col items-center bg-transparent justify-between">
            <span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
              1
            </span>
            <img
              src="/arrow.svg"
              className="w-[18px] md:w-[25px] lg:w-[25px] "
            />
          </div>
        </div>
        <img
          className="lg:h-[80vh] h-[50vh] md:h-full    w-full object-cover"
          src="/brand-1.webp"
        />
      </Link>
      <Link
        href="/our-work/reduce-front-desk-workload"
        className="w-[90vw] h-full  absolute top-0"
      >
        <div className="flex headingScroll1  gap-5 items-center">
          <h1 className="xl:text-[90.84px] lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
            Premium plan
          </h1>
          <div className="flex flex-col items-center bg-transparent justify-between">
            <span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
              2
            </span>
            <img
              src="/arrow.svg"
              className="w-[18px] md:w-[25px] lg:w-[25px] "
            />
          </div>
        </div>
        <img
          className="lg:h-[80vh] card1 md:h-full h-[50vh] w-full object-cover"
          src="/brand-2.webp"
        />
      </Link>
      <Link
        href="/our-work/reduce-front-desk-workload"
        className="w-[90vw] h-full card2 absolute top-0"
      >
        <div className="flex headingScroll2 gap-5 items-center">
          <h1 className="xl:text-[90.84px] lg:text-[68px] headingScroll1 md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
            Denchat.com
          </h1>
          <div className="flex flex-col items-center bg-transparent justify-between">
            <span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
              3
            </span>
            <img
              src="/arrow.svg"
              className="w-[18px] md:w-[25px] lg:w-[25px] "
            />
          </div>
        </div>
        <img
          className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover"
          src="/brand-3.webp"
        />
      </Link>
      <Link
        href="/our-work/reduce-front-desk-workload"
        className="w-[90vw] h-full card3 absolute top-0"
      >
        <div className="flex gap-5 items-center">
          <h1 className="xl:text-[90.84px] lg:text-[68px] headingScroll1 md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
            Denchat.com
          </h1>
          <div className="flex flex-col items-center bg-transparent justify-between">
            <span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
              4
            </span>
            <img
              src="/arrow.svg"
              className="w-[18px] md:w-[25px] lg:w-[25px] "
            />
          </div>
        </div>
        <img
          className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover"
          src="/brand-3.webp"
        />
      </Link>
      <Link
        href="/our-work/reduce-front-desk-workload"
        className="w-[90vw] h-full card4 absolute top-0"
      >
        <div className="flex gap-5 items-center">
          <h1 className="xl:text-[90.84px] lg:text-[68px] headingScroll1 md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
            Ortho AI Vision
          </h1>
          <div className="flex flex-col items-center bg-transparent justify-between">
            <span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
              5
            </span>
            <img
              src="/arrow.svg"
              className="w-[18px] md:w-[25px] lg:w-[25px] "
            />
          </div>
        </div>
        <img
          className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover"
          src="/brand-3.webp"
        />
      </Link>
    </div>
  );
};

export default page;
