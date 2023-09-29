import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AboutPeople = ({ src, name, role, className }) => {
  useEffect(() => {
    const image = gsap.to(".people-image1", {
      scrollTrigger: {
        trigger: ".people-image1",
        scrub: 3,
        start: "top center",
        end: "bottom bottom",
      },
      scale: 1,
      duration: 2,
    });
    const image2 = gsap.to(".people-image2", {
      scrollTrigger: {
        trigger: ".people-image2",
        scrub: 3,
        start: "top center",
        end: "bottom bottom",
      },
      scale: 1,
      duration: 2,
    });
    const image3 = gsap.to(".people-image3", {
      scrollTrigger: {
        trigger: ".people-image3",
        scrub: 3,
        start: "top center",
        end: "bottom bottom",
      },
      scale: 1,
      duration: 2,
    });
  }, []);

  return (
    <div className="about-person bg-transparent ">
      <div>
        <div className="lg:w-fit overflow-hidden md:w-[300px]">
          <img
            className={`${className} scale-[1.2] bg-transparent over w-full opacity-80`}
            src={src}
          />
        </div>
        <div className="bg-transparent">
          <i className="lg:text-6xl bg-transparent md:text-4xl ">{name}</i>
          <p className=" font-semibold bg-transparent">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPeople;
