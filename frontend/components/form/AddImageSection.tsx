import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { addHostel } from "@/libs/validation";

// Define types for form values and props
type AddHostelFormValues = z.infer<typeof addHostel>;

interface AddImageSectionProps {
  register: UseFormRegister<AddHostelFormValues>;
  errors: FieldErrors<AddHostelFormValues>;
}

const AddImageSection: React.FC<AddImageSectionProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Images</h2>
      <Input
        type="file"
        accept="image/*"
        multiple
        {...register("image")}
        className={`${errors.image ? "border-red-500" : ""}`}
      />
      {errors.image && (
        <p className="text-red-500 text-sm">
          {typeof errors.image.message === "string" && errors.image.message}
        </p>
      )}
    </div>
  );
};

export default AddImageSection;
