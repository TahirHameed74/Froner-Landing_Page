"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Images = () => {
	const [mouseActive, setMouseActive] = useState(false);

	// Add event listeners to track mouse interaction
	useEffect(() => {
		const handleMouseEnter = () => {
			setMouseActive(true);
		};
		const handleMouseLeave = () => {
			setMouseActive(false);
		};

		window.addEventListener("mouseenter", handleMouseEnter);
		window.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	useEffect(() => {
		if (!mouseActive) {
			const image1 = gsap.from(".image1", {
				scrollTrigger: {
					trigger: ".image1",

					start: "top bottom-=10 ",
					end: "bottom+=200",
				},
				opacity: 0,
				y: 200,
				duration: 1.4,
			});
			// const image2 = gsap.from(".image2", {
			// 	scrollTrigger: {
			// 		trigger: ".image2",

			// 		start: "top-=100 bottom-=10 ",
			// 		end: "bottom+=200",
			// 	},
			// 	opacity: 0,
			// 	y: 200,
			// 	duration: 1.4,
			// });
			// const image4 = gsap.from(".image4", {
			// 	scrollTrigger: {
			// 		trigger: ".section4",

			// 		start: "top bottom-=10 ",
			// 		end: "bottom+=200",
			// 	},
			// 	opacity: 0,
			// 	y: 200,
			// 	duration: 1.4,
			// });
			// const image5 = gsap.from(".image5", {
			// 	scrollTrigger: {
			// 		trigger: ".section5",

			// 		start: "top bottom-=10 ",
			// 		end: "bottom+=200",
			// 	},
			// 	opacity: 0,
			// 	y: 200,
			// 	duration: 1.4,
			// });
			// const image3 = gsap.from(".image3", {
			// 	scrollTrigger: {
			// 		trigger: ".section3",

			// 		start: "top bottom-=10 ",
			// 		end: "bottom+=200",
			// 	},
			// 	opacity: 0,
			// 	y: 200,
			// 	duration: 1.4,
			// });
			const image6 = gsap.from(".image6", {
				scrollTrigger: {
					trigger: ".image6",

					start: "top bottom-=10 ",
					end: "bottom+=200",
				},
				opacity: 0,
				y: 300,
				duration: 1.4,
			});
			const bigImage = gsap.from(".bigImage", {
				scrollTrigger: {
					trigger: ".bigImage",

					start: "top+=200 bottom-=10 ",
					end: "bottom+=200",
				},
				scale: 1.2,
				duration: 2,
			});
			const video1 = gsap.from(".video1", {
				scrollTrigger: {
					trigger: ".video1",

					start: "top bottom-=10 ",
					end: "bottom+=200",
				},
				opacity: 0,
				y: 200,
				duration: 1.4,
			});
			const para = gsap.from(".para1,.para2,.para3", {
				scrollTrigger: {
					trigger: ".para-div",
					start: "top-=50 bottom ",
					end: "bottom+=400 top",
				},
				opacity: 0,
				stagger: 0.5,
			});
		}
	}, [mouseActive]);
	return (
		<div className="flex flex-1 relative  w-full flex-col">
			<div className="flex flex-row-reverse md:flex-row ">
				<div className="w-1/2"></div>
				<img
					className="image1 w-[50%] h-[120px] object-cover md:w-[375px] md:h-[200px] lg:h-[250px] lg:w-[400px]"
					src="/section-33.jpg"
				/>
			</div>
			<div className="flex md:flex-row relative items-end flex-col    justify-between   object-cover overflow-hidden">
				<div className="md:w-1/2 big-img  h-full flex justify-end items-end ">
					<img
						className="image bigImage  md:w-[375px] md:h-[350px] lg:h-[400px] lg:w-[430px] h-[50vh]  "
						src="/section-31.jpg"
					/>
				</div>
				<div className="font-[surtRegular]  para-div sticky top-0 h-full font-semibold bg-transparent  text-[#4a4036] w-full  md:w-[45%] md:text-[20px]  xl:text-[30px] ">
					<p className="para1">
						Designed specifically for the dental industry.
					</p>
					<p className="para2">The smartest AI chatbot in the world</p>
					<p className="para3">is now available</p>
				</div>
			</div>
			{/* <div className="flex flex-row-reverse md:flex-row ">
				<div className="w-1/2"></div>
				<img
					className="image1 w-[125px] h-[120px] object-cover md:w-[175px] md:h-[150px] lg:h-[200px] lg:w-[230px]"
					src="/section-31.jpg"
				/>
			</div> */}
			<div className="flex ">
				<div className="w-1/2 flex justify-start items-start">
					<img
						className="w-[50%] image6  lg:h-[400px] h-[200px] md:h-[250px]  object-cover  z-[50] lg:block"
						src="/section-34.jpg"
					/>
				</div>
				<div className="w-1/2 flex justify-start items-start">
					<video
						className="w-[60%] video1 lg:h-[400px] h-[200px] md:h-[250px]  object-cover flex justify-center items-center z-[50] lg:block"
						autoPlay
						loop
						muted
						playsInline>
						<source type="video/mp4" src="section-3-video.mp4" />
					</video>
				</div>
			</div>
			{/* <div className="lg:w-1/2">
				<img className="w-[150px] image2 h-[130px] " src="/section-321.jpg" />
			</div> */}
			{/* <div className="lg:w-1/2 section3 flex">
				<div className="w-[80%]"></div>
				<img className="w-[20%] image3 " src="/section-32.jpg" />
			</div> */}
			{/* <div className="lg:w-1/2  section4  ">
				<div className="w-[80%] flex justify-start  ">
					<img className="w-[50%] image4 " src="/section-33.jpg" />
				</div>
			</div> */}
			{/* <div className="flex ">
				<div className="md:w-1/2 flex justify-end items-end">
					<img
						className="w-[60%] image6  lg:h-[400px] h-[200px] md:h-[250px]  object-cover flex justify-center items-center z-[50] lg:block"
						src="/section-34.jpg"
					/>
				</div>
				<div className="lg:w-1/2"></div>
			</div> */}
		</div>
	);
};

export default Images;
