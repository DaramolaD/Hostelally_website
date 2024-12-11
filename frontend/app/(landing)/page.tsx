import HeroSection from "@/components/organisms/HeroSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import AboutUsSection from "@/components/organisms/AboutUsSection";
import HostelListingSection from "@/components/organisms/HostelListingSection";
import TestimoniesSection from "@/components/organisms/TestimoniesSection";
import CtaSection from "@/components/organisms/CtaSection";
import HelpSection from "@/components/organisms/HelpSection";
import HostelImageGallery from "@/components/organisms/HostelImageGallery";
import ServiceListingSection from "@/components/organisms/ServiceListingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutUsSection />
      <HostelListingSection />
      <ServiceListingSection />
      <TestimoniesSection />
      <HostelImageGallery />
      <CtaSection />
      <HelpSection />
    </>
  );
}
