"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Projects = () => {
  useEffect(() => {
    let btn = document.querySelector(".underline-animation");
    let clipPathAnimation = gsap.to(".hovered-img ", 1, {
      paused: true,
      clipPath: "polygon(0 0,100% 0,100% 100%,0 100% )",
      ease: "power4.inOut",
      stagger: {
        from: "start",
        amount: 0.75,
      },
    });

    btn.addEventListener("mouseenter", () => {
      clipPathAnimation.play();
    });
    btn.addEventListener("mouseleave", () => {
      clipPathAnimation.reverse();
    });
  }, []);
  return (
    <div className="max-w-[90vw] lg:max-w-[94vw]  lg:p-5 lg:pb-32 pb-7 mt-20 mx-auto">
      <div className="flex h-fit w-fit bg-transparent sticky z-10 top-0  items-end gap-3 md:mb-10">
        <div className="w-full bg-transparent h-full">
          <h1 className="underline-animation leading-[58px] lg:pl-7 z-50 lg:pt-20 md:text-[40px] text-lg relative lg:text-[80.8px] h-fit   cursor-pointer font-[surtRegular] bg-transparent  opacity-40 ">
            See how kriss.ai responds
          </h1>
        </div>
        <div className="flex flex-col bg-transparent justify-between">
          <span className="font-[lightItalic] text-[#4a4036] md:text-[30px] text-[20px] lg:text-[45px] bg-transparent ">
            15
          </span>
          <img
            src="/arrow.svg"
            className="w-[18px] bg-transparent md:w-[17px] lg:w-[30px] "
          />
        </div>
      </div>

      <div className="images md:flex hidden flex-col text-[#4a4036] gap-16 font-[surtRegular] mx-auto gridder w-full ">
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Personal Approach - Kriss provides a personal approach to you and
            your patients and will address you by name.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Create Urgency - Kriss will create a sense of urgency and encourage
            patients to book treatment with your office.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Expert Opinion - Kriss provides you with an expert opinion to
            discuss treatment plans, ADA codes, and more.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Increase Revenue - Kriss helps you identify new opportunities for
            treatment.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Multiple Users - Kriss offers a platform for every user in the
            dental space - patients, doctor, and staff.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Fully Customizable- Kriss is tailored to your office and the way you
            approach your patients.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <p className="text-center text-[30px] ">
            Save Time - Kriss reduces the amount of time spent asking redundant
            questions, for patients, doctor, and staff.
          </p>
          <div className="flex flex-wrap gap-5 justify-around ">
            <div className="img img-1  w-fit">
              <img
                className="lg:w-[250px] md:w-[200px] md:h-[125px] object-cover  lg:h-[135px]"
                id="main-img"
                src="/ig1 (1).webp"
              />

              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (2).webp" />
              </div>
            </div>
            {/* <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (3).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (4).webp" />
              </div>
            </div> */}
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (5).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (6).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (7).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (8).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
            <div className="img img-1 w-fit">
              <img
                className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
                id="main-img"
                src="/ig1 (8).webp"
              />
              <div className="hovered-img ">
                <img className=" object-cover " src="/ig1 (9).webp" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (10).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (1).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (12).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (3).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (6).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (10).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (8).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (3).webp" />
          </div>
        </div> */}
        {/* <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (1).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (1).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (2).webp" />
          </div>
        </div>
        <div className="img img-1  w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (1).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (5).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (4).webp" />
          </div>
        </div> */}
        {/* <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig2 (1).webp"
          />
          <div className="hovered-img ">
            <img className=" object-cover " src="/ig1 (5).webp" />
          </div>
        </div> */}
        {/* <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div>
        <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div> */}
        {/* <div className="img img-1 w-fit">
          <img
            className="lg:w-[250px] md:w-[210px] md:h-[125px] object-cover lg:h-[135px]"
            id="main-img"
            src="/ig1 (13).webp"
          />
          <div className="hovered-img   ">
            <img className=" object-cover " src="/ig2 (2).webp" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
