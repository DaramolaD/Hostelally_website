"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/icons/logo.svg";
import { Button } from "../ui/button";
import { AlignJustify, Settings, UserRound, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { getUserInitials } from "@/utils/helper";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "@/services/auth";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { user, setUser } = useUser();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Services", href: "/sevices" },
    { label: "Blog", href: "/blog" },
  ];

  // Function to get initials from first and last name
  const userInitials = user ? getUserInitials(user) : "User"; // Now passing `user` that has `user.user`

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      toast({
        title: "Success",
        description: data.message,
        iconType: "success",
      });
      setUser(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error?.message || "Sign-in failed",
        iconType: "error",
      });
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <header
      aria-label="Main header"
      className="fixed top-0 z-40 w-full flex px-3 md:px-0 items-center justify-center"
    >
      <div className="container flex items-center justify-between py-2 bg-[#E5E5EA] rounded-full mt-5">
        {/* Logo with accessible link */}
        <Link
          href="/"
          aria-label="Homepage"
          className="flex items-center p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded"
        >
          <Image
            src={logo}
            alt="Company logo"
            width={62}
            height={58}
            className="max-md:w-12"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden lg:flex gap-3 lg:gap-6">
          {navLinks.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              className="text-black/70 hover:text-black underline-offset-4 decoration-2 decoration-black hover:underline focus:outline-none focus:ring-2 focus:ring-black rounded"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex gap-2">
          <Button variant="outline" onClick={() => router.push("/contact-us")}>
            Contact-Us
          </Button>

          {user ? (
            <NavigationMenu>
              <NavigationMenuItem className="!list-none">
                <NavigationMenuTrigger className="w-fit px-2 rounded-full !size-10 !bg-black !text-white font-semibold !list-none">
                  {/* <div className="flex bg-black text-white size-10 justify-center items-center border rounded-full border-gray-500"> */}
                  {userInitials}
                  {/* </div> */}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col p-1 px-1 w-fit">
                    <li className="flex items-center px-1  hover:bg-gray-300 rounded-sm">
                      <UserRound className="size-5" />
                      <Link href="/" className="block p-2 text-sm">
                        Profile
                      </Link>
                    </li>
                    <li className="flex items-center px-1 hover:bg-gray-300 rounded-sm">
                      <Settings className="size-5" />
                      <Link href="/" className="block p-2 text-sm">
                        Bookings
                      </Link>
                    </li>
                    <li className="flex items-center mt-1">
                      <Button
                        onClick={handleLogout}
                        className="w-full  text-sm"
                      >
                        Logout
                      </Button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          ) : (
            <Link
              href="/sign-in"
              className="h-10 px-4 py-2 bg-primary text-center text-primary-foreground shadow hover:bg-primary/90 flex items-center rounded-md text-sm"
            >
              SignIn / Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="flex lg:hidden hover:bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <AlignJustify size={24} />
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 left-0 h-screen w-3/4 bg-green-100 z-40 transition-transform duration-300 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col items-start gap-6 p-6">
            {/* Logo in Mobile Menu */}
            <div className="flex w-full items-center justify-between pt-2 mb-6">
              <Link href="/" aria-label="Homepage">
                <Image
                  src={logo}
                  alt="Company logo"
                  width={62}
                  height={58}
                  className="max-md:w-12"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex md:hidden hover:bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col items-start gap-6"
            >
              {navLinks.map(({ label, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-black/70 hover:text-black underline-offset-4 decoration-2 decoration-black hover:underline text-lg focus:outline-none focus:ring-2 focus:ring-black rounded"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <Button variant="outline">Contact</Button>
              <Button>Book A Room</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
