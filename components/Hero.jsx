"use client";
import { useState } from "react";
import Brand from "./Brand";
import Link from "next/link";
import NavbarBanner from "./NavbarBanner";
const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="h-full">
			<NavbarBanner setIsOpen={setIsOpen} />
			<div className="w-full video-wrapper relative   h-full">
				{/* <Brand/> */}

				<p className=" bg-transparent banner-navigation  sm:items-center z-[999] text-black  font-[surtRegular] absolute top-1/2 left-1/3	 md:text-[25px] text-[20px]  uppercase lg:text-[30px]">
					The Ultimate AI Chatbot for Dentists
				</p>
				<video
					className="h-[100vh]   object-cover w-full overflow-hidden flex justify-center ic -z-[1] lg:block"
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="/kriss-banner.mp4" />
				</video>
				<div>
					<div className=" bg-transparent h-10 items-center justify-center  right-5 just z-[999]  text-white flex font-[surtRegular] absolute top-80   text-2xl  uppercase ">
						<a className="bg-transparent" href="#kriss.ai">
							KRISS.AI
						</a>
					</div>
					<div className=" bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[360px]  md:text-[25px] text-2xl   uppercase ">
						<a className="bg-transparent" href="#how-it-works">
							HOW IT WORKS?
						</a>
					</div>
					<div className=" bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[400px]  md:text-[25px] te  uppercase text-2xl ">
						<a className="bg-transparent" href="#pricing">
							PRICING
						</a>
					</div>
					<div className=" bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[440px]  md:text-[25px] text-2xl    uppercase  ">
						<a className="bg-transparent" href="#denchat">
							DENCHAT
						</a>
					</div>
					<div className=" bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[480px]  md:text-[25px] text-2xl   uppercase ">
						<a className="bg-transparent" href="#ai-vision">
							AI VISION
						</a>
					</div>
					<div className=" bg-transparent h-10 right-5  z-[999]  text-white flex font-[surtRegular] absolute top-[520px]  md:text-[25px] text-2xl  uppercase ">
						<a className="bg-transparent" href="#sign-up">
							SIGN UP
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
