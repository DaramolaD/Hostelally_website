"use client";

import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  placeholder?: string;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  placeholder = "Select a date",
}) => {
  const handleDateChange = (date: Date | undefined) => {
    // Convert undefined to null for consistency
    onDateChange(date ?? null);
  };

  const today = new Date(); // Current date

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`max-md:w-full w-[240px] justify-start text-left font-normal !mt-0 ${
            !selectedDate ? "text-muted-foreground" : ""
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate || undefined}
          onSelect={handleDateChange} // Updated to use the handler
          disabled={(date) => date < today}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
