"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Filters } from "@/lib/validation";
import LocationFilter from "./LocationFilterHnadler";
import { DatePicker } from "./DatePickerForm";
import { FormContainer } from "./FtlerSection";
import { RoomSelection } from "./RoomFilterHnadler";

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
      checkIn: filters.checkIn || "",
      checkOut: filters.checkOut || "",
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
          className="flex-1 space-y-4"
        >
          <LocationFilter
            options={hostelLocations}
            value={filters.location}
            onChange={(value) =>
              setFilters((prev: Filters) => ({ ...prev, location: value }))
            }
          />
          <DatePicker
            name="checkIn"
            control={form.control}
            label="Check-In Date"
            placeholder="Select a date"
            onChange={(date) =>
              setFilters((prev: Filters) => ({ ...prev, checkIn: date }))
            }
          />
          <DatePicker
            name="checkOut"
            control={form.control}
            label="Check-Out Date"
            placeholder="Select a date"
            onChange={(date) =>
              setFilters((prev: Filters) => ({ ...prev, checkOut: date }))
            }
          />
          <RoomSelection
            adults={filters.adults}
            child={filters.child}
            rooms={filters.rooms}
            onChange={handleRoomChange}
          />

          <FormContainer />

          <Button type="submit" className="mt-4">
            Apply Filters
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HostelFilter;
