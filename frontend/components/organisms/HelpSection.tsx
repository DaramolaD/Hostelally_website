import React from "react";
import Heading from "../atom/Header";
import ContactForm from "./ContactForm";

const HelpSection = () => {
  return (
    <section className="bg-[#C7C7CC] py-16 md:py-20 hover:shadow-md max-w-screen-2xl mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-11 justify-between items-center">
        <div className="flex flex-col text-left gap-2 md:gap-4">
          <Heading level={2} size="md" align="left" weight="medium">
            Have Questions? <br /> We&apos;re Here to Help!
          </Heading>

          <p className="text-base lg:text-xl text-start font-medium">
            Reach out to us, and our friendly team will get back to you shortly.
            Whether you need information about our hostels, availability, or
            anything else, we&apos;re just a message away!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default HelpSection;
