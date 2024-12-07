"use client";
import AddDetailSection from "@/components/form/AddDetailSection";
import AddFacilitiesSection from "@/components/form/AddFacilitiesSection";
import AddTypeSection from "@/components/form/AddTypeSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addHostel } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof addHostel>>({
    resolver: zodResolver(addHostel),
    defaultValues: {
      roomName: "",
      city: "",
      country: "",
      pricePerNight: "",
      description: "",
      type: "",
      facilities: [], // Explicitly typed as `string[]`
    },
  });
  
  const onSubmit = (values: z.infer<typeof addHostel>) => {
    console.log("values", values);

    // mutation.mutate({ email: values.email, password: values.password });
  };
  return (
    <>
      <section className="relative max-w-screen-2xl mx-auto">
        <div className="container flex flex-col gap-10 relative w-full h-fit z-10 py-28 pt-40">
          <div className="flex flex-col w-full max-w-[735px] gap-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium !leading-snug">
              Add New Hostel
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">
              Kindly fill up the following detials to add a new room
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Card className="mx-auto w-full border-0 shadow-none">
              <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                  <AddDetailSection register={register} errors={errors} />
                  <AddTypeSection
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
                  <AddFacilitiesSection
                    register={register}
                    errors={errors}
                    watch={watch}
                  />
                  <Button type="submit" className="w-full">
                    Continue with Email
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRoom;
