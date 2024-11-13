"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Mail, Map, Phone, User, UserRound } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  birthDate: z.date().optional(), // Date field
});

const ContactForm = () => {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      birthDate: new Date(), // Default to today's date
    },
  });

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
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
            fieldType={FormFieldType.INPUT}
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
            iconSrc={<Phone />}
            iconAlt="message"
            label="Message"
          />

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
