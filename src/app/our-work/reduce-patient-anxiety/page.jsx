import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import OurWorkCard from "../../../../components/OurWorkCard";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import AnimatedQuote from "../../../../components/inividualPage/AnimatedQuote";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import SideBySideVideo from "../../../../components/inividualPage/SideBySideVideo";
import Image from "../../../../components/inividualPage/Image";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";

const page = () => {
  return (
    <div>
      <MainBanner
        productName="FIG & THISTLE"
        src="https://images.ctfassets.net/d9627l0amdl4/2f2BEa5APhgbRpEuBw6Bhl/e00e9dc295370034f03b8ac7bf96b40a/2b_copy.jpg?h=1980&w=2200&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ServiceImage
        service="BRANDING + PACKAGING"
        src="https://images.ctfassets.net/d9627l0amdl4/5P16Kl3FS5gROVkFUeuWH/b80f499835b0c8cad0d0d41950da518d/new-size-logo2.gif?&q=80"
      />
      <div className="lg:h-[50vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-3xl ">PLEASURES FOR </h1>
          <p className="lg:text-7xl md:text-5xl text-2xl ">The People</p>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          Fig + Thistle is a neighborhood cannabis shop and wine bar in San
          Francisco’s Hayes Valley. They came to Forner to unify their sister
          spaces with a single brand identity that would encompass both
          businesses.
        </h1>
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/4TNi3lBfmYY0qdgp65yayq/5ba25aec9b3ce78419b55b2d5c95a6de/1.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ProjectCard
        desc="Here’s How: In strategy, we united the cannabis shop and wine bar through a common goal: moments of relaxation and enjoyment, captured by the tagline Pleasures for the People. By supporting the discovery of pleasures, Fig + Thistle invites Hayes Valley to enjoy more fully and to celebrate the connections that wine, food and flower bring. We explored the concept of dynamic duos with a type juxtaposition in the logomark, and by selecting the ampersand for the brand submark, which we also used as a graphic device. Then we paired other memorable couplings in color, type and layout, as well as messaging, throughout the suite. Animation plays with themes of coming together in joyful combinations, while print and packaging partner fun type treatments with elevated textures, forms and finishes."
        src="https://downloads.ctfassets.net/d9627l0amdl4/7j2qgEwLWEPRagwEhnbuS1/324d5f8632a78099005e6f0ab866cb99/matchbook.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/4husPdO1JUTr1ghBgYQSGX/992d4a1e12bad875563db3dd386b0b4e/4_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <AnimatedQuotes
        bottomQuote="FIG + THISTLE BRINGS WINE AND WEED TOGETHER IN HAYES VALLEY FOR YOUR TASTING, TOKING AND TOASTING PLEASURE."
        topQuote="Enjoy Yourself
Fully."
      />
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/3QYxJNDY4sVR7V41rhNMPC/877a7506044c520134c931b01b06e6e0/8_copy.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/1YjCvYRLQBydjIlGLyBttT/06e81ef0dec4929c596ca1186b3b3020/3.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/2gHQGcSvB0IUX06gh6bPY1/843706ff1d0582e0c3be5755b3cc0050/layout.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <div className="w-full h-full">
        <video
          className="w-full h-[200px] md:h-[270px] lg:h-screen object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/7wPxGc5yObxQTW4ysyHu1f/b9271f6bc40ed0006c7f32b8904f75af/layout_photo_comp.mp4"
          />
        </video>
      </div>

      <Image src="https://images.ctfassets.net/d9627l0amdl4/pdWJNwEoiBjRBUVV14T2S/98323132c7eead0c889a37c593fd5897/5_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/2gbEXlHTPcdSNr8XXxOnJn/62bd1dd2a21210b785621ce6bd95b650/3_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <div
        className={
          "md:w-[90%] mb-6 mt-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 lg:w-[80%] w-[95%] flex items-center flex-col mx-auto h-full"
        }
      >
        <img
          className="lg:h-[900px] object-cover   "
          src="https://images.ctfassets.net/d9627l0amdl4/6tkrChQI0YVEBEcOgxVEzf/a414f5699718dacb08aebb915e31f5a0/1.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80"
        />
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/JZ84TbCH4TCDce20TuWuW/4a94abc013373d03ec38288ffd6448d2/tote.gif?&q=80" />
      <div className="lg:h-screen md:h-[50vh] mx-auto flex h-[42vh] items-center gap-3 justify-center ">
        <div className="object-cover overflow-hidden">
          <img
            className="lg:h-[400px] h-[150px] "
            src="https://images.ctfassets.net/d9627l0amdl4/2cxv4Qcy61oN2WQnP6kLlZ/5e21d96603215d3c751043d5760d3b20/12_copy.jpg?h=575&w=500&q=80&fit=fill&&&fl=progressive&q=80"
          />
        </div>
        <div className="object-cover overflow-hidden ">
          <img
            className="lg:h-[400px] h-[150px] "
            src="https://images.ctfassets.net/d9627l0amdl4/2cxv4Qcy61oN2WQnP6kLlZ/5e21d96603215d3c751043d5760d3b20/12_copy.jpg?h=575&w=500&q=80&fit=fill&&&fl=progressive&q=80"
          />
        </div>
      </div>
      <div className=" lg:w-[80%] w-full md:h-[410px] h-[200px] lg:h-[900px]  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/6N8jyy7uW4AW6vx2eYm7LL/f02ed99f56ca08f58c99162a95544b2b/statements_fig_draft3.mp4"
          />
        </video>
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/1CEv7SMPSbeMqXz8V635P1/6a39525c6620acb31c0d8253000706dc/ooh1_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <Image src="https://downloads.ctfassets.net/d9627l0amdl4/7j2qgEwLWEPRagwEhnbuS1/324d5f8632a78099005e6f0ab866cb99/matchbook.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5fpvdQtlPqjOEzYGlmqVO9/0cbe4f68c7da0fffb039df3907a407f3/6_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/3mxjHYHqZw9772Z3KxdpkO/97ce5f7a74b617e25428c92979349253/posters_layout-HD__1_.gif?&q=80" />
      <NextProjects
        link2="/our-work/nymble"
        link1="/our-work/soundmint"
        text2="NYMBLE"
        text1="SOUNDMINT"
        src2="https://images.ctfassets.net/d9627l0amdl4/PrkVwEczcjam7ucPXHBJK/799ceef251e59538c550893fc8f381f4/4.jpg?h=702&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/5RRJRzYmtPBeqMOpuEiUxM/c28a21b54410b1e8a3026194e64d6b1f/boxgrid.jpg?h=910&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/dX0XEFMQ63qxU05711dHK/ee35e01bd0fd008d8972debfd66a8afd/figfooter.jpg?h=2200&w=2200&q=80&fit=fill&&&fl=progressive&q=80"
      />
    </div>
  );
};

export default page;
