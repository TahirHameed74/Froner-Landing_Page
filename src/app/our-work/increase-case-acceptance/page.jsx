import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import LargeImage from "../../../../components/inividualPage/LargeImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import Image from "../../../../components/inividualPage/Image";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";

const page = () => {
  return (
    <div>
      <MainBanner
        productName="SOTO"
        src="https://images.ctfassets.net/d9627l0amdl4/5Nio1AzCqQGBmcO83kxiIK/9284e62838cdc44ab6ca89bb45989355/hero2.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
      <div className="lg:pt-20">
        <LargeImage src="https://images.ctfassets.net/d9627l0amdl4/2JPHdUUGjw5c7bD6ZDTMnb/9c80f836c96b9bc3a39b19e960bb02bf/2.jpg?h=1400&q=80&&fm=webp&q=80" />
      </div>
      <AnimatedQuotes
        bottomQuote="Soto is a design and engineering house that makes beautiful tools and materials for home improvement projects. They came to us to rebrand their suite of repair and design supplies, including paint, spackle and tools. We created a thoughtfully minimalist identity that feels warm, comfortable and inviting, just like home."
        midText="Residence."
        topQuote="ARTISTS IN"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/6pvqDkeKnbsyN78sA2HQ6f/46872a3dd15b62fe12e01c6e104a4471/9.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ProjectCard
        desc="Here’s how: In the strategy phase, we elevated Soto from a home improvement brand to a design house engineering beautiful tools for creative people. From there, we crafted the tagline Artists in Residence, to describe both the artistry of the brand and the audience. Guided by our strategy, we explored the relationship between people and spaces, creativity and change throughout the suite. The notion of change comes to life in design across the identity, from the simple square to circle shift in the logo’s “o” letterforms, to dynamic, flexible patterns, logo orientations and layouts. Inspired by the modernist simplicity of Massimo Vignelli and Bruno Munari, we crafted sturdy and thoughtful messaging with a warmly human perspective."
        src="https://images.ctfassets.net/d9627l0amdl4/49sMhz2forka33qnJbnHhO/c3f20feeedb2e5a2867e917593cfb57a/sidesoto.jpg?h=1463&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/1MwvvysafBRuAikHxYCH6r/0089560d82dd9dad42c720365c345e07/1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <div className="lg:h-[60vh] mb-10 h-[30vh] mt-10 justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-3xl ">
            Bring Creativity
          </h1>
          <p className="lg:text-7xl md:text-5xl text-2xl ">Home</p>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          SOTO CONSIDERS EVERY ASPECT OF YOUR EXPERIENCE TO PUT HOME REPAIR AND
          DESIGN SQUARELY IN YOUR WHEELHOUSE.
        </h1>
      </div>
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/1kh3GIKFzpE5Wx66AqZOsP/e5c2cae417cfcb10addf4fe413ce4950/5.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/1x0txBBfXrAL3YW3XvT4qH/c72332bf840afda34b8c4af72156447e/8.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/7BLSY1mZpSlAzzZsC2411t/04744b100e4783cd0a24be8964620e5b/16.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/15O7coLRWbipZon8tMWxFd/2a9aecc7f8fab3599c0f19fe41ebc514/17.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/HuS9ZoasiZAqTkZ7HPUzl/eabdddd0da50495e069c6059fe613759/18.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/7lk2ausiyc0cTazhAzkeoh/ed532837a9a7e0a5314d134c11043b7a/6.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/1ESKY9UX4DfibUpEw5D6S7/36c5686e3748e8ebd23eae150ece415e/15.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/2fqiNfqnCjtnfwRIbgPXt2/eb241b709c294d103b4955b2f3526cc5/13.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <NextProjects
        link2="/our-work/troop"
        src2="https://images.ctfassets.net/d9627l0amdl4/4wWHWYYg0ZYwVNXGoBAXTH/1284139afa250f118519354c11e622e3/prod_inner_hey_jane_desk__19_.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/3v6mOpA9ZmSAV2SyYcGRJ5/be2858b824909b28e5bcb0e7340d5669/Reach_Stationery2.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
        link1={"/our-work/reach"}
        text1="REACH"
        text2="TROOP"
      />
      <Footer
        main="true"
        src="https://images.ctfassets.net/d9627l0amdl4/25aXCarbRWsitIo0KEvZ8W/55ec375f5a940dfb7cffa6fe1fe06517/sotofooter2.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
