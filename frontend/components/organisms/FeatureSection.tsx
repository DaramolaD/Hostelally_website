"use client";
import React, { useState, useEffect } from "react";
import Heading from "../atom/Header";

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
    <section className='bg-[#C7C7CC] max-w-screen-2xl mx-auto'>
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
        <div className="grid grid-cols-1 md:grid-cols-[59%_41%] h-screen  gap-6 md:gap-4">
          {/* First container skeleton */}
          {isLoading ? (
            <div className="bg-gray-300 animate-pulse h-full rounded-xl p-6"></div>
          ) : (
            <div className="bg-[#E5E5EA] h-full rounded-xl p-6">
              <p className="text-white text-center">
                First Container (59% width)
              </p>
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
              <div className="bg-[#E5E5EA] flex-1 rounded-xl p-6">
                <p className="text-white text-center">Second Container</p>
              </div>

              {/* Third container */}
              <div className="bg-[#E5E5EA] flex-1 rounded-xl p-6">
                <p className="text-white text-center">Third Container</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
