import React from 'react';

const cardData = [
  [
    {
      title: "Exclusive Shoes",
      image: "/assets/Figam/Rectangle 47.png",
      subTitle: "Exclusive Shoes",
      price: "PRICE 20% OFF",
      code: "DISCOUNT CODE - VATR3920",
    },
    {
      title: "Exquisite Styles & Collections",
      image: "/assets/Figam/Rectangle 51.png",
      subTitle: "Exclusive Shoes",
      price: "PRICE 20% OFF",
      code: "DISCOUNT CODE - VATR3920",
    },
  ],
  [
    {
      title: "New Arrivals",
      image: "/assets/Figam/Rectangle 57.png",
      subTitle: "Exclusive Shoes",
      price: "PRICE 20% OFF",
      code: "DISCOUNT CODE - VATR3920",
    },
    {
      title: "New Arrivals",
      image: "/assets/Figam/Rectangle 56.png",
      subTitle: "Exclusive Items",
      price: "PRICE 20% OFF",
      code: "DISCOUNT CODE - VATR3920",
    },
  ],
];

const WeekHighlights = () => {
  return (
    <section className="py-16 bg-white font-euclid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 relative 
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
            after:-bottom-2 after:rounded-full after:w-[15%] after:h-[4px] after:bg-black after:mt-1">
            THIS WEEK'S HIGHLIGHTS
          </h2>  
        </div>
        
        {/* Responsive Grid Layout */}
        <div className="w0%] mx-auto grid grid-cols-1 md:grid-rows-2 gap-y-4">
          {cardData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`bg-white grid gap-3
                grid-cols-1
                ${groupIndex === 0 ? "md:grid-cols-[40%_50%]" : "md:grid-cols-[50%_40%]"}
                justify-center
              `}
            >
              {group.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="flex items-center justify-center relative min-h-[300px]  overflow-hidden"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h2 className="text-white font-bold text-3xl text-center px-4">
                    {card.title}
                  </h2>
                  <div className="w-[180px] h-[100px] bg-[#000000]/30 absolute left-0 bottom-0 rounded-tr-2xl p-2">
                    <h2 className="text-gray-100 text-sm">{card.subTitle}</h2>
                    <p className="text-gray-50 text-xs">{card.price}</p>
                    <p className="text-gray-50 text-[11px]">{card.code}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeekHighlights;
