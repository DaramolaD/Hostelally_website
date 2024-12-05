"use client";

import React from "react";
import { useRouter } from "next/navigation";
import HostelFilter from "./HostelFilter";
import { Filters } from "@/libs/validation";

const HeroFilterHandler: React.FC = () => {
  const router = useRouter()
  const handleApplyFilters = (data: Filters) => {
    console.log("Filters applied:", data);
    // Format the checkIn and checkOut as ISO date strings
    const checkInDate = data.checkIn ? data.checkIn.toISOString() : "";
    const checkOutDate = data.checkOut ? data.checkOut.toISOString() : "";

    // Build the query parameters
    const queryParams = new URLSearchParams({
      location: data.location,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adults: data.adults.toString(),
      child: data.child.toString(),
      rooms: data.rooms.toString(),
    }).toString();

    // Navigate to the search page with the filters as query parameters
    // router.push(`/search?${queryParams}`);
    console.log("queryParams", queryParams);
    
  };

  return (
    <div className="relative -bottom-10">
      <HostelFilter onApplyFilters={handleApplyFilters} />
    </div>
  );
};

export default HeroFilterHandler;
