import React from 'react';

const BrandLogos = () => {
  const brands = [
    { name: "VERSACE", logo: "/assets/assets/Figam/Rectangle 65.png" },
    { name: "ZARA", logo: "/assets/Figam/Rectangle 66.png" },
    { name: "GUCCI", logo: "/assets/Figam/Rectangle 67.png" },
    { name: "PRADA", logo: "assets/Figam/Rectangle 68.png" },
    { name: "Calvin Klein", logo: "/assets/Figam/Rectangle 69.png" }
  ];

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto filter brightness-0 invert hover:brightness-75 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
