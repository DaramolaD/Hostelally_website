"use client";

import React from "react";
import HostelFilter from "./HostelFilter";
import { Filters } from "@/lib/validation";

const HeroFilterHandler: React.FC = () => {
  const handleApplyFilters = (newFilters: Filters) => {
    console.log("Filters applied:", newFilters);
  };

  return (
    <div className="relative -bottom-10">
      <HostelFilter onApplyFilters={handleApplyFilters} />
    </div>
  );
};

export default HeroFilterHandler;
