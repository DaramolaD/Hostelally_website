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
import { Facebook } from "lucide-react";

export default function SignIn() {
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/password-reset" className="ml-auto text-sm underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
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

            <Button variant="outline" className="w-full">
              <Facebook />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full">
              <Facebook />
              Continue with Facebook
            </Button>
          </div>
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
