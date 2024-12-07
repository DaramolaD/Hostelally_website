"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/services/auth";
import { signUpSchema, userInfoSchema } from "@/libs/validation";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null); // Store step 1 data

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(currentStep === 1 ? signUpSchema : userInfoSchema), // Update schema based on step
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      toast({
        title: "Success",
        description: data.message,
        iconType: "success",
        className: "bg-green-200 text-semibold top-0",
      });
      router.push("/sign-in");
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Sign-in failed",
        iconType: "error",
        className: "bg-red-200 text-semibold top-0",
      });
    },
  });

  // Step 1 Data Interface
  interface Step1Data {
    email: string;
    password: string;
    confirmPassword: string;
  }

  // Step 2 Data Interface
  interface Step2Data {
    firstName: string;
    lastName: string;
  }

  // Combined Data Interface
  type FinalData = Step1Data & Step2Data;

  const onSubmit = (values: Step1Data & Partial<Step2Data>) => {
    if (currentStep === 1) {
      // Store step 1 data and move to step 2
      const step1Inputs: Step1Data = {
        email: values.email || "", // Ensure email is a string
        password: values.password || "", // Ensure password is a string
        confirmPassword: values.confirmPassword || "", // Ensure confirmPassword is a string
      };

      setStep1Data(step1Inputs); // Save step 1 data
      setCurrentStep(2); // Move to step 2
    } else {
      if (!step1Data) {
        console.error("Step 1 data is missing!");
        return; // Exit early if step1Data is null
      }

      // Merge step 1 and step 2 data
      const finalData: FinalData = {
        email: step1Data.email, // Already guaranteed as string
        password: step1Data.password,
        confirmPassword: step1Data.confirmPassword,
        firstName: values.firstName || "", // Provide default values
        lastName: values.lastName || "", // Provide default values
      };

      // Submit final data
      mutation.mutate(finalData);
    }
  };

  return (
    <section className="flex py-10 min-h-screen items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Create your account by entering the details below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {currentStep === 1 && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative flex">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password")}
                      className={errors.password ? "border-red-500" : ""}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-2 flex items-center justify-center text-gray-500 hover:text-gray-800"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative flex">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      {...register("confirmPassword")}
                      className={errors.confirmPassword ? "border-red-500" : ""}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-2 flex items-center justify-center text-gray-500 hover:text-gray-800"
                      aria-label="Toggle password visibility"
                    >
                      {showConfirmPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  Next
                </Button>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  {mutation.isPending
                    ? "Creating Account..."
                    : "Create Account"}
                </Button>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignUp;
