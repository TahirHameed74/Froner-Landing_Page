"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DenchatContact = ({ animation, about }) => {
	const aboutItems = [
		"VISUAL IDENTITY",
		"NAMING",
		"STRATEGY",
		"PRINT",
		" WEBSITES",
		" BRAND VOICE",
		"MESSAGING",
		"PACKAGING DESIGN",
		"PRINT PRODUCTION",
		"CAMPAIGN",
		" SOCIAL STRATEGY",
		"PHOTOGRAPHY & VIDEO",
		"PRODUCT RENDERING",
	];
	useEffect(() => {
		gsap.to(".container", {
			scrollTrigger: {
				trigger: ".container",
				scrub: 3,
			},
			top: 300,
			duration: 3,
		});
	}, []);

	return (
		<div
			className={`${
				animation ? "container lg:bottom-[500px]" : ""
			} absolute h-[750px]  p-10  w-[350px] md:w-[500px] lg:w-[750px] text-center z-[1]   flex flex-col justify-between items-center  bg-[#f4e2df]`}>
			<h1 className="lg:text-[33.28px] md:text-[20px] forner-heading-1 text-[#4a4036] font-[clashDisplay] bg-transparent  w-full lg:w-[670px] text-[10px] items-center flex justify-center">
				Unlock new possibilities for your dental clinic with Denchat. Connect
				with us and be part of this transformative experience.
			</h1>

			<div className="font-[lightItalic] md:text-[30px] text-[#4a4036] flex flex-col bg-transparent lg:text-[50px]">
				<i className="bg-transparent ">Get listed for free!</i>
				{/* <i className="bg-transparent">contact us</i> */}
			</div>

			<h2 className="lg:text-[58.24px] md:text-[30px] text-[25px] bg-transparent text-[#4a4036] font-[clashDisplay]">
				INFO@KRISS.AI
			</h2>
		</div>
	);
};

export default DenchatContact;
