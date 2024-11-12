"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/icons/logo.svg";
import { Button } from "../ui/button";
import { AlignJustify, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "Locations", href: "/location" },
    { label: "Blog", href: "/blog" },
  ];

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
          className="flex items-center p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 rounded"
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
        <nav aria-label="Main navigation" className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }, index) => (
            <Link
              key={index}
              href={href}
              className="text-black/70 hover:text-black underline-offset-4 decoration-2 decoration-black hover:underline focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-2">
          <Button variant="outline">Contact</Button>
          <Button>Book A Room</Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="flex md:hidden hover:bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
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
                className="flex md:hidden hover:bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
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
                  className="text-black/70 hover:text-black underline-offset-4 decoration-2 decoration-black hover:underline text-lg focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
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
