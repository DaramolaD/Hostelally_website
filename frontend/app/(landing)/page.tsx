import HeroSection from "@/components/organisms/HeroSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import AboutUsSection from "@/components/organisms/AboutUsSection";
import HostelListingSection from "@/components/organisms/HostelListingSection";
import TestimoniesSection from "@/components/organisms/TestimoniesSection";
import CtaSection from "@/components/organisms/CtaSection";
import HelpSection from "@/components/organisms/HelpSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutUsSection />
      <HostelListingSection />
      <TestimoniesSection />
      <CtaSection />
      <HelpSection />
    </>
  );
}
