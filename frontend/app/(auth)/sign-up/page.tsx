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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative flex">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
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
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative flex">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-800"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
            <div className="flex items-center gap-2 justify-center mt-2 text-sm">
              <span>or use one of these options:</span>
            </div>
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              Continue with Facebook
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <Link href="/sign-in" className="underline ml-1">
              Sign In
            </Link>
          </div>
          <p className="mt-4 text-center text-xs">
            By creating an account, you agree with our
            <Link href="/terms-and-conditions" className="underline mx-1">
              Terms and Conditions
            </Link>
            and
            <Link href="/privacy-policy" className="underline ml-1">
              Privacy Statement
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignUp;
