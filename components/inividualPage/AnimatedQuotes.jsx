import React from "react";

const AnimatedQuotes = ({ topQuote, bottomQuote, midText }) => {
	return (
		<div className="lg:h-[60vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[80%] w-[95%] md:w-[80%] mx-auto my-10 ">
			<div className="text-center font-semibold ">
				<h1 className="lg:text-7xl md:text-2xl text-3xl font-[clashDisplay] text-primary1 ">
					{topQuote}
				</h1>
				<p className="lg:text-7xl md:text-5xl text-2xl ">{midText}</p>
			</div>
			<h1 className=" text-lg text-center font-[clashDisplay] text-primary1">
				{bottomQuote}
			</h1>
		</div>
	);
};

export default AnimatedQuotes;
