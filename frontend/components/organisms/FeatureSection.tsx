"use client";
import React, { useState, useEffect } from "react";
import Heading from "../atom/Header";
import Image from "next/image";
import Skyline_Branch_1 from "@/public/assets/imgs/Skyline_Branch_1.png";
import Skyline_Branch_2 from "@/public/assets/imgs/Skyline_Branch_2.png";
import Skyline_Branch_3 from "@/public/assets/imgs/Skyline_Branch_3.png";
import {
  BathIcon,
  BedDoubleIcon,
  BedSingleIcon,
  Building2Icon,
  MapPinIcon,
  ShowerHeadIcon,
  SofaIcon,
} from "lucide-react";
import Link from "next/link";

const FeatureSection = () => {
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
      price: "500",
      location: "Palm Jumeirah Dubia",
      img: Skyline_Branch_2,
      link: "",
      doublebed: "2",
      bath: "1",
      sofa: "1",
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: Skyline_Branch_1,
      link: "",
      doublebed: "1",
      shadower: "1",
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: Skyline_Branch_3,
      link: "",
      bed: "1",
      bath: "1",
      sofa: "1"
    },
  ];

  return (
    <section className="bg-white max-w-screen-2xl mx-auto pt-10 md:pt-0">
      <div className="container grid gap-9 relative w-full py-20 pt-40">
        <div className="flex flex-col text-left gap-2 md:gap-4">
          <Heading level={2} size="md" align="left" weight="medium">
            Your Space, Your Style
          </Heading>

          <p className="text-base lg:text-xl text-start font-medium">
            Our hostels are more than just places to stay. Whether you&apos;re
            here to work, explore, or unwind, you&apos;ll find a welcoming spot
            with its own unique vibe, from vibrant city centers to peaceful
            coastal retreats—discover your home away from home!
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:max-h-[700px] md:grid-cols-[59%_41%] md:grid-rows-[repeat(2,_minmax(0,_1fr))] gap-6 md:gap-4">
          {/* First container skeleton */}
          {isLoading ? (
            <div className="bg-gray-300 animate-pulse h-full rounded-xl p-6"></div>
          ) : (
            displayRoom.map((room, index) => (
              <div
                key={index}
                className={`relative group h-full min-h-40 md:min-h-80 rounded-xl overflow-hidden ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
              >
                <div className="relative flex items-center h-full">
                  {/* Content that appears on hover */}
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 flex flex-col items-end justify-between w-full h-fit px-4 py-4 bg-black bg-opacity-60 backdrop-blur-[10px] transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                    <div className="flex flex-col w-full gap-2 text-white">
                      <div className="flex sm:items-center justify-between">
                        <div className="flex gap-4 gap-y-0 flex-wrap justify-between">
                          <p className="text-2xl">
                            ${room.price}
                            <span className="text-sm"> / per night</span>
                          </p>
                          <div className="flex gap-1 md:gap-2 items-center">
                            {room.bed && (
                              <div className="flex gap-[2px] items-center">
                                <span className="text-sm">
                                  {room.bed}
                                </span>
                                <BedSingleIcon className="text-white size-4" />
                              </div>
                            )}
                            {room.doublebed && (
                              <div className="flex gap-[2px] items-center">
                                <span className="text-sm">
                                  {room.doublebed}
                                </span>
                                <BedDoubleIcon className="text-white size-4" />
                              </div>
                            )}
                            {room.sofa && (
                              <div className="flex gap-[2px] items-center">
                                <SofaIcon className="text-white size-4" />
                              </div>
                            )}
                            {room.bath && (
                              <div className="flex gap-[2px] items-center">
                                <BathIcon className="text-white size-4" />
                              </div>
                            )}
                            {room.shadower && (
                              <div className="flex gap-[2px] items-center">
                                <ShowerHeadIcon className="text-white size-4" />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center p-1 px-5 border rounded-md h-fit border-white w-fit">
                          <Link href={room.link} className="text-sm">
                            View
                          </Link>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <Building2Icon className="text-white size-4" />
                        <h3 className="font-medium text-sm !leading-normal">
                          {room.roomTag}
                        </h3>
                      </div>
                      <div className="flex gap-1 items-center">
                        <MapPinIcon className="text-white size-4" />
                        <p className="text-xs">{room.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <Image
                    src={room.img}
                    width={696}
                    height={696}
                    alt="branchRoomImg"
                    className="object-cover w-full rounded-xl h-full" // Ensures the image fills the container while maintaining aspect ratio
                    // sizes="(max-width: 768px) 100vw, 59vw" // Dynamically adjusts image size based on screen width
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
