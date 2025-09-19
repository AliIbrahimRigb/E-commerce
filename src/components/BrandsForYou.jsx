import React from 'react';

const BrandsForYou = () => {
  const brands = [
    { name: "VERSACE", logo: "/assets/Figam/Rectangle 65.png" },
    { name: "ZARA", logo: "/assets/Figam/Rectangle 66.png" },
    { name: "GUCCI", logo: "/assets/Figam/Rectangle 67.png" },
    { name: "PRADA", logo: "/assets/Figam/Rectangle 68.png" },
    { name: "Calvin Klein", logo: "/assets/Figam/Rectangle 69.png" },
    { name: "GUCCI", logo: "/assets/Figam/Rectangle 70.png" }
  ];

  return (
    <section className="py-16 bg-white font-euclid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb">
            BRANDS FOR YOU
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsForYou;
