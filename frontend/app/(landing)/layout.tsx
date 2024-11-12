import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
