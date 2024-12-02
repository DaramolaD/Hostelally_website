"use client";
import React, { useState, useEffect } from "react";
import Heading from "../atom/Header";
import Image from "next/image";
import Skyline_Branch_1 from "@/public/assets/imgs/Skyline_Branch_1.png";
import Skyline_Branch_2 from "@/public/assets/imgs/Skyline_Branch_2.png";
import Skyline_Branch_3 from "@/public/assets/imgs/Skyline_Branch_3.png";
import { Star } from "lucide-react";

const FeatureSection = () => {
  // State to simulate content loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulating data fetching..
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);
  }, []);

  return (
    <section className="bg-gray-50 max-w-screen-2xl mx-auto pt-10 md:pt-0">
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
        <div className="grid grid-cols-1 md:grid-cols-[59%_41%] gap-6 md:gap-4">
          {/* First container skeleton */}
          {isLoading ? (
            <div className="bg-gray-300 animate-pulse h-full rounded-xl p-6"></div>
          ) : (
            <div className="relative h-full rounded-xl group overflow-hidden">
              <div className="relative flex items-center h-full">
                {/* Content that appears on hover */}
                <div className="absolute bottom-0 w-full flex flex-col gap-2 lg:gap-4 text-white bg-black/70 border border-black/40 z-10 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-2xl lg:text-4xl font-medium">
                    Skyline Hostel Branch
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-xl lg:text-2xl font-light">
                      Rooftop Lounge
                    </p>
                    <div className="flex items-center">
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl lg:text-2xl font-normal">
                        (215 Bookings)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <Image
                  src={Skyline_Branch_1}
                  width={696}
                  height={696}
                  alt="branchRoomImg"
                  className="object-cover w-full rounded-xl max-sm:h-[400px] md:max-h-[696px]" // Ensures the image fills the container while maintaining aspect ratio
                  sizes="(max-width: 768px) 100vw, 59vw" // Dynamically adjusts image size based on screen width
                />
              </div>
            </div>
          )}

          {/* Second container skeleton */}
          {isLoading ? (
            <div className="flex flex-col gap-6 md:gap-4">
              <div className="bg-gray-300 animate-pulse h-full rounded-xl p-6"></div>
              <div className="bg-gray-300 animate-pulse h-full rounded-xl p-6"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-6 md:gap-4">
              {/* Second container */}
              <div className="relative flex-1 rounded-xl group overflow-hidden">
                <div className="absolute bottom-0 w-full flex flex-col gap-2 lg:gap-4 text-white bg-black/70 border border-black/40 z-10 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-2xl font-medium">
                    Skyline Hostel Branch
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-light">Rooftop Lounge</p>
                    <div className="flex items-center">
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-normal">
                        (215 Bookings)
                      </span>
                    </div>
                  </div>
                </div>
                <Image
                  src={Skyline_Branch_2}
                  fill
                  alt="branchRoomImg"
                  className="object-cover" // Ensures the image fills the container while maintaining aspect ratio
                  sizes="(max-width: 768px) 100vw, 59vw" // Dynamically adjusts image size based on screen width
                />
              </div>

              {/* Third container */}
              <div className="relative flex-1 rounded-xl group overflow-hidden">
                <div className="absolute bottom-0 w-full flex flex-col gap-2 lg:gap-4 text-white bg-black/70 border border-black/40 z-10 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-2xl font-medium">
                    Skyline Hostel Branch
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-light">Rooftop Lounge</p>
                    <div className="flex items-center">
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                      <Star className="size-5 text-white fill-white" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-normal">
                        (215 Bookings)
                      </span>
                    </div>
                  </div>
                </div>

                <Image
                  src={Skyline_Branch_3}
                  fill
                  alt="branchRoomImg"
                  className="object-cover" // Ensures the image fills the container while maintaining aspect ratio
                  sizes="(max-width: 768px) 100vw, 59vw" // Dynamically adjusts image size based on screen width
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
