"use client";
import React, { useRef, useState } from "react";

const HostelImageGallery = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    <section className="bg-[#C7C7CC] py-16 md:py-20 hover:shadow-md max-w-screen-2xl mx-auto">
      <div className="container mx-auto flex gap-11 justify-between items-center">
        <div
          ref={carouselRef}
          className="flex items-center gap-4 overflow-scroll w-full cursor-grab scroll-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="flex bg-[#E5E5EA] min-w-[235px] h-[521px]"></div>
          <div className="flex bg-[#E5E5EA] min-w-[235px] h-[481px]"></div>
          <div className="flex bg-[#E5E5EA] min-w-[235px] h-[427px]"></div>
          <div className="flex bg-[#E5E5EA] min-w-[235px] h-[357px]"></div>
          <div className="flex bg-[#E5E5EA] min-w-[235px] h-[307px]"></div>
        </div>
      </div>
    </section>
  );
};

export default HostelImageGallery;
