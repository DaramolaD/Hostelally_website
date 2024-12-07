import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { hotelFacilities } from "@/utils/hotel-options-config";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { addHostel } from "@/libs/validation";
import { z } from "zod";

type AddHostelFormValues = z.infer<typeof addHostel>;

interface AddFacilitiesSectionProps {
  register: UseFormRegister<AddHostelFormValues>;
  errors: FieldErrors<AddHostelFormValues>;
  watch: UseFormWatch<AddHostelFormValues>;
}

const AddFacilitiesSection: React.FC<AddFacilitiesSectionProps> = ({
  register,
  errors,
  watch,
}) => {
  const facilitiesWatch = watch("facilities") || []; // Watch for facilities changes

  return (
    <div>
      <h2 className="text-lg font-normal mb-4">Add Facilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotelFacilities.map((facility, index) => (
          <Label
            key={index}
            htmlFor={`facilities-${index}`}
            className={`flex items-center gap-2 cursor-pointer text-sm rounded-md px-4 py-2 font-semibold ${
              facilitiesWatch.includes(facility)
                ? "bg-blue-300"
                : "bg-gray-100"
            }`}
          >
            <Input
              id={`facilities-${index}`}
              type="checkbox"
              value={facility}
              {...register("facilities")}
              className="w-fit h-4" // Hide the checkbox
            />
            <span>{facility}</span>
          </Label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm mt-2">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default AddFacilitiesSection;
