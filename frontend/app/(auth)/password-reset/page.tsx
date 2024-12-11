"use client";
import React from "react";
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
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { forGotPassword } from "@/services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forGotPasswordSchema } from "@/libs/validation";
import { z } from "zod";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(forGotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: forGotPassword,
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
        iconType: "success",
      });
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Sign-in failed",
        iconType: "error",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof forGotPasswordSchema>) => {
    mutation.mutate({ email: values.email });
  };
  return (
    <section className="flex py-10 min-h-screen items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>
            Enter your email address to receive a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
            <div className="mt-4 text-center text-sm">
              Remembered your password?{" "}
              <Link href="/sign-in" className="underline ml-1">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
