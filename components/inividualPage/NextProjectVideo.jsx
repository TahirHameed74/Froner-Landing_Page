import Link from "next/link";
import React from "react";

const NextProjectsVideo = ({ src1, src2, text1, text2, link1, link2 }) => {
	return (
		<div className="w-[95%] h-full    mx-auto mt-4 mb-4">
			<h1 className="lg:text-8xl md:text-6xl text-[42px] sticky z-10 bg-transparent top-0 opacity-25 font-semibold flex items-end pb-5 lg:items-center  h-[20vh] ">
				More Projects
			</h1>
			<div className="w-full  md:flex">
				<div className="flex-[1] ">
					<div className="overflow-hidden md:hover:h-[250px] lg:hover:h-[570px] hover:mt-3 hover:mr-3 transition-all h-[270px] md:h-[270px] lg:h-[600px]  ease duration-500 ">
						<Link href={link1}>
							<video
								className="w-full transition-all h-full ease duration-500  hover:scale-[1.2] object-cover  "
								data-v-fb727ca2=""
								id="video"
								autoPlay
								loop
								muted
								playsInline>
								<source
									data-v-fb727ca2=""
									src="/kriss-video-1.mp4"
									type="video/mp4"
								/>
							</video>
							{/* <img
								className="w-full transition-all h-full ease duration-500  hover:scale-[1.2] object-cover  "
								src={src1}
							/> */}
						</Link>
					</div>

					<Link href={link1} className="flex gap-3 w-fit items-start">
						<p className="text-3xl">Previous</p>
						<h2 className="text-4xl">{text1}</h2>
					</Link>
				</div>
				<div className="flex-[1]    md:flex flex-col items-end  ">
					<div className="overflow-hidden md:hover:h-[195px] md:h-[210px] hover:mt-3 hover:ml-3 lg:hover:h-[460px] lg:h-[470px]  h-[270px]  transition-all ease duration-500 ">
						<Link href={link2}>
							<video
								data-v-fb727ca2=""
								id="video"
								autoPlay
								loop
								muted
								className="transition-all hover:scale-[1.2]  ease duration-500  w-full h-full object-cover  "
								playsInline>
								<source
									data-v-fb727ca2=""
									src="/kriss-video-2.mp4"
									type="video/mp4"
								/>
							</video>
						</Link>
					</div>
					<Link href={link2} className="flex gap-3 items-start ">
						<p className="text-3xl">Next</p>
						<h2 className="text-4xl">{text2}</h2>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NextProjectsVideo;
