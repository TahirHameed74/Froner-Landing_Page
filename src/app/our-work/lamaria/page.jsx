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
        productName="LAMARIA"
        src="https://images.ctfassets.net/d9627l0amdl4/o2nurqjX9ZPI6aWdzdx4k/a0e505c71d301bae8d3ac18c6eff00af/La_Maria_1b2.jpg?h=1980&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
      <ServiceImage
        src="https://images.ctfassets.net/d9627l0amdl4/3MCafvgX9YdHRY6buQ1lsM/f96ec742dd8bbb98c669e6f88b0dde0c/lamaria_2.jpg?h=1400&q=80&&fm=webp&q=80"
        service="STRATEGY + BRANDING + PACKAGING + WEBSITE"
      />
      <AnimatedQuotes
        topQuote="BEAUTY"
        midText="Through The Ages."
        bottomQuote="LaMaria is a skincare brand created by ob/gyn Dr. Manuela Maria Vazquez to respond to hormonal changes throughout a woman’s life and support skin health as estrogen levels dip. We brought their brand to life with timeless, elevated style."
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/7c2mDRsDPv1Khrnr9jMLwB/e96143bb5d917d7d31895656cb9adf73/La_Maria_3.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <ProjectCard
        desc="Here’s how: Guided by our strategy, through design and messaging, we crafted an elevated space that celebrates a lifetime of beauty. Beginning with the tagline Beauty Through the Ages, we ditched the “anti-aging” terminology for a healthier approach to messaging, one that recognizes the beauty of every age. In design, we focused on communicating timeless taste with every choice. Romantic and confident, we paired a pattern of hand drawn feminine forms with a soothing color palette. To bring the brand story to life, we created a packaging suite punctuated with unexpected, graceful touches. Gold foil accents, illustrative design elements, linen textures and sensuous imagery come together to express grown-up elegance. Then, we infused the founder’s Brazilian heritage into the brand for a sunny feeling, full of lush nature and relaxed style. In messaging, we created brand-specific phrases like natural science skincare and the botany beauty to communicate elevated warmth and respect throughout the suite.

"
        src="https://images.ctfassets.net/d9627l0amdl4/4yGa6OS4b0pl9VFkkLnUSR/3fc75c6b390da6d173f4346f2d0d18bb/lamaria_8.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/8Z6drkhfFHX4L79ZFPB0m/5044993a17fe6d390ea4497a6286a9bd/rendering1_1.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <AnimatedQuotes
        bottomQuote="LAMARIA DISRUPTS THE AGEIST SKINCARE SPACE TO
SUPPORT THE BEAUTY OF EVERY WOMAN, AT EVERY AGE."
        topQuote="Tailored To Your Timeline."
      />
      <SideBySide
        src2="https://images.ctfassets.net/d9627l0amdl4/7Hpr6NZP6EQFlXxBPMwcbq/3d23c1d2205776ec2d53b392a71a5792/lamaria_7.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/IiG3KCdyAwL3QAaDL30F0/3c5398adc57f6e2df979a5a3df054a58/lamaria_6.jpg?h=844&w=1300&q=80&fit=fill&&fm=webp&q=80"
      />
      <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/4yGa6OS4b0pl9VFkkLnUSR/3fc75c6b390da6d173f4346f2d0d18bb/lamaria_8.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <Image src="https://images.ctfassets.net/d9627l0amdl4/5ORIzoXidMEUzXQQQLjyAg/ac13dac200cb866af0ce7c91a7c476f8/La_Maria_3b.jpg?w=2000&q=80&fit=fill&&fm=webp&q=80" />
      <div className=" lg:w-[100%] w-full md:h-[410px] h-[200px] mt-5 lg:h-[600px]  mx-auto ">
        <video
          className="w-full h-full object-cover  "
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            type="video/mp4"
            src="https://videos.ctfassets.net/d9627l0amdl4/6pcMigbPBRarEZdVgIMN92/777f83dba9ffe09cd0ac88dcbbec5201/Untitled__9_.mp4"
          />
        </video>
      </div>
      <Image src="https://images.ctfassets.net/d9627l0amdl4/465hRT9AE2YKW5d6lu70jZ/cdb344769e5065d3ba222f7005e6938b/lamaria_9.jpg?h=1331&w=2200&q=80&fit=fill&&fm=webp&q=80" />
      <NextProjects
        src2="https://images.ctfassets.net/d9627l0amdl4/50UqXbJTRq14d8UuDTHdFd/5db23802797ba31e13e5e223f6e08aa8/1_copy2.jpg?h=702&w=1300&q=80&fit=fill&&fm=webp&q=80"
        src1="https://images.ctfassets.net/d9627l0amdl4/2LkxyOpNg28sZi6w07o7Gl/2bf237df5591b2670296cf4e2f7cf569/lavant.jpg?h=910&w=1300&q=80&fit=fill&&fm=webp&q=80"
        link1="/our-work/lavant"
        text1="L'AVANT"
        text2="HOMECOMING"
        link2="/our-work/homecoming"
      />
      <Footer
        main={true}
        src="https://images.ctfassets.net/d9627l0amdl4/6wELmB5PZosF6t306t52ra/b8ddb92ff2fc7f84b29465446be50f1b/lamaria.jpg?h=2200&w=2200&q=80&fit=fill&&fm=webp&q=80"
      />
    </div>
  );
};

export default page;
