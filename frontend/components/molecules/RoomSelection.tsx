"use client";

import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type RoomSelectionProps = {
  adults: number;
  child: number;
  rooms: number;
  onChange: (data: { adults: number; child: number; rooms: number }) => void;
};

export const RoomSelection: React.FC<RoomSelectionProps> = ({
  adults,
  child,
  rooms,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (
    type: "adults" | "child" | "rooms",
    value: number
  ) => {
    onChange({ adults, child, rooms, [type]: value });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-fit justify-between !mt-0">
          {adults} Adult(s), {child} Child(ren), {rooms} Room(s)
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="p-4 space-y-4">
          {/* Adults input */}
          <div className="flex justify-between">
            <label>Adults</label>
            <Input
              type="number"
              value={adults}
              onChange={(e) =>
                handleInputChange("adults", Math.max(1, Number(e.target.value)))
              }
              min={1}
              max={10}
              className="w-[60px]"
            />
          </div>

          {/* Children input */}
          <div className="flex justify-between">
            <label>Children</label>
            <Input
              type="number"
              value={child}
              onChange={(e) =>
                handleInputChange("child", Math.max(0, Number(e.target.value)))
              }
              min={0}
              max={10}
              className="w-[60px]"
            />
          </div>

          {/* Rooms input */}
          <div className="flex justify-between">
            <label>Rooms</label>
            <Input
              type="number"
              value={rooms}
              onChange={(e) =>
                handleInputChange("rooms", Math.max(1, Number(e.target.value)))
              }
              min={1}
              max={5}
              className="w-[60px]"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
