import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import OurWorkCard from "../../../../components/OurWorkCard";
import AnimatedQuote from "../../../../components/inividualPage/AnimatedQuote";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import NextProjectsVideo from "../../../../components/inividualPage/NextProjectVideo";
import Footer from "../../../../components/Footer";
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
			<ServiceImage
				service=" Dental Listing + Dental Tourism + Dental Chat "
				src="https://images.ctfassets.net/d9627l0amdl4/in3Cg9HcINf41QPdsD2Bj/fb0582044fe2f25f007de5d9fe9ff94a/3b.jpg?h=1100&q=80&&fm=webp&q=80"
			/>
			<AnimatedQuotes
				topQuote="FOR HIGHLY

"
				midText="Considered Skin"
				bottomQuote="CauseMedic creates luxurious CBD experiences that restore health to skin, body and state of mind. Highly hands on, they take to the farm, field, lab and spa to bring each treatment sustainably all the way from seed and soil to soak and serum. They came to us to represent their mindful process and forward-thinking therapies with an identity that works equally well for luxury hotel spa and DTC audiences."
			/>
			<MainBanner src="https://images.ctfassets.net/d9627l0amdl4/5bm3si2to4bQfJ6ZflrIIX/ba9693575313dae7dbc48614e34206f8/3_copy2.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
			<div className="flex">
				<div className="relative w-1/2 ">
					<div className="">
						<p className="absolute bottom-10 w-4/5 ml-10 text-sm ">
							Here’s How: In strategy, we positioned CauseMedic as bringing
							luxury into the wellness era, summed up by the tagline Truly
							Transformative. Then, we brought this ethos to a logomark that
							balances luxury and modern sensibilities. For the submark, we used
							delicate linework to bring a modern, clean twist to a
							heritage-style mark. And we gave the suite an ownable motif: an
							organic leaf encircled by an elegant ring of gold, symbolizing
							mindful luxury, to set in motion in digital layouts. Rich colors,
							textured materials, thoughtful messaging and clean design give the
							packaging suite a bold, elevated presence. UX, dev, design and
							copy come together in a full e-commerce site that houses
							everything CauseMedic.
						</p>
					</div>
				</div>
				<div className="w-1/2">
					<video data-v-fb727ca2="" id="video" autoPlay loop muted playsInline>
						<source
							data-v-fb727ca2=""
							src="https://videos.ctfassets.net/d9627l0amdl4/3M9Vq3VIVYBWgXcIvmBH1p/ea590d9f0ceb7409b4d3bc969bd97f43/Leafanimation2.mp4"
							type="video/mp4"
						/>
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
			<BigVideo srcMob="/pink_tooth.mp4" srcDesk="/pink_tooth.mp4" />
			<BigVideo srcMob="/kriss-video-22.mp4" srcDesk="/kriss-video-22.mp4" />
			<SideBySide src2="/two_docs.jpg" src1="/one_doc_patient.jpg" />
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/5C8ldeZnz7OZ5fSNqbm6iQ/35eb6ed1dcb32ae6962cb2cb4ab732c9/cause-medic-submark.gif?&q=80" /> */}
			{/* <MainBanner src="https://images.ctfassets.net/d9627l0amdl4/3gE9CNsrSeSSwAWqRkGHYg/e4738c8170f73751c94ecef3aacdf7ba/nav2.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/6l3QnhMlPHX37KwrpnaEOm/3cbf57373f8fc07e7920a4223be96271/box_stack.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <MainBanner src="https://images.ctfassets.net/d9627l0amdl4/14jg1F9owspBiW1LM7dZy2/0fe68f08eca33cbdc7aa6ee684808293/7.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/18EGnpklt05dF1m7sQGGP9/c7578420d010ee796ddb72cbfb2d3c95/Layout1.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			{/* <Image src="https://images.ctfassets.net/d9627l0amdl4/1w6Dtsel9Skv0s37EeYeS3/babc166472b4e41948e5982a1885f0e4/3.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" /> */}
			<NextProjectsVideo
				text2="WENATAL"
				text1="L'AVANT"
				src2="https://images.ctfassets.net/d9627l0amdl4/5L5G9H1Ly1UF4f5Uk7Y8np/3d9599afdef5484a1d840808433e1581/wenatal_hero__1_.jpg?h=540&w=1000&q=80&fit=fill&&fm=webp&q=80"
				src1="https://images.ctfassets.net/d9627l0amdl4/2LkxyOpNg28sZi6w07o7Gl/2bf237df5591b2670296cf4e2f7cf569/lavant.jpg?h=700&w=1000&q=80&fit=fill&&fm=webp&q=80"
				link1="/our-work/reduce-patient-anxiety"
				link2="/our-work/reduce-patient-anxiety"
			/>
			<Footer src="/footer_pic.jpg" main={true} />
		</div>
	);
};

export default page;
