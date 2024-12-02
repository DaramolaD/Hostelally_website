import React from "react";
import HeroFilterHandler from "../molecules/HeroFilterHandler";
import Image from "next/image";
import heroBgImg from "@/public/assets/imgs/Hero_Bg.png";

const HeroSection = () => {
  return (
    <section className="relative max-w-screen-2xl mx-auto">
      <div className="container  flex flex-col md:items-center md:justify-center md:text-center relative w-full h-fit z-10">
        <div className="flex flex-col w-full max-w-[735px] gap-2 py-28 pt-60 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium !leading-snug">
            Your Home Away From Home — <br />
            For Rest, Work, and Connection
          </h1>
          <p className="text-base lg:text-xl">
            Whether you&apos;re here to explore, focus on work, or take a break,
            our hostels offer the comfort, community, and flexibility you need
            to feel at home, wherever you are.
          </p>
        </div>
        {/* <div className="w-full max-w-[1400px] mx-auto px-5 right-0 left-0 flex z-20"> */}
        <HeroFilterHandler />
        {/* </div> */}
      </div>
      <Image src={heroBgImg} fill alt="heroBgImg" className="object-cover sm:object-center"/>
    </section>
  );
};

export default HeroSection;
