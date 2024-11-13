import React from "react";

interface Testimony {
  quote: string;
  role: string;
  name: string;
}

// Testimony Card Component
const TestimonyCard: React.FC<Testimony> = ({ quote, role, name }) => (
  <div className="flex flex-col gap-2 h-full w-[350px] md:w-[408px] bg-[#F2F2F7] p-6 items-center flex-shrink-0 rounded-lg shadow-md">
    <blockquote className="text-center text-base lg:text-lg font-medium">
      {quote}
    </blockquote>
    <p className="text-center text-sm text-gray-600 font-semibold mt-auto">
      {role}
    </p>
    <p className="text-center text-sm font-light">{name}</p>
    <div className="flex w-20 h-20 bg-[#C7C7CC] rounded-full"></div>
  </div>
);
export default TestimonyCard;
