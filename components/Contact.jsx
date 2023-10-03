"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ animation, about }) => {
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
				animation ? "container lg:bottom-[600px]" : ""
			} absolute h-[400px]  p-10 md:h-[450px] w-[350px] md:w-[450px] lg:w-[750px] text-center z-[1]  lg:h-[750px] flex flex-col justify-between items-center  bg-[#cdeceb]`}>
			{!about ? (
				<h1 className="lg:text-[33.28px] md:text-[20px] forner-heading-1 text-[#4a4036] font-[clashDisplay] bg-transparent  w-full lg:w-[670px] text-[10px] items-center flex justify-center">
					Explore how Kriss.ai can revolutionize your dental clinic’s
					operations. Connect with us at Kriss.ai and join us on this
					transformative journey.
				</h1>
			) : (
				<i className="bg-transparent lg:text-8xl">What We Do</i>
			)}

			{!about && (
				<div className="font-[lightItalic] md:text-[30px] text-[#4a4036] flex flex-col bg-transparent lg:text-[50px]">
					<i className="bg-transparent ">Book a free online demo</i>
					{/* <i className="bg-transparent">contact us</i> */}
				</div>
			)}
			{!about ? (
				<h2 className="lg:text-[58.24px] md:text-[30px] text-[25px] bg-transparent text-[#4a4036] font-[clashDisplay]">
					INFO@KRISS.AI
				</h2>
			) : (
				<div className="flex items-center gap-1 text-lg md:text-xl lg:text-2xl bg-transparent text-[#969fa3] font-semibold flex-col">
					{aboutItems.map((item, i) => (
						<span key={i} className="bg-transparent">
							{item}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default Contact;
