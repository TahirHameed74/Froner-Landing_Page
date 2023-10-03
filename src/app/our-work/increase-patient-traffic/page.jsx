import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import OurWorkCard from "../../../../components/OurWorkCard";
import AnimatedQuote from "../../../../components/inividualPage/AnimatedQuote";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import NextProjectsVideo from "../../../../components/inividualPage/NextProjectVideo";
import DenchatFooter from "../../../../components/DenchatFooter";
import LargeImage from "../../../../components/inividualPage/LargeImage";
import Hero from "../../../../components/Hero";
import BigVideo from "../../../../components/inividualPage/BigVideo";
import Image from "../../../../components/inividualPage/Image";

const page = () => {
	return (
		<div className="w-full h-full">
			{/* <MainBanner
				productName="CAUSEMEDIC"
				src="https://images.ctfassets.net/d9627l0amdl4/6Ws3H8To6SpNyiESQaJUmZ/96c854a0319391f6ccc1a9c350fe830f/1.jpg?h=1728&w=1920&q=80&fit=fill&&fm=webp&q=80"
			/> */}
			<video
				className="h-[100vh]   object-cover w-full overflow-hidden flex justify-center ic -z-[1] lg:block"
				autoPlay
				loop
				muted
				playsInline>
				<source type="video/mp4" src="/kriss-banner.mp4" />
			</video>
			<h1 className="lg:text-9xl text-5xl lg:p-8 p-5 text-[#ecece4] w-[80%]  lg:w-[85%] uppercase bg-transparent absolute md:bottom-12 bottom-0 left-0 font-semibold">
				DENCHAT.COM
			</h1>
			<p className="text-3xl font-[clashDisplay] text-[#4a4036] w-4/5 mx-auto text-center my-28">
				{" "}
				Dental Listing + Dental Tourism + Dental Chat{" "}
			</p>
			<video
				className="h-[100vh]   object-cover w-full overflow-hidden flex justify-center ic -z-[1] lg:block"
				autoPlay
				loop
				muted
				playsInline>
				<source type="video/mp4" src="/denchat1.mp4" />
			</video>
			{/* <ServiceImage
				service=" Dental Listing + Dental Tourism + Dental Chat "
				src="https://images.ctfassets.net/d9627l0amdl4/in3Cg9HcINf41QPdsD2Bj/fb0582044fe2f25f007de5d9fe9ff94a/3b.jpg?h=1100&q=80&&fm=webp&q=80"
			/> */}
			<AnimatedQuotes
				topQuote="Discover, Connect, Smile – Denchat.com"
				// midText="Considered Skin"
				bottomQuote="Denchat.com: Your premier dental directory, connecting patients with top-notch dentists. Our Kriss.ai chatbot is your dental concierge, ready to answer patient questions. Elevate your practice with Denchat.com, where the future of dental care begins. "
			/>
			<MainBanner src="/denchat3.jpg" />
			<div className="flex">
				<div className="relative w-1/2 ">
					<div className="absolute bottom-10">
						<p className=" w-4/5 ml-10 text-base  font-[clashDisplay] text-primary1">
							Welcome to DenChat, your one-stop solution for dental care and
							travel planning!
						</p>
						<p className=" w-4/5 ml-10 text-base  font-[clashDisplay] text-primary1 mt-2">
							Meet Kriss, our friendly and witty AI chatbot, who is here to
							guide you through your dental journey. Whether you’re dealing with
							a toothache or considering a major dental procedure, Kriss is
							equipped to answer all your dental queries. But that’s not all!
							Kriss is also a seasoned travel agent, ready to help you plan your
							dental vacation, ensuring you get the best treatment while
							enjoying a memorable trip.
						</p>
						<p className="w-4/5 ml-10 text-base  font-[clashDisplay] text-primary1 mt-2">
							At DenChat, we understand that dental care can be expensive and
							stressful. That’s why we’ve created a platform that not only helps
							you find the right dentist, either locally or abroad, but also
							assists in planning your travel. Our goal is to make your dental
							care journey as smooth and enjoyable as possible.
						</p>
						<p className=" w-4/5 ml-10 text-base  font-[clashDisplay] text-primary1 mt-2">
							Kriss has access to a vast database of reputable dental clinics
							worldwide. Based on your specific needs and budget, Kriss can
							recommend the best clinics for you. Plus, with our cost estimator,
							you can get a clear idea of the expenses for both your dental
							procedure and travel.
						</p>
						<p className="w-4/5 ml-10 text-base  font-[clashDisplay] text-primary1 mt-2">
							But we don’t stop at dental care. Kriss is also a travel
							enthusiast, ready to provide insights on popular travel
							destinations, local attractions, accommodations, and more. Whether
							you’re considering dental implants in Mexico or a root canal in
							Thailand, Kriss can help you plan your trip down to the last
							detail.
						</p>
						<p className=" w-4/5 ml-10 text-base  font-[clashDisplay] text-primary1 mt-2">
							So why wait? Start your dental care journey with DenChat today.
							Remember, we’re not just about beautiful smiles, we’re about
							creating memorable adventures too. Have any questions? Feel free
							to ask Kriss anything, from the cost of dental procedures to the
							best time to visit a country for dental tourism. We’re here to
							help!
						</p>
					</div>
				</div>
				<div className="w-1/2 h-screen">
					<video data-v-fb727ca2="" id="video" autoPlay loop muted playsInline>
						<source data-v-fb727ca2="" src="/denchat2.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
			{/* <OurWorkCard /> */}
			{/* <MainBanner src="https://images.ctfassets.net/d9627l0amdl4/7BikFfLctnrpZdgYJeayc0/cff22b27aa87e268a125124a1ba3b78e/Apothekary_Image_05_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <LargeImage src="https://images.ctfassets.net/d9627l0amdl4/5SwLsb0CsHaoz09LxyJC3f/acaccd92095f80a46420505587291e26/6.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <OurWorkCard /> */}
			{/* <MainBanner src="https://images.ctfassets.net/d9627l0amdl4/6CjyaOC6yIsZimX0QBp730/3698fc3d93a95eecbf618f276f378baf/shippingbox_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <LargeImage
				className
				src="https://images.ctfassets.net/d9627l0amdl4/2qdt9FQPSA8JlpQq2glFRE/2799372fa756c026980665c446434f6b/16_copy2.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80"
			/> */}

			<BigVideo srcMob="/kriss-video-22.mp4" srcDesk="/denchat4.mp4" />
			<SideBySide src2="/two_docs.jpg" src1="/one_doc_patient.jpg" />
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/5C8ldeZnz7OZ5fSNqbm6iQ/35eb6ed1dcb32ae6962cb2cb4ab732c9/cause-medic-submark.gif?&q=80" /> */}
			{/* <MainBanner src="https://images.ctfassets.net/d9627l0amdl4/3gE9CNsrSeSSwAWqRkGHYg/e4738c8170f73751c94ecef3aacdf7ba/nav2.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/6l3QnhMlPHX37KwrpnaEOm/3cbf57373f8fc07e7920a4223be96271/box_stack.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <MainBanner src="https://images.ctfassets.net/d9627l0amdl4/14jg1F9owspBiW1LM7dZy2/0fe68f08eca33cbdc7aa6ee684808293/7.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/18EGnpklt05dF1m7sQGGP9/c7578420d010ee796ddb72cbfb2d3c95/Layout1.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/1w6Dtsel9Skv0s37EeYeS3/babc166472b4e41948e5982a1885f0e4/3.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			<NextProjectsVideo
				text2="ORTHO AI VISION"
				text1="AI VISION"
				src2="/kriss-video-2.mp4"
				src1="/kriss-video-1.mp4"
				link1="/our-work/reduce-patient-anxiety"
				link2="/our-work/reduce-patient-anxiety"
			/>
			<DenchatFooter src="/footer_pic.jpg" main={true} />
		</div>
	);
};

export default page;
