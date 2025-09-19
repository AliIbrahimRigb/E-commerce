import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative h-screen font-euclid overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] h-full">
        {/* Left Content - Dark Navy Section */}
        <div className="bg-slate-900 flex items-center justify-start px-8 lg:px-16 py-16">
          <div className="max-w-md text-left">
            <h1 className="text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Get up to 30% off<br/>
            </h1>
            <span className='text-[#F7C59F] font-euclid text-4xl font-bold '>New Arrivals</span>
            <p className="text-gray-300 text-base mb-8 leading-relaxed mt-4">
              Unleashing the best collection of products
            </p>
            <button className="bg-black  text-[#FAFAFA] gap-2 px-8 py-3 flex rounded-md items-center border border-solid border-white text-base font-semibold  transition-all duration-300 uppercase">
              Place your Order
              <img src="/assets/Figam/Vector 8.svg" alt="" className='w-6 h-5'/>
            </button>
          </div>
        </div>

        {/* Right Image - Peach/Orange Section */}
        <div className="bg-[#F7C59F] relative flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Large Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-white rounded-full "></div>
            </div>
            
            {/* Model Image */}
            <img
              src="/assets/Figam/image-removebg-preview 1.png"
              alt="Fashion Model"
              className="relative z-10 h-[80%] w-auto object-contain max-h-full"
            />
            
            {/* Decorative Elements */}
            <div className="absolute top-16 right-16 w-10 h-10">
              <div className="w-full h-full bg-slate-900 transform rotate-45"></div>
            </div>
            
            <div className="absolute bottom-24 left-16 w-8 h-8">
              <div className="w-full h-full bg-slate-900 transform rotate-45"></div>
            </div>

            {/* Small Floating Elements */}
            <div className="absolute top-1/3 left-12 w-5 h-5 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-1/3 right-12 w-4 h-4 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
