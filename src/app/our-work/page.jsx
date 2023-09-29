import React from "react";
import OurWorkCard from "../../../components/OurWorkCard";
import AboutFlyer from "../../../components/AboutFlyer";
import OurWorkFlyer from "../../../components/OurWorkFlyer1";
import Footer from "../../../components/Footer";

const page = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative">
        <div className="lg:h-[1500px]   overflow-hidden h-screen w-full">
          <img
            className=" image_studio h-full w-full object-cover"
            src="/image-brand-1.webp"
          />
        </div>
        <div className=" h-full items-center justify-center flex">
          <OurWorkFlyer
            mainHeading="Soto"
            midText="new"
            src="/jars.gif"
            bottomText="Branding + Packaging"
          />
        </div>
      </div>
      <div>
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
        <OurWorkCard />
      </div>
      <div className="relative">
        <div className="lg:h-[1800px]   overflow-hidden h-screen w-full">
          <img
            className=" image_studio h-full w-full object-cover"
            src="/wenatal-hero.webp"
          />
        </div>
        <div className=" h-full items-center justify-center flex">
          <OurWorkFlyer
            mainHeading="WeNatal"
            midText="16"
            src="/jars.gif"
            bottomText="Branding + Packaging"
          />
        </div>
      </div>
      <Footer src="/ow-footer.webp" main={true} />
    </div>
  );
};

export default page;
