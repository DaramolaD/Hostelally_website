import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { addHostel } from "@/libs/validation";
import { z } from "zod";

// Type definition for the form values
type AddHostelFormValues = z.infer<typeof addHostel>;

interface AddDetailSectionProps {
  register: UseFormRegister<AddHostelFormValues>;
  errors: FieldErrors<AddHostelFormValues>;
}

const AddDetailSection: React.FC<AddDetailSectionProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="roomName">Room Name</Label>
        <Input
          id="roomName"
          type="text"
          placeholder="Enter room name"
          {...register("roomName")}
          className={errors.roomName ? "border-red-500" : ""}
        />
        {errors.roomName && (
          <span className="text-red-500 text-sm">
            {errors.roomName.message}
          </span>
        )}
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="city">City</Label>
          <div className="flex flex-col h-full flex-grow">
            <Input
              id="city"
              type="text"
              placeholder="Enter city"
              {...register("city")}
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="country">Country</Label>
          <div className="flex flex-col h-full flex-grow">
            <Input
              id="country"
              type="text"
              placeholder="Enter country"
              {...register("country")}
              className={errors.country ? "border-red-500" : ""}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter your room description"
          {...register("description")}
          className={errors.description ? "border-red-500" : ""}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="pricePerNight">Price Per Night</Label>
        <Input
          id="pricePerNight"
          type="number"
          placeholder="Enter price per night"
          {...register("pricePerNight")}
          className={errors.pricePerNight ? "border-red-500" : ""}
        />
        {errors.pricePerNight && (
          <span className="text-red-500 text-sm">
            {errors.pricePerNight.message}
          </span>
        )}
      </div>
    </>
  );
};

export default AddDetailSection;
