import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { addHostel } from "@/libs/validation";

// Type definition for the form values
type AddHostelFormValues = z.infer<typeof addHostel>;

interface AddGuestSectionProps {
  register: UseFormRegister<AddHostelFormValues>;
  errors: FieldErrors<AddHostelFormValues>;
}

const AddGuestSection: React.FC<AddGuestSectionProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <div>
        <h2 className="text-lg font-normal mb-4">Add Guests</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-5 bg-gray-100 rounded-md">
          <div className="flex flex-col gap-2">
            <Label htmlFor="adultCount">Adults</Label>
            <div className="flex flex-col gap-2 h-full flex-grow">
              <Input
                id="adultCount"
                type="number"
                placeholder="Enter number of Adult"
                {...register("adultCount", { valueAsNumber: true })}
                className={`bg-white lg:py-5 ${
                  errors.adultCount ? "border-red-500" : ""
                }`}
              />
              
              {errors.adultCount && (
                <span className="text-red-500 text-sm">
                  {errors.adultCount.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="childCount">Children</Label>
            <div className="flex flex-col gap-2 h-full flex-grow">
              <Input
                id="childCount"
                type="number"
                placeholder="Enter number of Children"
                {...register("childCount", { valueAsNumber: true })}
                className={`bg-white lg:py-5 ${
                  errors.childCount ? "border-red-500" : ""
                }`}
              />
              {errors.childCount && (
                <span className="text-red-500 text-sm">
                  {errors.childCount.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGuestSection;
