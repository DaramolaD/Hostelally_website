"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Filters } from "@/lib/validation";
import LocationFilter from "./LocationFilter";
import { RoomSelection } from "./RoomSelection";
import { DatePicker } from "./DatePicker";

type HostelFilterProps = {
  onApplyFilters: (filters: Filters) => void;
};

const HostelFilter: React.FC<HostelFilterProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState<Filters>({
    location: "",
    checkIn: null,
    checkOut: null,
    adults: 1,
    child: 0,
    rooms: 1,
  });

  const form = useForm({
    defaultValues: {
      location: filters.location || "",
      checkIn: filters.checkIn || null,
      checkOut: filters.checkOut || null,
    },
  });

  const handleRoomChange = (data: {
    adults: number;
    child: number;
    rooms: number;
  }) => {
    setFilters((prev) => ({ ...prev, ...data }));
  };

  const handleApply = () => {
    console.log("Submitted filters:", filters);
    onApplyFilters({ ...filters });
  };

  const hostelLocations = [
    { label: "Paris, France", value: "paris_france" },
    { label: "Lagos, Nigeria", value: "lagos_nigeria" },
    { label: "Barcelona, Spain", value: "barcelona_spain" },
    { label: "London, UK", value: "london_uk" },
    { label: "Cape Town, South Africa", value: "cape_town_south_africa" },
    { label: "Abuja, Nigeria", value: "abuja_nigeria" },
    { label: "New York City, USA", value: "new_york_city_usa" },
    { label: "Tokyo, Japan", value: "tokyo_japan" },
  ];

  return (
    <div className="container flex flex-col px-6 bg-white rounded-lg py-5 sm:flex-row flex-wrap justify-start md:justify-center gap-2 gap-y-4 w-fit">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleApply)}
          className="flex md:justify-center gap-4 flex-wrap"
        >
          <LocationFilter
            options={hostelLocations}
            value={filters.location}
            onChange={(value) =>
              setFilters((prev: Filters) => ({ ...prev, location: value }))
            }
          />
          <DatePicker
            selectedDate={filters.checkIn}
            onDateChange={(date) =>
              setFilters((prev: Filters) => ({ ...prev, checkIn: date }))
            }
            placeholder="Check-In Date"
          />
          <DatePicker
            selectedDate={filters.checkOut}
            onDateChange={(date) =>
              setFilters((prev: Filters) => ({ ...prev, checkOut: date }))
            }
            placeholder="Check-Out Date"
          />
          <RoomSelection
            adults={filters.adults}
            child={filters.child}
            rooms={filters.rooms}
            onChange={handleRoomChange}
          />
          <Button size="lg" type="submit" className="">
            Apply Filters
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HostelFilter;
