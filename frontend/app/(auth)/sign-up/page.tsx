"use client";

import React, { useState } from "react";
import Link from "next/link";
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
import { Facebook } from "lucide-react";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "@/services/auth";
import { signUpSchema } from "@/libs/validation";

// Define the component
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const queryClient = useQueryClient();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["signup"] });
      alert("Account created successfully!");
    },
    onError: (error: Record<string, FieldError>) => {
      alert(error.response.message || "Sign-up failed");
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    console.log(values); 
    mutation.mutate({ email: values.email, password: values.password });
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
                  aria-label="Toggle confirm password visibility"
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
            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
          <div className="relative flex items-center gap-2 justify-center mt-4 text-sm">
            <span className="relative z-10 bg-white px-2">or use one of these options:</span>
            <span className="absolute inset-x-0 top-2/4 border-b border-gray-300 z-0"></span>
          </div>
          <div className="flex items-center gap-2 w-full mt-2">
            <Button variant="outline" className="w-full">
              <Facebook />
            </Button>
            <Button variant="outline" className="w-full">
              <Facebook />
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="/sign-in" className="underline ml-1">
              Sign In
            </Link>
          </div>
          <p className="mt-4 text-center text-xs">
            By creating an account, you agree to our
            <Link href="/terms-and-conditions" className="underline mx-1">
              Terms and Conditions
            </Link>
            and
            <Link href="/privacy-policy" className="underline ml-1">
              Privacy Policy
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignUp;
