import React from "react";
import Navbar from "../Navbar";

const MainBanner = ({ src, productName }) => {
	return (
		<div className="w-full top-0 h-full">
			<div className="lg:h-[1200px] h-screen w-full object-cover overflow-hidden">
				<img
					className={`image h-full ${
						productName && "relative"
					}  w-full object-cover`}
					src={src}
				/>
				{productName && (
					<h1 className="lg:text-9xl text-5xl lg:p-8 p-5 text-[#ecece4] w-[80%]  lg:w-[85%] uppercase bg-transparent absolute md:bottom-12 bottom-0 left-0 font-semibold">
						{productName}
					</h1>
				)}
			</div>
		</div>
	);
};

export default MainBanner;
