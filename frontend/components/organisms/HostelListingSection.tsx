"use client";
import React, { useState, useEffect } from "react";
import Heading from "../atom/Header";
import { Button } from "../ui/button";
import Image from "next/image";
import executiveSuite from "@/public/assets/imgs/room_1.png";
import room_2 from "@/public/assets/imgs/room_2.png";
import room_3 from "@/public/assets/imgs/room_3.png";
import room_4 from "@/public/assets/imgs/room_4.png";
import room_5 from "@/public/assets/imgs/room_5.png";
import room_6 from "@/public/assets/imgs/room_6.png";
import {
  MapPinIcon,
  Building2,
  BedDoubleIcon,
  BathIcon,
  ShowerHeadIcon,
  SofaIcon,
  BedSingleIcon,
  Armchair,
} from "lucide-react";
import Link from "next/link";

const HostelListingSection = () => {
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
      img: executiveSuite,
      link: "",
      doublebed: "2",
      bath: "1",
      sofa: "1"
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: room_5,
      link: "",
      doublebed: "1",
      bath: "1",
      sofa: "1"
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: room_2,
      link: "",
      doublebed: "1",
      shadower: "1",
      armchair: "1",
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: room_3,
      link: "",
      doublebed: "1",
      bath: "1",
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: room_6,
      link: "",
      bed: "1",
      shadower: "1",
    },
    {
      roomTag: "Oasis Sandra Resort Homestay",
      price: "50",
      location: "Palm Jumeirah Dubia",
      img: room_4,
      link: "",
      doublebed: "1",
      shadower: "1",
    },
  ];

  return (
    <section className="bg-white max-w-screen-2xl mx-auto">
      <div className="container grid gap-9 relative w-full py-16 md:py-20 md:pt-40">
        <div className="flex flex-col text-left gap-2 md:gap-4">
          <Heading level={2} size="md" align="left" weight="medium">
            Find Your Ideal Room
          </Heading>

          <p className="text-base lg:text-xl text-start font-medium w-full max-w-[640px]">
            Browse our range of hostel rooms and pick the perfect fit for your
            stay. Click to explore your options!
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
                    className="flex items-end bg-gray-300 animate-pulse rounded-xl h-[347px] overflow-hidden"
                  >
                    <div className="flex w-full bg-gray-400 h-full p-6"></div>
                  </div>
                ))
            : displayRoom.map((room, index) => (
                <div
                  key={index}
                  className="relative flex items-end rounded-xl h-[347px] group overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={room.img}
                    alt="roomImg"
                    width={388}
                    height={347}
                    className="h-full w-full object-left object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 flex flex-col items-end justify-between w-full h-fit px-4 py-4 bg-black bg-opacity-60 backdrop-blur-[8.6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col w-full gap-2 text-white">
                      <div className="flex sm:items-center justify-between">
                        <div className="flex gap-4 gap-y-0 flex-wrap justify-between">
                          <p className="text-xl">
                            ${room.price}
                            <span className="text-sm"> / per night</span>
                          </p>
                          <div className="flex gap-1 md:gap-2 items-center">
                            {room.bed && (
                              <div className="flex gap-[2px] items-center">
                                <span className="text-sm">{room.bed}</span>
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
                             {room.armchair && (
                              <div className="flex gap-[2px] items-center">
                                <Armchair className="text-white size-4" />
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
                        <Building2 className="text-white size-4" />
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

                  {/* Layer Blur Border */}
                  <div className="absolute inset-0 rounded-xl border-[10px] border-transparent group-hover:border-opacity-0 group-hover:shadow-[0_0_23px_10px_rgba(0,0,0,0.6)] transition duration-300 ease-in-out"></div>
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

export default HostelListingSection;
