import React from "react";

const HostelImageGallery = () => {
  return (
    <section className="bg-[#C7C7CC] py-16 md:py-20 hover:shadow-md max-w-screen-2xl mx-auto">
      <div className="container mx-auto flex gap-11 justify-between items-center">
        <div className="grid grid-cols-5 gap-4 items-center w-full">
          <div className="flex bg-[#E5E5EA] w-[235px] h-[521px]"></div>
          <div className="flex bg-[#E5E5EA] w-[235px] h-[481px]"></div>
          <div className="flex bg-[#E5E5EA] w-[235px] h-[427px]"></div>
          <div className="flex bg-[#E5E5EA] w-[235px] h-[357px]"></div>
          <div className="flex bg-[#E5E5EA] w-[235px] h-[307px]"></div>
        </div>
      </div>
    </section>
  );
};

export default HostelImageGallery;
