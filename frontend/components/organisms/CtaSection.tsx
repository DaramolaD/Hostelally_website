import React from "react";
import Heading from "../atom/Header";
import { Button } from "../ui/button";

const CtaSection = () => {
  return (
    <section className="bg-[#E5E5EA] py-16 md:py-20 hover:shadow-md max-w-screen-2xl mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-11 justify-between items-center">
        <div className="flex flex-col max-w-[1000px] mx-auto gap-4 items-start">
          <Heading level={2} size="md" align="left" weight="medium">
            Ready for Your <br />
            Next Great Experience?
          </Heading>
          <p className="text-base lg:text-xl font-medium text-start w-full">
            Choose your perfect hostel and dive into an adventure today. Whether
            you&apos;re working, exploring, or relaxing, it all starts here!
          </p>
        </div>

        {/* Add margin-top to create space between text content and button container */}
        <div className="flex flex-wrap items-center gap-4 md:justify-end">
          <Button size="lg" className="w-fit">
            Book Your Stay
          </Button>
          <Button variant="outline" size="lg" className="w-fit">
            Explore Our Hostels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
