"use client";
import React, { useState, useEffect } from "react";
import Heading from "../atom/Header";
import { Button } from "../ui/button";
import Image from "next/image";
import service_1 from "@/public/assets/imgs/service_1.png";
import service_2 from "@/public/assets/imgs/service_2.png";
import service_3 from "@/public/assets/imgs/service_3.png";
import service_4 from "@/public/assets/imgs/service_4.png";
import service_5 from "@/public/assets/imgs/service_5.png";
import service_6 from "@/public/assets/imgs/service_6.png";
import { MoveUpRight } from "lucide-react";

const ServiceListingSection = () => {
  // State to simulate content loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulating data fetching..
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);
  }, []);

  const displayRoom = [
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: service_1,
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: service_2,
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: service_3,
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: service_4,
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: service_5,
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: service_6,
    },
  ];

  return (
    <section className="bg-[#E5E5EA] max-w-screen-2xl mx-auto">
      <div className="container grid gap-9 relative w-full py-16 md:py-20 md:pt-40">
        <div className="flex flex-col text-left gap-2 md:gap-4">
          <Heading level={2} size="md" align="left" weight="medium">
          Service Features
          </Heading>

          <p className="text-base lg:text-xl text-start font-medium w-full max-w-[640px]">
          Browse our range of hostel rooms and pick the perfect fit for your stay. Click to explore your options!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
          {isLoading
            ? Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex items-end bg-gray-300 animate-pulse rounded-xl w-[388px] h-[347px] overflow-hidden"
                  >
                    <div className="flex w-full bg-gray-400 h-full p-6"></div>
                  </div>
                ))
            : displayRoom.map((room, index) => (
                <div
                  key={index}
                  className="relative flex items-end rounded-xl h-[347px] group overflow-hidden"
                >
                  {/* <div className="absolute bottom-0 flex items-center justify-between gap-5 md:gap-10 w-full h-[100px] p-6 bg-black/70 border border-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col text-white">
                      <h3 className="font-medium text-lg">{room.roomTag}</h3>
                      <p className="text-sm">{room.location}</p>
                    </div>
                    <div className="flex items-center border h-fit group border-white hover:border-[#33270d] w-fit p-2 rounded-full">
                      <MoveUpRight className="text-white size-6 lg:size-7 group-hover:text-[#33270d]" />
                    </div>
                  </div> */}
                  <Image
                    src={room.img}
                    alt="roomImg"
                    width={388}
                    height={347}
                    className="h-full w-full object-left object-cover"
                  />
                </div>
              ))}
        </div>

        <Button size="lg" className="w-fit md:ml-auto">
          View More
        </Button>
      </div>
    </section>
  );
};

export default ServiceListingSection;
