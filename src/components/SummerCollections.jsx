import React from 'react';

const SummerCollections = () => {
  return (
    <section 
      className="py-16 font-euclid relative bg-cover bg-center bg-no-repeat w-[90%] mx-auto"
      style={{
        backgroundImage: `url('/assets/Figam/image 6.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-96">
          {/* Left Content */}
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              SUMMER <span className="text-[#DE4F46]">COLLECTIONS</span>
            </h2>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-100 transition-all duration-300 uppercase">
              SHOP NOW
            </button>

            {/* Countdown Timer */}
            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">07</div>
                <div className="text-sm text-gray-200 uppercase">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15</div>
                <div className="text-sm text-gray-200 uppercase">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24</div>
                <div className="text-sm text-gray-200 uppercase">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">35</div>
                <div className="text-sm text-gray-200 uppercase">Seconds</div>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  );
};

export default SummerCollections;
