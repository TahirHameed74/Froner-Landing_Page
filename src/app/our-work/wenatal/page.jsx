import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import LargeImage from "../../../../components/inividualPage/LargeImage";
import Image from "../../../../components/inividualPage/Image";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";

const page = () => {
  return (
    <div>
      <MainBanner
        productName="WENATAL"
        src="https://images.ctfassets.net/d9627l0amdl4/5L5G9H1Ly1UF4f5Uk7Y8np/3d9599afdef5484a1d840808433e1581/wenatal_hero__1_.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
      <ServiceImage
        src="https://images.ctfassets.net/d9627l0amdl4/2gacXLk5Y6bKiLIwui4rEF/9378f46db146f7a2ed128b6030e7b8af/holdingjar_copy.jpg?h=1400&q=80&&fm=webp&q=80"
        service="BRANDING + PACKAGING"
      />
      <AnimatedQuotes
        topQuote="ME TO"
        bottomQuote="WeNatal is the first brand to create prenatal supplements for both men and women, bringing clinically proven nutrients together in the right doses to make both parents healthier. We helped bring their “better together” brand to life by balancing elevation, warmth and expertise."
        midText="We"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5khc2dfmdZk1MFXfLpAVpw/06615e856761d4ec8d47e9aca2ba8639/wenatal_3.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ProjectCard
        desc="Here’s How: For the logomark, we accentuated the + sign in the letterforms as a visual metaphor representing many things: a positive pregnancy test and new addition to the family, bringing two people together, and changing the conversation around fertility from Me to We. The submark symbolizes both sides of the pregnancy equation—sperm count for him and generative strength for her. Our packaging design tells a full story when His and Hers supplements come together, with design elements that complete each other when placed side-by-side, expressing the brand ethos."
        video="https://videos.ctfassets.net/d9627l0amdl4/6rKjrNLNA39nL7PDzcnkmv/0c52a215ce58db4af8530c9a0b46ae8e/WN_Video_him.mp4"
      />
      <div className=" lg:w-full w-full md:h-[410px] h-[200px] lg:h-[900px]  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/31oknXasXJcCCPxtyEjXII/f04ffd4a972b0d38c18aa934d890db37/Wenatal_5_Gif-1.m4v"
          />
        </video>
      </div>
      <div className="lg:h-[70vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-3xl ">Better</h1>
          <p className="lg:text-7xl md:text-5xl text-2xl ">Together</p>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          WENATAL REIMAGINES FERTILITY TO MAKE HEALTHY PREGNANCY A TEAM EFFORT.
        </h1>
      </div>
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/1Zc9vtUr1IfmQ7HkcGOZjh/7cca9c2a4287afba7d7bb344b6c92740/wenatal_7.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/3FgpJM5m915LExP8rRdTf7/a15d34f82e469164b2853a3bb58450e0/wenatal_6.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <div className="w-full h-full  mx-auto">
        <img
          className="lg:h-[700px] h-[200px] md:h-[500px] lg:w-[70%] w-full  mx-auto "
          src="https://images.ctfassets.net/d9627l0amdl4/4a2ezmVpMsQsPkyubz5mzZ/54bcb2c68cead71fb606c4a353ceb36f/wenatal_9.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
        />
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/6yO3LjALabt9wQRDiL4zia/f98889fe5e469e47aeb9a46d30290dc0/wenatal-10.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/2ThQGgTatxf5V6GS1rElVf/46aa6774321bac31324782d5e8228b04/shippingoutside.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/3gl5kUjbLIAgtWpD0hf4Pz/1a0ebda4438e06af0b69a72d114d482f/jars.gif?&q=80" />
      <NextProjects
        text1="WALLY"
        text2="WILDING"
        link2="/our-work/wilding"
        link1="/our-work/wally"
        src2="https://images.ctfassets.net/d9627l0amdl4/valm5l7P0SY2cMh26afCW/d50b72b630acc6bfbb7a41bb3a04d19e/16_b.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/6y5ngUEfDl7jxlP2lhNX5S/f53659b45a76e607da3930746cb5063f/Wally_part02_image_VF3.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/4uS5NXmPy6qn1QF8PjhMrl/5c26fd8e15400ff665ac142af9b5eb8c/wnfooter.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
