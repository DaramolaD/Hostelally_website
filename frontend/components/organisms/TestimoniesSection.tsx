"use client"
import React, { useRef, useState } from "react";
import Heading from "../atom/Header";
import TestimonyCard from "../molecules/TestimonyCard";

// Main Testimonies Section Component
const TestimoniesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonies = [
    {
      quote:
        "I was looking for a place that had good Wi-Fi and enough quiet to get work done, but I also didn’t want to feel isolated. This hostel was just what I needed! They had spaces where I could focus, and by evening, it was easy to join in and chat with others. Perfect balance.",
      role: "CEO, Marches Light",
      name: "John Doe",
    },
    {
      quote:
        "Our team retreat was a huge success thanks to the amazing amenities and relaxed vibe. It’s rare to find a hostel that caters to both solo travelers and groups so well.",
      role: "Team Lead, Visionary Labs",
      name: "Jane Smith",
    },
    {
      quote:
        "As a solo traveler, I loved the community feel here. Made some great friends and really enjoyed the local recommendations from the staff.",
      role: "Freelance Designer",
      name: "Alex Johnson",
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-[#E5E5EA] py-16 md:py-20 md:pt-40 hover:shadow-md">
      <div className="container mx-auto grid gap-11">
        {/* Section Header */}
        <div className="flex flex-col max-w-[820px] mx-auto gap-2 items-start md:items-center">
          <Heading level={2} size="md" align="center" weight="medium">
            Real Stories, Real Stays
          </Heading>
          <p className="text-base lg:text-xl font-medium text-start md:text-center">
            Hear from travelers, teams, and groups who&pos;ve found their perfect
            stay with us. From solo adventurers to company retreats, see how our
            hostels make every trip a little more memorable.
          </p>
        </div>

        {/* Testimonies List with Draggable Scroll */}
        <div
          ref={carouselRef}
          className="flex items-center justify-start gap-10 w-full overflow-x-auto py-4 cursor-grab scroll-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {testimonies.map((testimony, index) => (
            <TestimonyCard
              key={index}
              quote={testimony.quote}
              role={testimony.role}
              name={testimony.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;
