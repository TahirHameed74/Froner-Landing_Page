import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import Image from "../../../../components/inividualPage/Image";
import AnimatedQuote from "../../../../components/inividualPage/AnimatedQuote";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import LargeImage from "../../../../components/inividualPage/LargeImage";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";

const page = () => {
  return (
    <div>
      <MainBanner
        src="https://images.ctfassets.net/d9627l0amdl4/4T6ufSL8sLx3CBoLRXj0os/f76ac6c7d3aa722fd052e768d5d6e821/l-avant_hero.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
        productName="L'AVANT"
      />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/2Uc63kucsuqQtE115f9QJv/57e7ace386fbac11b5bffbf3566481e6/l-avant_2.jpg?h=1400&q=80&&fm=webp&q=80" />
      <AnimatedQuotes
        bottomQuote="L’Avant came to us to brand their line of sustainable, skin-soothing cleaning products. To resonate with their audience and communicate their ethos, they needed a considered down-to-the-last-detail identity coupled with eco-conscious packaging. We created a beautiful brand system, considered from every angle, that elevates the everyday."
        midText="Products For The High Quality Home."
        topQuote="PLANT BASED"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5WkJoa11mNyDCerdZIfzKt/dbec89ca196701fc95b01f5229576164/l-avant_3.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ProjectCard
        desc="Here’s how: We paired sophisticated typography and a modern minimalist aesthetic with touches of gold foil and texture that communicate the ultimate consideration. For the packaging, we created a sustainable system of refillable textured glass bottles and replacement vessels. And carried texture into the outer packaging as well, with print techniques and details that make the line pleasurable to use and lovely to behold."
        src="https://images.ctfassets.net/d9627l0amdl4/6jzPS5oMPXVmjPuqqYzPiP/6a908c7b29688b3ef2f65cc97d950bcb/l-avant_4.jpg?h=1463&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/lZDJ1AsJG8xNmUQef4XoM/437a26d771bf5822206c19c5e12d0ef2/l-avant_5.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <div className="lg:h-[60vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-3xl ">
            Beautiful Systems Are Sustainable.
          </h1>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          WITH A BEAUTIFUL COLLECTION, L’AVANT MAKES CLEANING MORE ENJOYABLE AND
          SUSTAINABLE.
        </h1>
      </div>
      <SideBySide
        src1="https://images.ctfassets.net/d9627l0amdl4/3764BUcHxDU7EHylEC6SST/3e0221ae133083979f8fd1827941e4cc/l-avant_6.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src2="https://images.ctfassets.net/d9627l0amdl4/3OT7zl9w7mY00n7vj9HroD/ff1a8091dc80ffd186d9ae0d2aa4df1c/l-avant_7.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/11thkFVRFxultdDqDeKQTz/e37b3a86702c876f60e129411bb5204b/Booklet_Deomino_1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <div className=" lg:w-[70%] w-full md:h-[410px] h-[200px] mt-5 lg:h-[600px]  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/57ZMxpRjfXBHBflzkXvQ0Q/f32901321e118135aabd323bfcd1cafa/logoanimation.mp4"
          />
        </video>
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/47oWT4RB7ZuJroELdfxTF4/0892fbb131857725f9a59b34584b1c6e/4.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <LargeImage src="https://images.ctfassets.net/d9627l0amdl4/6dUqRTyus1a756qj9sT1Tj/ec18ad56fd60ef4c881d3b769c9a784d/CarinaSkrobeckiPhoto_LavantCollective_ProductLaunchShoot_69Edited.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/4kwtr2I5DeC1DLOUtzUrm4/a21f046ec8149b6513043c5e6aecb11e/3.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <NextProjects
        text2="NERANESE"
        text1="WILDING"
        src1="https://images.ctfassets.net/d9627l0amdl4/valm5l7P0SY2cMh26afCW/d50b72b630acc6bfbb7a41bb3a04d19e/16_b.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src2="https://images.ctfassets.net/d9627l0amdl4/2Oq74UMbTuRWB8QAYqyMZv/dec220c92a08550e7f45bcc0241e7642/NERANESE_CAMPAIGN_STONE_JUMPSUIT_BLACK_3__1_.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
        link1="/our-work/wilding"
        link2="/our-work/nernese"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/7sTj5XFf13j4QnkN1zTDtO/d456dec8ec1e556aae6118c52bab6df9/lavantfooter.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
