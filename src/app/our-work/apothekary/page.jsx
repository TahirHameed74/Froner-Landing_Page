import React from "react";
import MainBanner from "../../../../components/inividualPage/MainBanner";
import ServiceImage from "../../../../components/inividualPage/ServiceImage";
import AnimatedQuotes from "../../../../components/inividualPage/AnimatedQuotes";
import OurWorkCard from "../../../../components/OurWorkCard";
import AnimatedQuote from "../../../../components/inividualPage/AnimatedQuote";
import SideBySide from "../../../../components/inividualPage/SideBySide";
import NextProjects from "../../../../components/inividualPage/NextProjects";
import Footer from "../../../../components/Footer";
import ResponsiveBanner from "../../../../components/inividualPage/ResponsiveBanner";
import ProjectCard from "../../../../components/inividualPage/ProjectCard";
import Navbar from "../../../../components/Navbar";

const page = () => {
  return (
    <div className="w-full h-full">
      <MainBanner
        productName="APOTHEKARY"
        src="https://images.ctfassets.net/d9627l0amdl4/2My9RgqgVVlSLN6VaoqaV9/3fe14c973b857017d80bee5e0710f78a/Apothekary_Image_01_copy.jpg?h=1728&w=1920&q=80&fit=fill&&fm=webp&q=80"
      />
      <div className="absolute">
        <ServiceImage
          service="BRANDING + PACKAGING"
          src="https://images.ctfassets.net/d9627l0amdl4/yYbQaJzf2U915hJB3uDU7/c304c4e34897912cc7e0b8c58ad5bb27/Apothekary_Image_02_sm.jpg?h=1100&q=80&&fm=webp&q=80"
        />
        <AnimatedQuotes
          topQuote="NATURE IS
"
          midText="MEDICINE."
          bottomQuote="With herbal blends, tinctures and education, Apothekary makes building a plant medicine practice simple, accessible and enjoyable. They asked Forner to help them connect with a wider audience and set the stage for future growth. We helped them share an ethos that bridges East and West in experiences of everyday healing."
        />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/3798hKUwKVUwHMYfMlxlF1/c185a468f1ced2731f71d3bc5a79432b/Blue_Me_Away_Shot_wide_sm.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <ProjectCard
          desc="Here’s how: In strategy, we focused on breaking down barriers to entry for newcomers, making building a plant medicine practice feel enjoyable and empowering. To do that, we positioned Apothekary as your plant medicine partners, guiding customers to connect with a more natural way of life. We celebrated their connective ethos with custom bridge-like connections in the logomark. Then, we helped them take a stand for herbal healing with the powerful tagline Nature is Medicine. To evoke a personalized way of herbal medicine, we warmly invite people into the Apothekary community with design and messaging throughout the suite. The packaging provides a window into the product via die-cut, a simple how-to, and illustrations that deepen understanding of ingredient benefits. A golden dosing spoon elevates the ritual of mixing your own healing medicine, every day."
          src="https://images.ctfassets.net/d9627l0amdl4/yYbQaJzf2U915hJB3uDU7/c304c4e34897912cc7e0b8c58ad5bb27/Apothekary_Image_02_sm.jpg?h=1400&q=80&&fm=webp&q=80"
        />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/7BikFfLctnrpZdgYJeayc0/cff22b27aa87e268a125124a1ba3b78e/Apothekary_Image_05_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <AnimatedQuote
          quote="Plant Medicine For
Everyday Healing."
        />
        <SideBySide
          src1="https://images.ctfassets.net/d9627l0amdl4/7IiNqeWx1OHkPbKxlS7x2f/061c24f06ad0b7ab7d5440d5446a3331/1b.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
          src2="https://images.ctfassets.net/d9627l0amdl4/1bXCX9xQ37AtKFM8E5O644/ece5239c5ffa6627a746db9bdda5c431/3.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
        />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/3Sdn4jolx6XzxYPTzg2kkv/852534a0059630d6192c0744538b1a86/Apothekary_Image_04_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/51PWg7Uu62RDXMRgmvySDy/03f5488d936409e1aeb0d624253b138f/social.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <SideBySide
          video="https://videos.ctfassets.net/d9627l0amdl4/31v351XBjUPlEGJiWQbkDR/8c2e8c1f2d2d9d5f276e429a4b7653cc/logovidwide.mp4"
          src2="https://images.ctfassets.net/d9627l0amdl4/6Gij33V1EJOMlnNXpaRbcn/68bf15a528d069991a173f41f8d5e471/Apothekary_Image_03_sq_copy.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
        />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/WreShBBhCUIY9Zb0O4oR4/9f001e4bf6c7ec6b5604a9ff6df1d865/OOH1_copy.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/3nZppWq6KOk8dfhg8pyGj9/0e83e8d2e38b2dd1d9f734b838e68550/IMG_5308.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <SideBySide
          src2="https://images.ctfassets.net/d9627l0amdl4/4OjiulY16LZBVV791TaEYc/e3549b3b311091f4ffec767b915bf027/rosedrink.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
          src1="https://images.ctfassets.net/d9627l0amdl4/1rvs7OPFX35x9yJgbPIrbe/be6b914ed04e23bab5de7e2ad24d5e79/aptimage.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
        />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/1Zg5NQguJNOmgdDzbUsalg/144c328d34312598ebf495e7fb8416c7/layout3.jpg?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <ResponsiveBanner src="https://images.ctfassets.net/d9627l0amdl4/6nz2nUVrhBHXuF9IrbkBSl/5e550d503afd2686ee14362a30ee0db9/DailyEssentials-black2.png?w=1920&q=80&fit=fill&&fm=webp&q=80" />
        <SideBySide
          src2="https://images.ctfassets.net/d9627l0amdl4/IP2S456mETVlMVFOBUWFx/ca9e909ce3e5e753470a8ba04568f573/shipping1_copy_2b_sm.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
          src1="https://images.ctfassets.net/d9627l0amdl4/6RBmBQnJmc70kFSwugvaX6/cf4e900cde28ab2979d12e2bf1e98995/refill_copy1.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
        />
        <NextProjects
          link2="/our-work/be-well"
          link1="/our-work/fig-and-thistle"
          text2="BE WELL"
          text1="FIG & THISTLE"
          src2="https://images.ctfassets.net/d9627l0amdl4/IP2S456mETVlMVFOBUWFx/ca9e909ce3e5e753470a8ba04568f573/shipping1_copy_2b_sm.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
          src1="https://images.ctfassets.net/d9627l0amdl4/6RBmBQnJmc70kFSwugvaX6/cf4e900cde28ab2979d12e2bf1e98995/refill_copy1.jpg?h=649&w=1000&q=80&fit=fill&&fm=webp&q=80"
        />
        <Footer
          main={true}
          src="https://images.ctfassets.net/d9627l0amdl4/kt4iz01zPBrbsLdD17sak/971db7158949018cc3da6f53a16a187a/apoth.jpg?h=1920&w=1920&q=80&fit=fill&&fm=webp&q=80"
        />
      </div>
    </div>
  );
};

export default page;
