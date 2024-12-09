import { hotelTypes } from "@/utils/hotel-options-config";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { addHostel } from "@/libs/validation";
import { z } from "zod";

type AddHostelFormValues = z.infer<typeof addHostel>;

interface AddTypeSectionProps {
  register: UseFormRegister<AddHostelFormValues>;
  errors: FieldErrors<AddHostelFormValues>;
  watch: UseFormWatch<AddHostelFormValues>;
}

const AddTypeSection: React.FC<AddTypeSectionProps> = ({
  register,
  errors,
  watch,
}) => {
  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-lg font-normal mb-4">Type</h2>
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type, index) => (
          <Label
            key={index}
            htmlFor={`type-${index}`}
            className={`cursor-pointer text-sm rounded-md px-4 py-2 font-semibold ${
              typeWatch === type ? "bg-blue-300" : "bg-gray-300/30"
            }`}
          >
            <Input
              id={`type-${index}`}
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden" // Makes the input invisible
            />
            <span>{type}</span>
          </Label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default AddTypeSection;
