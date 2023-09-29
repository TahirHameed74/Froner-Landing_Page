import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import LargeImage from "../../../../components/inividualPage/LargeImage";
import Image from "../../../../components/inividualPage/Image";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import AnimatedQuote from "../../../../components/inividualPage/AnimatedQuote";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import BigVideo from "../../../../components/inividualPage/BigVideo";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";

const page = () => {
  return (
    <div>
      <MainBanner
        productName="LITTLEFOX"
        src="https://images.ctfassets.net/d9627l0amdl4/5yi87Bxi4ZtPLECsmiu2NN/e9263a22f3f8c5d202e44dde7cd0aa29/IMAGE11_profile.jpg?h=1980&w=2200&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ServiceImage
        service="BRANDING + PACKAGING"
        src="https://images.ctfassets.net/d9627l0amdl4/5w5QdNzwdCnrrwMVjB50NO/66eaa7eaeb485cfd37d9815e56329548/alllayout_sq.jpg?h=1400&q=80&&&fl=progressive&q=80"
      />
      <AnimatedQuotes
        topQuote="ALWAYS A TREAT."
        bottomQuote="Little Fox invited us to help their ice cream brand evolve as they transitioned from pop-up to parlor in Oceanside, CA. For their shop era, we created a deliciously different identity that celebrates the natural ingredients, from-scratch making and creative seasonal flavors that make Little Fox so delightful."
      />
      <ProjectCard
        desc="Here’s How: Very few businesses actually make their ice cream from scratch with great natural ingredients, let alone mix them into new & novel flavors. It’s a true labor of love that makes every scoop special. To highlight that, we positioned Little Fox as Deliciously Different, From Start to Finish. We spoke to the benefit of that difference with the tagline Always a Treat. And celebrated it in a distinctively drippy logomark that feels fun, fluid and bold. Then, we brought the Little Fox mascot to life in sweet storybook-style illustrations that express curiosity, anticipation and joy. We combined these elements to create a considered packaging suite destined for everyday indulgence and occasion treats, from cakes & tacos to cups & cones. From logo & tagline to signage & social, an unexpected palette, bold presence and small moments of surprise & delight make the Little Fox brand special, joyful and memorable."
        src="https://images.ctfassets.net/d9627l0amdl4/2opaX23a8OwBHMM2yRlUMP/8dee2641328c20a753651c8949430504/IMAGE04.jpg?h=1463&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/1jUcH50sXiYQqez46qwF4h/d98d5e76c2ca7982fac534fc59c86fcd/IMAGE10_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <div className="w-[75%] h-[30vh]  flex flex-col items-center justify-center lg:h-[75vh] mx-auto">
        <h1 className="text-center text-4xl md:text-6xl lg:text-9xl ">
          Deliciously
        </h1>
        <h1 className="text-center text-4xl md:text-6xl lg:text-9xl ">
          Different.
        </h1>
      </div>
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/4kuKRQuDtaIj2boBUdiVIe/19d29f5735596d2c1d0d66bd0bd46e40/IMAGE06__1__copy.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/4fdu5u6S6zag412bqKZY7C/1748057db6ce5fafa654434c9ea77de9/IMAGE05.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <img
        className="w-full "
        src="https://images.ctfassets.net/d9627l0amdl4/2y6OXdbSHUeJj1ZS4Bd0uJ/2844b4d50bc3594f019afaacec8e0dcd/comp-fox_HD2.gif?&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/5Mn2yxouZVBRYQj7jwEctp/1eaf89e61fd4c92807e061549cd5a816/IMAGE01_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/1NjxHueCL5pF3Zg6RgmuA6/179eb84d012caa56d467e80154f4eccf/social2.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/2i8QFP8RqwsARXXVtC5LjS/898296b5cd4671afe593ef18fe497cdb/sign1_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/7jaNHHeaxTSVTRzveDTLmB/42f43ea2967881f39f501423d751c568/IMAGE03_copy.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ProjectCard src="https://images.ctfassets.net/d9627l0amdl4/DKVE7tl11VfawdrknuDX2/4986ab650d56c2d738e7a1058c847975/IMAGE07_copy.jpg?h=1463&w=1300&q=80&fit=fill&&&fl=progressive&q=80" />
      <div
        className={
          "md:w-[90%] mb-5 mt-5 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 lg:w-[85%] w-[95%] flex items-center flex-col mx-auto h-full"
        }
      >
        <img className="lg:h-[1200px] object-cover" src="/image-brand-6.webp" />
      </div>
      <div className="h-full w-full ">
        <video
          className="w-screen lg:w-screen  lg:h-screen "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/7irMkZSHLqSCWYDH0USmVf/4e3c71c52a3c289369b62ab0d7111040/2b456eb2-716f-45cf-943c-5885de1609f9.mp4"
          />
        </video>
      </div>
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/1QoXys6x2mtBkR6XZA5Cbo/c964f9f818379959dfdf98158d14db87/IMAGE08_copy.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/1QoXys6x2mtBkR6XZA5Cbo/c964f9f818379959dfdf98158d14db87/IMAGE08_copy.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        // src1="https://images.ctfassets.net/d9627l0amdl4/1ed4oHt2UWr9Hm90nxvqXW/43fbb885d624004c98a7edabcc22a9b3/IMAGE02_copy.jpg?h=844&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/4Wt3nLJEpS3OI2pg7dUr63/322b9b4385a8ad32e6fc1210d7828064/layout.jpg?w=2000&q=80&fit=fill&&&fl=progressive&q=80" />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/739HDpv0V5SM0DNRMoC8Ef/4ef7c433cb80c626d02e2f330adf5119/icecream.gif?&q=80" />
      <NextProjects
        link2="/our-work/wally"
        link1="/our-work/fig-and-thistle"
        text2="WALLY"
        text1="FIG & THISTLE"
        src2="https://images.ctfassets.net/d9627l0amdl4/6y5ngUEfDl7jxlP2lhNX5S/f53659b45a76e607da3930746cb5063f/Wally_part02_image_VF3.jpg?h=702&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/7uSocXiZkvZNuSbomNLnwh/1987e58ff484a726c30f48560acf51f2/2b_copy.jpg?h=910&w=1300&q=80&fit=fill&&&fl=progressive&q=80"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/2doZlovxhTOrfMFt2G0vyR/571c74075d6e2dee3a41750717f6887e/lffooter.jpg?h=2200&w=2200&q=80&fit=fill&&&fl=progressive&q=80"
      />
    </div>
  );
};

export default page;
