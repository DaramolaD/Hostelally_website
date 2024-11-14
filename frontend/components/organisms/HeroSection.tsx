import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-[#E5E5EA] max-w-screen-2xl mx-auto'>
      <div className="container relative w-full py-40 pt-44">
        <div className="flex flex-col w-full max-w-[735px] gap-2">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium !leading-snug">
            Your Home Away From Home — <br />
            For Rest, Work, and Connection
          </h1>
          <p className='text-base lg:text-xl'>
            Whether you&apos;re here to explore, focus on work, or take a break,
            our hostels offer the comfort, community, and flexibility you need
            to feel at home, wherever you are.
          </p>
        </div>
        <div className="absolute -bottom-10 w-full max-w-[1000px] mx-auto px-5 right-0 left-0 flex h-20 z-20">
          <div className="flex w-full bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection