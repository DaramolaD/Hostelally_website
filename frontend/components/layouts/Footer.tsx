import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/icons/logo.svg";
import { Facebook, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About Us",
      links: [
        { name: "About HostelAlly", href: "/about-us" },
        { name: "Our Story", href: "/our-story" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Hostels",
      links: [
        { name: "Locations", href: "/locations" },
        { name: "Room Options", href: "/room-options" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "/faqs" },
        { name: "Customer Support", href: "/customer-support" },
        { name: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      title: "Policies",
      links: [
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Travel Blog", href: "/blog" },
        { name: "Travel Guides", href: "/guides" },
        { name: "Newsletter", href: "/newsletter" },
      ],
    },
  ];
  // Social Media Links Array
  const socialMediaLinks = [
    { name: "Facebook", href: "https://www.facebook.com", icon: <Facebook /> },
    { name: "Twitter", href: "https://www.twitter.com", icon: <TwitterIcon /> },
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: <Instagram />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: <LinkedinIcon />,
    },
  ];

  return (
    <footer
      aria-label="Footer"
      className="bg-white p-6 max-w-screen-2xl mx-auto"
    >
      <div className="container mx-auto flex flex-col justify-between items-start md:items-center gap-14 pt-10">
        {/* Company Info and Logo */}
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/"
            aria-label="Homepage"
            className="flex w-fit items-center p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 rounded"
          >
            <Image
              src={logo}
              alt="Company logo"
              width={62}
              height={58}
              className="max-md:w-12"
            />
          </Link>
          <p>
            More Than a Place to Stay — <br /> It&apos;s Home
          </p>

          {/* Social Media Links */}
          <nav aria-label="Social media links" className="flex gap-2">
            {socialMediaLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={`Follow us on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black"
              >
                {social.icon}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Navigation Links */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full justify-between"
        >
          {footerSections.map((section, index) => (
            <div key={index} className="flex w-fit flex-col text-start gap-2">
              <h3 className="text-lg font-medium">{section.title}</h3>
              <ul className="grid gap-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href} // Directly using the href from footerSections
                      aria-label={`Go to ${link.name}`}
                      className="text-black/70 hover:text-black underline-offset-4 decoration-2 decoration-black hover:underline focus:outline-none focus:ring-2 focus:ring-black rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 flex flex-col items-center">
        <hr className="w-full border-black/20 mb-6 md:mb-12" />

        {/* Company Name and Copyright */}
        <h2
          className="text-4xl sm:text-8xl md:text-9xl font-bold text-black tracking-wide"
          aria-label="Company Name at footer"
        >
          HostelAlly
        </h2>

        <hr className="w-full border-black/20 my-6 md:my-12" />

        <p className="text-center text-black/70 mt-4">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
