import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import Image from "../../../../components/inividualPage/Image";
import LargeImage from "../../../../components/inividualPage/LargeImage";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";

const page = () => {
  return (
    <div>
      <MainBanner
        productName="SOUNDMINT"
        src="https://images.ctfassets.net/d9627l0amdl4/Vw8othvZMpobJIi7ISyYi/43f2394b4d8dfe8c56f05e5be3327104/Laptop_2.jpg?h=1980&w=2200&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ServiceImage
        service="BRANDING + PACKAGING"
        src="https://images.ctfassets.net/d9627l0amdl4/1XzXnRNL1OWOy2U24zNcTB/9759d326803f52f9d21fbdeecb1b8b16/cover.jpg?h=1400&q=80&&&fl=progressive&q=80"
      />
      <AnimatedQuotes
        bottomQuote="Soundmint is a platform and marketplace reimagining how vinyl is collected for artists and fans. They came to Forner to create a bold identity and premium packaging system for their limited edition releases, creating an unboxing experience that elevates each piece to a rare collectible."
        midText="Of Vinyl"
        topQuote="THE FUTURE"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/6vzfO5uPi0OVj08VdDTiLk/2a65a6cafb90894f5fd79880b7b98486/grid2.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ProjectCard
        desc="Here’s How: The identity brings to life the feeling of music with shapes and patterns that reverberate and ripple, referencing vintage recording gear and interfaces. The S icon resembles an abstract sparkle to represent the “minting” of collectible vinyl releases. We gave the packaging an elevated, archival feel with release dates and numbers designed to resemble a song’s run time and circular type treatments that reference record label stickers. The unboxing experience is considered at every step with a multifaceted, layered and tactile approach that enhances the premium feel. Mimicking the opening of a record player cover, the box transforms into a gallery display to showcase album artwork."
        video="https://videos.ctfassets.net/d9627l0amdl4/8SSTaoPMkeeGYw94CW6hI/5f107dac13b1a3e646dd0e3e5e9f07a0/SoundmintAnim_2K_LensDistortion__1_.mp4"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5UFt9GJRv1N4l4OEPJJwh5/686a062d17ef59b9e5185deb7cc40fb3/OOH.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <AnimatedQuotes
        bottomQuote="SOUNDMINT IS A PLATFORM THAT CONNECTS ARTISTS AND FANS IN THE CULTURE OF VINYL COLLECTION."
        midText="Reimagined."
        topQuote="Collecting Music,"
      />
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/pPKPE1vCzHVKFvBrBCinW/cf65a8661e473876e72ce9e3229c02bd/brushbox.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/LLV8RQdCsGvPyvhpUXx4X/549b3441582d23080829ed21a8c2016c/recordbrush.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/1zQGJaQWqVesKTkCUahR3G/bd1ebf4388adef5fb97bb32cdb0a47bc/boxfront.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <div
        className={
          "md:w-[90%] mb-6 mt-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 lg:w-[80%] w-[95%] flex items-center flex-col mx-auto h-full"
        }
      >
        <img
          className="lg:h-[1200px] object-cover   "
          src="https://images.ctfassets.net/d9627l0amdl4/IVSwEzwZevykglRyFg6N6/0c5d9aaf114139d759426edfad2e6870/boxdisplay.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80"
        />
      </div>
      <div className=" lg:w-[100%] w-full md:h-[410px] h-[200px] lg:h-[900px]  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/y18L58bY1daDZkTZ4BfsQ/650a364d1feb53c26ba2e702478c108b/layout_comp_final.mp4"
          />
        </video>
      </div>
      <Image src="https://images.ctfassets.net/d9627l0amdl4/6ltzOzpMey3ZJpAz0Gbfo0/7b86ec30e5e69f87c406aa52093b8692/businesscard.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/44NAkT1vO00pPXgmL4s1Y5/df6ac4e9f22e002aa41feacbe4c9899d/double.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <div className=" lg:w-[100%] w-full md:h-[410px] h-[200px] lg:h-screen  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/6coADPTtBB2dAB6Y5Msncf/388e582d848bafea463d0d01f1043cb8/fulllogo_text_1_transparent.mp4"
          />
        </video>
      </div>
      <LargeImage src="https://images.ctfassets.net/d9627l0amdl4/6ijAhSAKQOvrT2IgTSeKZC/619b694dd820abb2949105dfedf4a4d9/newsprint.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <div className="w-full mt-5 h-full">
        <div className=" lg:h-[1200px] md:h-[500px] h-[200px]  object-contain overflow-hidden">
          <img
            className={`image h-full  w-full object-cover`}
            src="https://images.ctfassets.net/d9627l0amdl4/5mXvZsy8xZQ3nL3SfD8Gij/b8c920a45f37f2a7b1aa1f4e4be6dff0/shippingbox.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
          />
        </div>
      </div>
      <div className=" lg:w-[80%] mt-10 w-full md:h-[410px] h-[200px] lg:h-[800px]  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/1ktjG7XCymzphX5ARHN5BH/4b29f450dc7b84f842f9ff7d7a0d93ba/logo2.mp4"
          />
        </video>
      </div>
      <NextProjects
        link2="/our-work/wally"
        text2="WALLY"
        src2="https://images.ctfassets.net/d9627l0amdl4/6y5ngUEfDl7jxlP2lhNX5S/f53659b45a76e607da3930746cb5063f/Wally_part02_image_VF3.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/5XVLBeXgxjw65qHv5VFkSQ/8f430aa01b8f2936a7ea49392fcb501a/homepage_soto__1_.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
        link1="/our-work/soto"
        text1="SOTO"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/10Ed34ENHiu7UtfEEdqutf/44840a3493f434a9c215d9b67e2e3a80/soundmintfooter.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
