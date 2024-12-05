"use client";

import React from "react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Filters, FiltersSchema } from "@/libs/validation";
import LocationFilter from "./LocationFilter";
import { RoomSelection } from "./RoomSelection";
import { DatePicker } from "./DatePicker";
import { zodResolver } from "@hookform/resolvers/zod";

type HostelFilterProps = {
  onApplyFilters: (filters: Filters) => void;
};

const HostelFilter: React.FC<HostelFilterProps> = ({ onApplyFilters }) => {
  const form = useForm<Filters>({
    mode: "onChange", // Validates as the user types or changes fields
    resolver: zodResolver(FiltersSchema),
    defaultValues: {
      location: "",
      checkIn: null,
      checkOut: null,
      adults: 1,
      child: 0,
      rooms: 1,
    },
  });

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

  const handleApply = (data: Filters) => {
    console.log("Submitted filters:", data);
    onApplyFilters(data);
  };

  return (
    <div className="container flex flex-col px-6 bg-white rounded-lg py-5 sm:flex-row flex-wrap justify-start md:justify-center gap-2 gap-y-4 w-fit">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleApply)}
          className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center gap-4 md:flex-wrap"
        >
          <div className="flex flex-col gap-1 max-sm:w-full">
            <LocationFilter
              options={hostelLocations}
              value={form.watch("location")}
              onChange={(value) => form.setValue("location", value)}
            />
            {form.formState.errors.location && (
              <p className="text-xs text-red-500">Location is required.</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <DatePicker
              selectedDate={form.watch("checkIn")}
              onDateChange={(date) => form.setValue("checkIn", date)}
              placeholder="Check-In Date"
            />
            {form.formState.errors.checkIn && (
              <p className="text-xs text-red-500">Check-In date is required.</p>
            )}{" "}
          </div>
          <div className="flex flex-col gap-1">
            <DatePicker
              selectedDate={form.watch("checkOut")}
              onDateChange={(date) => form.setValue("checkOut", date)}
              placeholder="Check-Out Date"
            />
            {form.formState.errors.checkOut && (
              <p className="text-xs text-red-500">
                Check-Out date is required.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <RoomSelection
              adults={form.watch("adults")}
              child={form.watch("child")}
              rooms={form.watch("rooms")}
              onChange={(data) => {
                form.setValue("adults", data.adults);
                form.setValue("child", data.child);
                form.setValue("rooms", data.rooms);
              }}
            />

            <div className="flex flex-col">
              {form.formState.errors.adults && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.adults.message}
                </p>
              )}
              {form.formState.errors.child && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.child.message}
                </p>
              )}
              {form.formState.errors.rooms && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.rooms.message}
                </p>
              )}
            </div>
          </div>
          <Button
            size="lg"
            type="submit"
            // disabled={!form.formState.isValid}
          >
            Apply Filters
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HostelFilter;
