import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
const Modal = ({ projects, modal }) => {
  const [cursorPosition, setCursorPosition] = useState({ y: 0 });
  const container = useRef(null);
  const off = useRef(null);
  const { index, active } = modal;
  const variants = {
    default: {
      y: cursorPosition.y,
    },
  };
  const scaleAnimation = {
    initial: { scale: 0 },

    enter: {
      scale: 1,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };
  useEffect(() => {
    if (active) {
      const moveContainer = gsap.quickTo(container.current, "top", {
        duration: 0.8,
        ease: "power3",
      });
      const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        moveContainer(clientY);
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        // Remove the event listener and animation when active becomes false
        window.removeEventListener("mousemove", onMouseMove);
        // Kill the animation to prevent it from affecting other instances
      };
    }
  }, [active]);

  return (
    <div
      ref={container}
      className={
        "h-[200px]   bg-transparent absolute overflow-hidden w-[300px] left-0 top-0 flex  "
      }
    >
      <div
        style={{
          top: index * -100 + "%",
          transition: "top 1.5s cubic-bezier(.25,.1,.25,1)",
        }}
        className={`h-full hidden xl:block absolute  w-full`}
      >
        {projects.map((project, i) => {
          const { src } = project;

          return (
            <div className="relative h-full  flex items-center justify-center ">
              <img className="h-[200px] w-[300px] " src={src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
