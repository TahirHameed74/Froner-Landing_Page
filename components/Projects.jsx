"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import EnlargeableImage from "./EnlargedImage";

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

	const [enlarged, setEnlarged] = useState(false);

	const toggleEnlarged = () => {
		setEnlarged(!enlarged);
	};

	const imageStyle = enlarged
		? { width: "400px", height: "400px" }
		: { width: "400px", height: "230px" };
	const containerStyle = enlarged
		? { width: "300px", height: "300px", overflow: "auto" }
		: { width: "400px", height: "230px" };

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
						35
					</span>
					<img
						src="/arrow.svg"
						className="w-[18px] bg-transparent md:w-[17px] lg:w-[30px] "
					/>
				</div>
			</div>

			<div className="images md:flex  flex-col text-[#4a4036] gap-16 font-[surtRegular] mx-auto gridder w-full ">
				<div className="flex gap-3 flex-col">
					<p className="text-center text-[30px] ">
						Increase Revenue - Kriss helps you identify new opportunities for
						treatment.
					</p>
					<div className="flex  ml-52">
						<div className="w-full grid grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 grid-flow-row gap-4 pb-4 px-6 ">
							<EnlargeableImage
								src="/chat_screen/Template-1.svg"
								initialWidth="200px"
								initialHeight="230px"
								enlargedWidth="400px"
								enlargedHeight="400px"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-2.svg"
								initialWidth="200px"
								initialHeight="230px"
								enlargedWidth="400px"
								enlargedHeight="400px"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-3.svg"
								initialWidth="200px"
								initialHeight="230px"
								enlargedWidth="400px"
								enlargedHeight="400px"
							/>
						</div>
					</div>

					<p className="text-center text-[30px] ">
						Fully Customizable- Kriss is tailored to your office and the way you
						approach your patients.
					</p>
					<div className="flex  ml-52">
						<div className="w-full grid grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 grid-flow-row gap-4 pb-4 px-6 ">
							<EnlargeableImage
								src="/chat_screen/Template-6.svg"
								initialWidth="200px"
								initialHeight="100%"
								// enlargedWidth="400px"
								// enlargedHeight="400px"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-7.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-8.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
						</div>
					</div>

					<p className="text-center text-[30px] ">
						Multiple Users - Kriss offers a platform for every user in the
						dental space - patients, doctor, and staff.
					</p>

					<div className="flex  ml-52">
						<div className="w-full grid grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 grid-flow-row gap-4 pb-4 px-6 ">
							<EnlargeableImage
								src="/chat_screen/Template-11.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-12.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-13.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
						</div>
					</div>

					<p className="text-center text-[30px] ">
						Save Time - Kriss reduces the amount of time spent asking redundant
						questions, for patients, doctor, and staff.
					</p>
					<div className="flex  ml-52">
						<div className="w-full grid grid-cols-3 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 grid-flow-row gap-4 pb-4 px-6 ">
							<EnlargeableImage
								src="/chat_screen/Template-16.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-17.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-18.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
						</div>
					</div>

					<p className="text-center text-[30px] ">
						Expert Opinion - Kriss provides you with an expert opinion to
						discuss treatment plans, ADA codes, and more.
					</p>

					<div className="flex  ml-52">
						<div className="w-full grid grid-cols-4 max-sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 grid-flow-row gap-4 pb-4 px-6 ">
							<EnlargeableImage
								src="/chat_screen/Template-21.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-22.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-23.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
							<EnlargeableImage
								src="/chat_screen/Template-36.svg"
								initialWidth="200px"
								initialHeight="100%"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
