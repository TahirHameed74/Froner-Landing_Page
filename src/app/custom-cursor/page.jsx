"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
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
		<>
			<div className="flex gap-5 items-center">
				<h1 className="xl:text-[90.84px] heading-1 lg:text-[68px] md:text-[56px] pb-[6px] pt-14 md:pt-16 md:pb-3 text-[30px] bg-transparent">
					Plans
				</h1>
				<div className="flex flex-col items-center bg-transparent justify-between">
					<span className="font-[lightItalic] md:text-[30px] text-[20px] lg:text-[35px] bg-transparent ">
						1
					</span>
					<img src="/arrow.svg" className="w-[18px] md:w-[25px] lg:w-[25px] " />
				</div>
			</div>
			<img
				className="lg:h-[80vh] h-[50vh] md:h-full   w-full object-cover"
				src="/brand-1.webp"
			/>
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
		</>
	);
};

export default page;
