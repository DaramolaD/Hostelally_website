"use client";
import React from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import { Mail, Phone, UserRound } from "lucide-react";
import { formSchema } from "@/lib/validation";

// Define the ContactForm component
const ContactForm = () => {
  // Initialize form with useForm, using zodResolver to enforce schema validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      birthDate: new Date(), // Default to today's date
    },
  });

  // Define submit handler to process form values
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Handle form submission here
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="username"
            placeholder="John Doe"
            iconSrc={<UserRound />}
            iconAlt="user"
            label="Name"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            placeholder="Enter your email"
            iconSrc={<Mail />}
            iconAlt="email"
            label="Email"
          />
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="mobile"
            placeholder="+000-0000000000"
            iconSrc={<Phone />}
            iconAlt="mobile"
            label="Mobile"
          />
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="message"
            placeholder="Type in Your Message"
            label="Message"
          />

          {/* Submit Button */}
          <Button size="lg" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
