"use client";
import React, { useState, useEffect } from "react";
import Heading from "../atom/Header";
import { Button } from "../ui/button";

const HostelListingSection = () => {
  // State to simulate content loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulating data fetching..
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);
  }, []);

  // Sample data for room listing
  const roomData = Array(6).fill({
    title: "Room Title",
    description: "Description of the room",
  });

  return (
    <section>
      <div className="container grid gap-9 relative bg-[#C7C7CC] mx-auto w-full py-16 md:py-20 md:pt-40">
        <div className="flex flex-col text-left gap-2 md:gap-4">
          <Heading level={2} size="md" align="left" weight="medium">
            Find Your Ideal Room
          </Heading>

          <p className="text-base lg:text-xl text-start font-medium">
            Browse our range of hostel rooms and pick the perfect fit for your
            stay. Click to explore your options!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {isLoading
            ? Array(6).fill(null).map((_, index) => (
                <div
                  key={index}
                  className="flex items-end bg-gray-300 animate-pulse rounded-xl w-[388px] h-[347px] overflow-hidden"
                >
                  <div className="flex w-full bg-gray-400 h-[100px] p-6"></div>
                </div>
              ))
            : roomData.map((room, index) => (
                <div
                  key={index}
                  className="flex items-end bg-[#E5E5EA] rounded-xl h-[347px] overflow-hidden"
                >
                  <div className="flex flex-col w-full bg-[#F2F2F7] h-[100px] p-6">
                    <h3 className="font-medium text-lg">{room.title}</h3>
                    <p className="text-sm">{room.description}</p>
                  </div>
                </div>
              ))}
        </div>

        <Button size="lg" className="w-fit md:ml-auto">View More</Button>
      </div>
    </section>
  );
};

export default HostelListingSection;
