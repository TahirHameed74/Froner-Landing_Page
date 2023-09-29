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
        productName="WALLY"
        src="https://images.ctfassets.net/d9627l0amdl4/6y5ngUEfDl7jxlP2lhNX5S/f53659b45a76e607da3930746cb5063f/Wally_part02_image_VF3.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
      <ServiceImage
        service="STRATEGY + BRANDING + PACKAGING + WEBSITE"
        src="https://images.ctfassets.net/d9627l0amdl4/73SfhvA8UhxrxpgclO2qFD/f2cdcc66496c31cd8aebae8c6db1c8e1/box1.gif?&q=80"
      />
      <AnimatedQuotes
        bottomQuote="Wally came to us with a bold plan—reimagining dental care end-to-end to make it smarter, more effective, affordable and enjoyable. With virtual custom care from the comfort of home and a curated product box built for your mouth only, Wally At Home helps you create a routine that really works, on your terms. We also helped them brand their in-studio service, Care by Wally, with unlimited in-person cleaning, whitening and more in NYC."
        midText="Mouth."
        topQuote="BE A SMART"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/3DAUe0Mu388NqSPQFvLxrQ/ddedcf49f35d706bce6881eec7a3efa6/wally1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ProjectCard
        desc="Here’s How: We positioned Wally as A Better Way to a Brighter Smile. In messaging, we expressed an irreverent personality, technology-driven style and disruptive mission in the tagline Be a Smart Mouth. To bring our strategy to life, we developed a visual identity with a bright and refreshing feel, pushing thoughtful design to a vibrant, poppy place. Our logomark feels bold yet friendly, with a subtle smile in the Y. We selected a fresh palette with patterns that highlight the way oral care tools like (toothpaste, floss and brush bristles) resemble W’s. Photography choices that feel approachable, joyful and modern support the design. As does animation that adds energy and dynamism to the brand. Together, the full ecosystem conveys the bold ethos and innovative vision of Wally."
        src="https://images.ctfassets.net/d9627l0amdl4/2UmFCOVMaiT3yazoMYqW8b/1686997dc0cb49dd77a0eef4e706d9c4/Wally_4.jpg?h=1463&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
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
            src="https://videos.ctfassets.net/d9627l0amdl4/5APbLMbLX2s0vZGyEssdWT/8f1735fac91b354b87598e15074c0efd/wallylogo__1_.mp4"
          />
        </video>
      </div>
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/6Km9Pb36nmEUDA1lhMqiwO/8eff41540f452718f0cb4d1375ba0f87/Boxes.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <div className="lg:h-[70vh] mb-10 h-[30vh] lg:mt-20 md:mt-10 mt-5 justify-between flex flex-col lg:w-[80%] w-[95%] md:w-[70%] mx-auto ">
        <div className="text-center flex flex-col items-center justify-center font-semibold ">
          <h1 className="lg:text-8xl md:text-6xl text-center items-center justify-center flex text-3xl ">
            Redesigning Dental For A Truly Fresh Feeling.
          </h1>
        </div>
        <h1 className=" text-xs md:text-sm lg:text-base text-center">
          WALLY IS REIMAGINING DENTAL CARE END-TO-END TO BRIGHTEN YOUR SMILE,
          IMPROVE YOUR HEALTH AND BLOW YOUR MIND.
        </h1>
      </div>
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/6C5s3ujqHAO628AmDPgjLs/b43c0e86d94cf36f316d3711bdbf8229/ezgif.com-gif-maker__8_.gif?&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/4x5ddnEZqInsUTh4bE4im1/31598ec2aa7db609902b9f96aec26698/ezgif.com-gif-maker__1_.gif?&q=80"
      />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/2zm4ojz8fQe8nL1Fyv4HwC/1126d9056049a8dcab2e423269b56715/Wally_anim_submark_1.gif?&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5cxHNtZP7tOyFVAWcxCITk/4ae8cd94d6d33e879a1aa6b15c232222/social.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/3nQ7ayxo8K2aWbVfQaOYnR/eda453ed7559a1e4f594f8ab09db7b82/Wally_anim_type_unlimited_cleaning_02-_1_.gif?&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/1tcK4s2UVYEtohIIuVuzOu/2a1dc6832d0dac20ff3ec3c17866763e/Screen_Shot_2023-07-06_at_3.37.56_PM.png?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5evuDykRdlvfuYtxcIqvEL/c2301698c3249c3fd8c6a79cc8cc300b/rooms2.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/3pCuB8V2ZlmMJPUWdumk0h/4cfceb66ce580d9037147cf712d115dc/tote1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/I19TVEod1I39Yx840jUvX/09f132ad1121799976639c1f0439c7cb/Wally_anim_tagline.gif?&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/4ZE4OVVx8FI5bGtkeJ6wME/1357c1a3060c128a628c6cfd12adc8b4/Flat_Postcard_Mockup_new.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/3UiJDXjKpI4c48odri6phD/8eaffed104d090da532c54581f530e8c/Wally_anim_toothpastepattern.gif?&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5zIV1zGhW0zGIAxNOZIi3p/bdae06cc9e9cb1b58e343262728bc107/wally2.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/51yjXX2SmyLjmMYRV2YhiK/31c977fefba49b4dcbac257312e88d5f/paper-tube.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <NextProjects
        link1="/our-work/lamaria"
        text1="LAMARIA"
        text2="HOMECOMING"
        link2="/our-work/homecoming"
        src2="https://images.ctfassets.net/d9627l0amdl4/50UqXbJTRq14d8UuDTHdFd/5db23802797ba31e13e5e223f6e08aa8/1_copy2.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/3va0JItFjdmFWNYB9SxEIy/570f26c4c61e6612e79a1dc448c64d95/rendering1.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/7458nOY15iaWjP1g9L7j6V/382dc0c6072baf4cb2222735937b44b4/wallyfooter.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
