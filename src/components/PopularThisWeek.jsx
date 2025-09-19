import React from 'react';

const PopularThisWeek = () => {
  const products = [
    {
      id: 1,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$89.99",
      image: "/assets/Figam/person1.png",
      category: "Jackets"
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse", 
      price: "$65.00",
      image: "/assets/Figam/Rectangle 56.png",
      category: "Sweaters"
    },
    {
      id: 3,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$29.99", 
      image: "/assets/Figam/Rectangle 57.png",
      category: "T-Shirts"
    },
    {
      id: 4,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      price: "$45.00",
      image: "/assets/Figam/Rectangle 47.png",
      category: "Blouses"
    }
  ];

  return (
    <section className="py-16 bg-white font-euclid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 relative after:content-[''] after:absolute after:left-[50%] after:-translate-x-[50%] after:-bottom-2 after:rounded-full after:w-[15%] after:h-[4px] after:bg-black">
            POPULAR THIS WEEK
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="text-left">
                <h3 className="font-semibold  text-sm text-gray-700 mb-2">
                  {product.name}
                </h3>
               <div className='flex gap-3 items-center'>
               <p className="font-bold text-lg text-gray-700 ">{product.price}</p>
               <p className="font-bold  text-gray-400 text-sm line-through">{product.price}</p>
               <a href="/" className='line-clamp-1 text-sm  ml-[10px]'>+ Add To Card</a>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularThisWeek;
