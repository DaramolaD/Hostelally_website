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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/libs/validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "@/services/auth";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import fbImg from "@/public/assets/imgs/facebook.png";
import googleImg from "@/public/assets/imgs/google.png";
import Image from "next/image";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: async (data) => {
      // Invalidate the query related to user authentication or token validation
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      toast({
        title: "Success",
        description: data.message,
        iconType: "success",
      });
      router.push("/");
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Sign-in failed",
        iconType: "error",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof signInSchema>) => {
    mutation.mutate({ email: values.email, password: values.password });
  };
  return (
    <section className="flex py-10 min-h-screen items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/password-reset"
                  className="ml-auto text-sm underline"
                >
                  Forgot password?
                </Link>
              </div>
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
            </div>
            <Button type="submit" className="w-full">
              Continue with Email
            </Button>
            <div className="relative flex items-center gap-2 justify-center mt-2 text-sm">
              <span className="relative z-10 bg-white px-2 py-2">
                or use one of these options:
              </span>
              <span className="absolute inset-x-0 top-2/4 border-b border-gray-300 z-0"></span>
            </div>
            <div className="flex items-center gap-2 w-full">
              <Button variant="outline" className="w-full">
                <Image
                  src={fbImg}
                  alt="facebookIcon"
                  className="w-auto h-full"
                />
              </Button>
              <Button variant="outline" className="w-full">
                <Image
                  src={googleImg}
                  alt="facebookIcon"
                  className="w-auto h-full"
                />
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <Link href="/sign-up" className="underline ml-1">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
