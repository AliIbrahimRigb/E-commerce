import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-orange-400 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ladies Top
          </h1>
          <p className="text-white text-lg opacity-90 mb-6">
            Look sales this month. Get up to 60% Discount on all products
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
