"use client";

import React from "react";
import HostelFilter from "./HostelFilter";
import { Filters } from "@/lib/validation";

const HeroFilterHandler: React.FC = () => {
  const handleApplyFilters = (newFilters: Filters) => {
    // Construct the query string from the filters object
    // const queryParams = new URLSearchParams({
    //   location: newFilters.location || "",
    //   dob: newFilters.dob ? newFilters.dob.toISOString() : "",
    //   adults: newFilters.adults.toString(),
    //   children: newFilters.children.toString(),
    //   rooms: newFilters.rooms.toString(),
    // }).toString();

    console.log("Filters applied:", newFilters);
    // Redirecting or handling filters elsewhere
    // window.location.href = `/hostels?${queryParams}`;
  };

  return (
    <div className="relative -bottom-10">
      <HostelFilter
        onApplyFilters={handleApplyFilters} // Callback to handle updates
      />
    </div>
  );
};

export default HeroFilterHandler;
