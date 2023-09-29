"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SplitText } from "gsap";

const FullScreenMenu = ({ isOpen, setIsOpen }) => {
  const navLinks = [
    { title: "OUR WORK", href: "/our-work" },
    { title: "ABOUT", href: "/about" },
    { title: "CONTACT", href: "/contact" },
  ];

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed top-0 left-0 text-[#4a4036] bg-[#ecece4] w-full h-full origin-top  z-[999] menu-container `}
        >
          <div className="h-full p-8">
            <button
              className="absolute text-2xl   z-50 top-4 right-4 text-black hover:text-gray-700 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {/* Close icon (You can replace this with your preferred close icon) */}
              CLOSE
            </button>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center font-lora items-center gap-4 "
            >
              {navLinks.map((link, index) => {
                return (
                  <div
                    onClick={() => setIsOpen(false)}
                    className="overflow-hidden"
                  >
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
