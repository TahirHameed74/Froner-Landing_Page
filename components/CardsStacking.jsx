"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CardsStacking = () => {
	const customStyle = {
		"--align": "center",
		"--align-mobile": "center",
		"--mobile": "169%",
		"--sm": "169%",
		"--md": "66.10000000000001%",
		"--lg": "66.10000000000001%",
		"--xl": "59.650000000000006%",
		"--xlg": "59.650000000000006%",
		"--xxlg": "59.650000000000006%",
	};
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const onMouseMove = (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};
		window.addEventListener("mousemove", onMouseMove);
		return () => window.removeEventListener("mousemove", onMouseMove);
	}, []);

	const itemVars = {
		moving: {
			x: mousePosition.x,
			y: mousePosition.y,
		},
	};

	return (
		<div className="flex card-system font-[surtRegular]  text-[#4a4036] font-semibold flex-col mt-20 items-center justify-center">
			<Link
				href="/our-work/increase-case-acceptance"
				className="w-[90vw] h-full lg:sticky top-0">
				<div className="flex gap-5 items-center">
					<h1 className="xl:text-[90.84px] heading-1 lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3 text-[30px] bg-transparent">
						Plans
					</h1>
					<div className="flex flex-col items-center bg-transparent justify-between">
						<span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
							1
						</span>
						<img
							src="/arrow.svg"
							className="w-[18px] md:w-[25px] lg:w-[25px] "
						/>
					</div>
				</div>
				<video
					className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover "
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="plans.mp4" />
				</video>
			</Link>
			<Link
				href="/our-work/reduce-front-desk-workload"
				className="w-[90vw] h-full lg:sticky top-0">
				<div className="flex gap-5 items-center">
					<h1 className="xl:text-[90.84px] lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
						Premium plan
					</h1>
					<div className="flex flex-col items-center bg-transparent justify-between">
						<span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
							2
						</span>
						<img
							src="/arrow.svg"
							className="w-[18px] md:w-[25px] lg:w-[25px] "
						/>
					</div>
				</div>
				<video
					className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover "
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="premium-plans.mp4" />
				</video>
			</Link>
			<Link
				id="denchat"
				href="/our-work/increase-patient-traffic"
				className="w-[90vw] h-full lg:sticky top-0">
				<div className="flex gap-5 items-center">
					<h1 className="xl:text-[90.84px] lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
						Denchat.com
					</h1>
					<div className="flex flex-col items-center bg-transparent justify-between">
						<span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
							3
						</span>
						<img
							src="/arrow.svg"
							className="w-[18px] md:w-[25px] lg:w-[25px] "
						/>
					</div>
				</div>
				<video
					className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover "
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="kriss-video-22.mp4" />
				</video>
			</Link>
			<Link
				id="ai-vision"
				href="/our-work/reduce-patient-anxiety"
				className="w-[90vw] h-full lg:sticky top-0">
				<div className="flex gap-5 items-center">
					<h1 className="xl:text-[90.84px] lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
						AI Vision (coming soon)
					</h1>
					<div className="flex flex-col items-center bg-transparent justify-between">
						<span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
							4
						</span>
						<img
							src="/arrow.svg"
							className="w-[18px] md:w-[25px] lg:w-[25px] "
						/>
					</div>
				</div>

				<video
					className="lg:h-[80vh] md:h-full h-[50vh] w-full object-cover "
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="kriss-video-1.mp4" />
				</video>
			</Link>
			<Link
				href="/our-work/reduce-patient-anxiety"
				className="w-[90vw] h-full    overflow-hidden lg:sticky top-0">
				<div className="flex gap-5 items-center">
					<h1 className="xl:text-[90.84px] lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3  text-[30px] bg-transparent">
						Ortho AI Vision
					</h1>
					<div className="flex flex-col items-center bg-transparent justify-between">
						<span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
							5
						</span>
						<img
							src="/arrow.svg"
							className="w-[18px] md:w-[25px] lg:w-[25px] "
						/>
					</div>
				</div>

				<video
					className="lg:h-[80vh] h-[50vh] md:h-full  w-full mx-auto object-cover"
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="kriss-video-2.mp4" />
				</video>
			</Link>
			{/* <motion.div className="cursor-container flex absolute text-[#4a4036] font-[surtRegular] pointer-events-none top-0">
        {["M", "O", "R", "E", " ", "H", "E", "R", "E"].map((letter, index) => (
          <React.Fragment key={index}>
            {index == 4 && (
              <motion.div
                className="cursor-item"
                style={{ width: "5px" }} // Adjust the width as needed
              ></motion.div>
            )}

            <motion.div
              key={index}
              variants={itemVars}
              initial="hidden"
              animate="moving"
              exit="hidden"
              className="cursor-item bg-transparent "
              transition={{ duration: index * 0.07 }} // Adjust the duration as needed
            >
              {letter}
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div> */}
		</div>
	);
};

export default CardsStacking;
