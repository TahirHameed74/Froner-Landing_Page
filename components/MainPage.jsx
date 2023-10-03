"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Images from "./Images";
import CardsStacking from "./CardsStacking";
import Projects from "./Projects";
import Footer from "./Footer";
import FullScreenMenu from "./FullScreenMenu";
import WhatIsKriss from "./WhatIsKriss";
import { motion } from "framer-motion";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		// const images = tl.from(".scroll-image", {
		// 	stagger: 0.2,
		// 	scrollTrigger: {
		// 		trigger: ".scroll-image",
		// 		start: "center bottom-=50",
		// 		end: "top bottom",
		// 		scrub: 4,
		// 	},
		// 	height: "0px",
		// 	duration: 2,

		// 	delay: 0.6,
		// });
		// const italic_fade = tl.from(".italic-fade", {
		// 	scrollTrigger: {
		// 		trigger: ".scroll-image",
		// 		scrub: 4,
		// 	},
		// 	opacity: 0,
		// 	delay: 1,
		// 	duration: 0.2,
		// });
		// const stick = gsap.from(".stick", {
		// 	scale: 0,
		// 	delay: 0.7,
		// 	duration: 1.3,
		// });

		const forner_heading = gsap.to(".forner-heading-1", {
			scrollTrigger: {
				trigger: ".forner-heading-1",

				start: "center bottom",
				end: "center center",
			},
			opacity: 1,
		});
		const forner_heading2 = gsap.to(".forner-heading-2", {
			scrollTrigger: {
				trigger: ".forner-heading-2",

				start: "center bottom",
				end: "center center",
			},
			opacity: 1,
		});
		const forner_heading3 = gsap.to(".forner-heading-3", {
			scrollTrigger: {
				trigger: ".forner-heading-2",

				start: "center bottom",
				end: "center center",
			},
			opacity: 1,
		});
	}, []);
	const [isOpen, setIsOpen] = useState(false);
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
	const router = useRouter();
	return (
		<div className="bg-[#D0E5E4]   h-full">
			<Navbar setIsOpen={setIsOpen} />

			<div id="kriss.ai" className="flex mt-32 h-full flex-col ">
				<h1 className=" forner-heading-1 font-[clashDisplay] md:text-[30px] text-center opacity-0 text-[#4a4036]  lg:text-5xl uppercase text-xl">
					Kriss.ai is a revolutionary chatbot
				</h1>
				<i className='forner-heading-1 font-["lightItalic"] text-center md:text-[30px] opacity-0 text-[#4a4036] mb-3 lg:text-4xl text-xl'>
					that helps dental offices communicate with patients
				</i>

				<div className=" mb-20 ">
					<Images />
				</div>

				{/* <div className="flex lg:h-[350px] gap-3"> */}
				{/* <img
						className="scroll-image object-cover h-[150px] md:w-[200px] md:h-[250px] lg:w-[300px] w-[150px] lg:h-[300px] "
						src="/mobile-green-mid.png"
					/>
					<img
						className="scroll-image object-cover h-[150px] md:w-[200px] md:h-[250px] lg:w-[300px] w-[150px] lg:h-[300px] "
						src="/mobile-green-mid.png"
					/> */}
				{/* </div> */}
				<div className="flex justify-center lg:text-[41.6px] text-[#4a4036] md:text-[40px] text-lg gap-5 items-center">
					<h1 className=" forner-heading-2 font-[clashDisplay] md:text-[30px] text-center opacity-0 text-[#4a4036]  lg:text-5xl uppercase text-xl">
						helping dentists save money and improve case acceptance
					</h1>
					{/* <div className=" stick h-[1px] lg:w-[250px] md:w-[150px]  bg-red-950 w-[70px]" />
					<i className='italic-fade font-["lightItalic"] '>and live with it</i> */}
				</div>
			</div>

			{/* <WhatIsKriss /> */}
			{/* <h1 className='lg:sticky text-[25px] top-0 w-[80%] lg:w-[40%] lg:text-[50px] font-[surtRegular] font-bold flex items-end gap-3  p-8  h-full'>Kriss chats to your patients when you're too busy</h1> */}
			<div id="how-it-works" className="mt-20 w-4/5 justify-center mx-auto ">
				<h1 className=" forner-heading-2  font-[clashDisplay] md:text-[30px] text-center opacity-0 text-[#4a4036]  lg:text-5xl uppercase text-xl">
					HOW KRISS.AI WORKS
				</h1>
				<video
					className="lg:h-[60vh] mt-10 md:h-full h-[40vh] w-full object-cover "
					autoPlay
					loop
					muted
					playsInline>
					<source type="video/mp4" src="green.mp4" />
				</video>
			</div>
			<div id="pricing">
				<CardsStacking />
			</div>

			<Projects />
			<div id="sign-up">
				{/* <div className="pb-20 mb-20"></div> */}
				{/* <h1 className="flex px-auto justify-center  forner-heading-3 font-[clashDisplay] md:text-[20px] text-center  w-full opacity-0 text-[#4a4036]  lg:text-5xl  text-5xl">
					See Kriss at work:
				</h1>
				<h1 className="flex px-auto justify-center mt-4  forner-heading-3 font-[clashDisplay] md:text-[20px] text-center  w-full opacity-0 text-[#4a4036]  lg:text-5xl  text-5xl">
					Click a Case Study and chat with Kriss.ai now
				</h1> */}

				{/* <div className="flex  h-3/5 w-1/2  mx-auto items-center my-20 ">
					<div className="w-1/2 h-4/5  items-center border-2 border-[#4a4036] p-2 rounded-xl">
						<div className="flex flex-col">
							<div className="w-full">
								<img
									src="Idea-Dentistry-houston-tx-dentist.png"
									className="h-[100px] w-full"
									alt="Idea-Dentistry-houston-tx-dentist"
								/>
							</div>
							<p className="text-start text-[#4a4036] text-xl p-2 w-full font-[clashDisplay]">
								A general dentist in Houston, TX
							</p>
							<p className="p-2 text-start text-[#4a4036] font-[clashDisplay]">
								"As a busy dentist, patient engagement is crucial yet
								time-consuming. With the help of the AI chatbot, we've
								streamlined appointment scheduling, dental inquiries, and
								follow-up care. This technology has incredibly reduced our
								administrative workload, allowing us to focus more on providing
								top-notch oral care to our patients. It's like having an extra
								pair of hands that works 24/7!"
							</p>
							<div className="border-[1px] w-full border-[#4a4036]" />
						</div>
						<div className="mx-auto w-36">
							<button
								type="button"
								onClick={() => router.push("https://www.ideadentistry.com/")}
								className=" mt-3  flex items-center text-white bg-gradient-to-br from-[#c7e0dd] to-white  hover:bg-gradient-to-bl  focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
								<p className="ml-2 bg-transparent text-[#4a4036]">visit now</p>
								<img
									src="icons8-play-60.png"
									className="w-4 ml-2 h-3 bg-transparent"
									alt="Right Arrow"
								/>
							</button>
						</div>
					</div>
					<div className="w-1/2 h-4/5  ml-4  items-center  border-2 border-[#4a4036] p-2 rounded-xl">
						<div className="flex flex-col">
							<div className="w-full ">
								<img
									className="h-[100px] w-full"
									src="Life-works-dental-removebg-preview.png"
									alt="Life Works Dental"
								/>
							</div>
							<p className="text-start p-2 text-xl text-[#4a4036] w-full  font-[clashDisplay]">
								A cosmetic Dentist located in Memorial City, TX
							</p>
							<p className=" p-2   text-start  text-[#4a4036] font-[clashDisplay]">
								"Integrating an AI chatbot into our dental practice has
								dramatically enhanced our patient service. It instantly
								addresses patient questions, offering them convenient and
								comprehensive responses. Our patients are happier with the
								quick, round-the-clock assistance, and our staff is relieved
								from the constant ringing of phones. It's a win-win solution for
								us!"
							</p>
							<div className="border-[1px] w-full  border-[#4a4036]" />
						</div>
						<div className="mx-auto w-36">
							<button
								type="button"
								onClick={() => router.push("https://www.lifeworksdental.com/")}
								className=" mt-3  flex items-center text-white bg-gradient-to-br from-[#c7e0dd] to-white  hover:bg-gradient-to-bl  focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
								<p className="ml-2 text-[#4a4036] bg-transparent">visit now</p>
								<img
									src="icons8-play-60.png"
									className="w-4 ml-2 h-3 bg-transparent"
									alt="Right Arrow"
								/>
							</button>
						</div>
					</div>
				</div> */}
				{/* <div className="mt-10 mb-10">
					<div className="video-container">
						<video
							className="video-element mx-auto"
							autoPlay
							loop
							muted
							playsInline>
							<source type="video/mp4" src="chat.mp4" />
						</video>
					</div>
				</div> */}

				{/* <section class="text-neutral-700 dark:text-neutral-300 my-20 w-3/4 mx-auto bg-transparent">
					<div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
						<h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
						<p class="mb-6 pb-2 md:mb-12 md:pb-0">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
							error amet numquam iure provident voluptate esse quasi, veritatis
							totam voluptas nostrum quisquam eum porro a pariatur veniam.
						</p>
					</div>

					<div class="grid gap-6 text-center md:grid-cols-3 ">
						<div>
							<div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
								<div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
								<div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
									<img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
								</div>
								<div class="p-6">
									<h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
									<hr />
									<p class="mt-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											class="inline-block h-7 w-7 pr-2"
											viewBox="0 0 24 24">
											<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
										</svg>
										Lorem ipsum dolor sit amet eos adipisci, consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
						</div>

						<div>
							<div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
								<div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
								<div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
									<img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
								</div>
								<div class="p-6">
									<h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
									<hr />
									<p class="mt-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											class="inline-block h-7 w-7 pr-2"
											viewBox="0 0 24 24">
											<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
										</svg>
										Neque cupiditate assumenda in maiores repudi mollitia
										architecto.
									</p>
								</div>
							</div>
						</div>

						<div>
							<div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
								<div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
								<div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
									<img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
								</div>
								<div class="p-6">
									<h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
									<hr />
									<p class="mt-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											class="inline-block h-7 w-7 pr-2"
											viewBox="0 0 24 24">
											<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
										</svg>
										Delectus impedit saepe officiis ab aliquam repellat rem unde
										ducimus.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section> */}

				<div className="gradient-bg ">
					<section className="text-[#4a4036] mt-20 w-3/4 mx-auto bg-transparent ">
						<div className="mx-auto text-center md:max-w-xl lg:max-w-3xl  bg-transparent mb-32 ">
							<p className="flex  justify-center bg-transparent   font-[clashDisplay] text-[60px] text-center  w-full  text-[#4a4036]  ">
								See Kriss at work:
							</p>
							<p className="flex  justify-center bg-transparent font-[clashDisplay] text-[35px] text-center  w-full  text-[#4a4036]  ">
								Click a Case Study and chat with Kriss.ai now
							</p>
						</div>

						<div className="grid gap-6 text-center md:grid-cols-2 bg-transparent pb-10  ">
							<div className="bg-transparent mx-auto w-96 h-full  shadow-[#d0e5e4] ">
								<div className="border-[1px]  py-5  border-[#d0e5e4] rounded-lg h-full bg-[#d0e5e4]  font-[clashDisplay]">
									<div className="rounded-lg w-[90%] mx-auto">
										<p className="mt-4 ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="inline-block h-7 w-7 pr-2"
												viewBox="0 0 24 24">
												<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
											</svg>
											As a busy dentist, patient engagement is crucial yet
											time-consuming. With the help of the AI chatbot, we've
											streamlined appointment scheduling, dental inquiries, and
											follow-up care. This technology has incredibly reduced our
											administrative workload, allowing us to focus more on
											providing top-notch oral care to our patients. It's like
											having an extra pair of hands that works 24/7!
										</p>
									</div>

									<div className="p-6">
										<h4 className=" text-2xl font-semibold">Dr. Vu</h4>
									</div>
									<div className="p-2">
										<h4 className=" text-xl font-semibold">
											A general dentist in Houston, TX
										</h4>
									</div>

									<div className="mx-auto w-32 overflow-hidden ">
										<img src="Idea-Dentistry-houston-tx-dentist.png" />
									</div>
								</div>
							</div>

							<div className="bg-transparent w-96  mx-auto h-full  shadow-[#d0e5e4] ">
								<div className="border-[1px] py-5  border-[#d0e5e4] rounded-lg h-full bg-[#d0e5e4]  font-[clashDisplay]">
									<div className="rounded-lg w-[90%] mx-auto">
										<p className="mt-4 ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="inline-block h-7 w-7 pr-2"
												viewBox="0 0 24 24">
												<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
											</svg>
											Integrating an AI chatbot into our dental practice has
											dramatically enhanced our patient service. It instantly
											addresses patient questions, offering them convenient and
											comprehensive responses. Our patients are happier with the
											quick, round-the-clock assistance, and our staff is
											relieved from the constant ringing of phones. It's a
											win-win solution for us!
										</p>
									</div>

									<div className="p-6">
										<h4 className=" text-2xl font-semibold">
											Drs. Tran & Nguyen
										</h4>
									</div>
									<div className="p-2">
										<h4 className=" text-xl font-semibold">
											A cosmetic Dentist located in Memorial City, TX
										</h4>
									</div>

									<div className="mx-auto w-40 overflow-hidden ">
										<img src="Life-works-dental-removebg-preview.png" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<Footer src="/footer_pic.jpg" main={true} />
			<FullScreenMenu setIsOpen={setIsOpen} isOpen={isOpen} />
		</div>
	);
};

export default MainPage;
