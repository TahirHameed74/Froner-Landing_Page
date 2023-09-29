"use client";
import React, { useEffect } from "react";
import Contact from "./Contact";
import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FooterShine from "./FooterShine";
// import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

const Footer = ({ main, mainAbout, src }) => {
	const logo = "FORNER".split("");
	useEffect(() => {
		// gsap.from(".social1,.social2,.social3",{
		//   stagger:0.1,
		//   y:100,
		//   delay:0.8,
		//   opacity:0,
		//     scrollTrigger:{
		//         trigger:".socials",
		//         markers:true,
		//        start:"top-=150 bottom",
		//        end:"bottom+=2000 bottom",
		//     },
		// })
		// const split=new SplitText(".heading",{type:"chars"})
		// let chars=split.chars
		// gsap.from(chars,{
		//   yPercent:130,
		//   stagger:0.09,
		//   duration:1,
		//   ease:"back.out",
		//   scrollTrigger:{
		//     trigger:".heading"
		//   }
		// },
		// )
	}, []);

	return (
		<div className="relative">
			<div className="flex items-center justify-center">
				{main && <Contact animation={true} />}
			</div>
			<div className="lg:h-[1800px]  z-[-1]  overflow-hidden h-screen w-full">
				<img
					className=" image_studio z-[-1] h-full w-full object-cover"
					src={src}
				/>
			</div>
			<div className="flex md:p-16 p-4 h-[800px] bg-transparent flex-col justify-between ">
				<img
					className="bg-transparent text-white "
					src="/Logo-Kriss-white.png"
				/>
				{/* <div className="flex bg-transparent text-[#70777a] font-bold lg:text-2xl justify-between">
          <span className="flex bg-transparent w-full uppercase font-[clashDisplay] md:text-[25px] text-[15px] lg:text-[32.8px] justify-between socials">
            <div className="social1 bg-transparent" onClick={() => {}}>
              Behance
            </div>
            <div className="social2 bg-transparent" onClick={() => {}}>
              Instagram
            </div>
            <div className="social3 bg-transparent" onClick={() => {}}>
              Pinterest
            </div> */}
				{/* <span className=' bg-transparent social'>Behance</span>
            <span className=' bg-transparent social'>Instagram</span>
            <span className='bg-transparent social'>Pinterest</span> */}
				{/* </span>
        </div> */}
			</div>
		</div>
	);
};

export default Footer;
