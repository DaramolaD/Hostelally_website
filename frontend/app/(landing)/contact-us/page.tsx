import Heading from "@/components/atom/Header";
import React from "react";

const ContactPage = () => {
  return (
    <section className="py-10 pb-20 bg-[#E5E5EA] max-w-screen-2xl mx-auto">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-5 w-full py-10 md:py-40 md:pt-44">
      <div className="flex flex-1 flex-col max-w-[800px] gap-4 items-start">
          <Heading level={2} size="md" align="left" weight="medium">
            Contact Us Page
          </Heading>
          <p className="text-base lg:text-xl font-medium text-start w-full">
            You can react out to us here
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
