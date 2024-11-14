import React from "react";
import Heading from "../atom/Header";
import { Button } from "../ui/button";

const AboutUsSection = () => {
  return (
    <section className="py-10 pb-20 bg-[#E5E5EA] max-w-screen-2xl mx-auto">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-5 w-full py-10 md:py-40 md:pt-44">
        {/* Text Content: Comes first on mobile and second on larger screens */}
        <div className="flex flex-col gap-5 order-1 md:order-2 rounded-lg bg-white h-full py-7 px-10">
          <div className="flex flex-col gap-2">
            <Heading level={2} size="md" align="left" weight="medium">
              About Us
            </Heading>
            <p className="text-base lg:text-xl text-start font-medium md:text-left">
              Your Home Away From Home
            </p>
          </div>
          <p className="text-base lg:text-xl text-start font-medium md:text-left">
            At Hostel Ally, we cater to everyone—from explorers to remote
            workers. Our hostels are designed to help you relax, connect, and
            find your place. Each location reflects the local culture, offering
            unique spaces to meet new friends or enjoy some quiet time. Our
            friendly staff are here to share local tips and make sure you feel
            welcome, no matter where you are. With us, you&apos;re not just
            booking a bed; you&apos;re joining a community that feels like
            family. Wherever you&apos;re headed, we&apos;re here to help you
            make the most of your journey.
          </p>

          <Button size="lg" className="w-fit md:ml-auto mt-10">Join Our Community</Button>
        </div>

        {/* Image Container: Comes second on mobile and first on larger screens */}
        <div className="relative flex mb-10 md:mb-0 order-2 md:order-1">
          <div className="flex bg-[#a5a5a8] w-[330px] h-[465px]"></div>
          <div className="flex bg-[#c6c6c9] w-[330px] h-[465px] absolute -bottom-24 right-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
