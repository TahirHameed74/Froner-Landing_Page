import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
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
        productName="REACH"
        src="https://images.ctfassets.net/d9627l0amdl4/NooULgd4lUZo6leVRVQQU/425ff72ac41a1f354cda2886ae126cf6/Reach_Stationerysm.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
      <ServiceImage
        src="https://images.ctfassets.net/d9627l0amdl4/3AgCaU4zDAmJuV6uct0wKs/75f4b56d63800172ee97c80d48ecbf0c/Reach_2.jpg?h=1400&q=80&&fm=webp&q=80"
        service="STRATEGY + BRANDING"
      />
      <div className="lg:h-[70vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-3xl ">BRINGING</h1>
          <p className="lg:text-7xl md:text-5xl text-2xl ">WELLNESS</p>
          <p className="lg:text-7xl md:text-5xl text-2xl ">TO LIGHT</p>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          Reach is Gantri’s in-house lighting line, thoughtfully designed to
          support mindful at-home experiences. They came to us to establish an
          identity for Reach that fully expressed the idea of designing lighting
          for human wellness.
        </h1>
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/2rkVdgfY4MW20PDzftKISM/b6a11661a6779ee494de909398500c6b/reach_3.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ProjectCard
        desc="Here’s how: Guided by our strategy, we explored light as a bridge between physical and emotional spaces, influencing the way we see our world. Guided by our strategy, we brought warmth, personality and character to clean design throughout the brand suite. The custom letterforms we created for the logomark feel friendly, taking aesthetic cues from the lighting designs themselves. We evoked the diffusion of light through a space in the submark and graphic patterns. And we activated a modern muted palette with a vibrant pop of yellow, conveying the wellness and warmth of Reach lighting. Thoughtful and warm, rather than overly technical, our messaging speaks to beautiful lighting design improves experiences and shapes healthier humans."
        src="https://images.ctfassets.net/d9627l0amdl4/6mgfkxIgywVQbEGsfmlymr/5e278bdc5ec920b9c2bc2659ca80c747/Reach_4.jpg?h=1463&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/70x0HASVrR15VPyvQ864aM/d4a27d649fca68ae67d5fb6092727f63/reach_5_gif.gif?&q=80" />
      <div className="lg:h-[70vh] mb-10 h-[30vh] justify-between flex flex-col lg:w-[50%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-3xl ">
            Quality Of Life.
          </h1>
          <p className="lg:text-7xl md:text-5xl text-2xl ">Quality Of Light.</p>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          REACH CRAFTS LIGHTING THAT CREATES MINDFUL ENVIRONMENTS TO SUPPORT
          WELLBEING.
        </h1>
      </div>
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/4JD3DYNrzSlSSyIScxgowr/027526587159694d0152815b805fa8cc/Reach_7.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/4JD3DYNrzSlSSyIScxgowr/027526587159694d0152815b805fa8cc/Reach_7.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
        // src1="https://images.ctfassets.net/d9627l0amdl4/2x2p6g57HFMKA6v2VymuXE/996481075b5f8f4a2a66c838fde72b4f/Reach_6.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/2kyrAn4n1CpfJZgkqLoZ0k/4ed565c99c002a8a8afc5d8f2d6aca47/Reach_8.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/1zEhmjH9Iroge85UnQbJ8d/0f1ae23ab2dbc3f820a06a6b86f31777/reach_9.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />

      <Image src="https://images.ctfassets.net/d9627l0amdl4/1V6UkJwZrUPPNm8BOGs8ms/f9695e77805c8255fe4904ddb00b43d5/reach_10.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/73SRxaxv61jQS1dJNegU7/049a0b1f3b4e9b01900f71588565eb58/Reach_Single_Box_Iso.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <div
        className={
          "md:w-[90%] mb-6 mt-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 lg:w-[80%] w-[95%] flex items-center flex-col mx-auto h-full"
        }
      >
        <img
          className="lg:h-[900px] w-full object-cover   "
          src="https://images.ctfassets.net/d9627l0amdl4/7tyZ1LP01rLUEXRoGbniah/77104bda2e04ca06b8015b098e6431e3/Reach_Single_Business_Card2.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
        />
      </div>
      <NextProjects
        link2="/our-work/wenatal"
        link1="/our-work/hey-jane"
        text2="WENATAL"
        text1="HEY JANE"
        src2="https://images.ctfassets.net/d9627l0amdl4/5L5G9H1Ly1UF4f5Uk7Y8np/3d9599afdef5484a1d840808433e1581/wenatal_hero__1_.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/6A8NeHamOQkpbW14HnqjiK/bc69f5adcc6e5e847d83dff1a299d39d/hey_jane.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/6EzaP0IRkBDrHgmwnoUKmJ/5633f6096331396b42a540ed9992583b/reachfooter.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
