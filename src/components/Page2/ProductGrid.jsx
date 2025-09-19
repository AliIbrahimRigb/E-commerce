import React from 'react';

const ProductGrid = () => {
  // Sample product data - using the same image for all products as shown in the design
  const products = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    price: "$120.23",
    originalPrice: "$150.23",
    discount: "20% Orders",
    image: "/assets/Figam/Rectangle 56.png", // Using one of the available images
    rating: 4.5,
    isNew: index < 3
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm">
          {/* Product Image */}
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Wishlist Icon */}
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>

            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                {product.discount}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-2 self-start">
            <h3 className="font-medium text-gray-900 mb-2 text-left w-[200px] text-sm">
              {product.name}
            </h3>
            
            {/* Rating */}
            

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                )}
              </div>
              
              <button className="text-sm font-medium hover:text-blue-700 bg-black text-white px-1 text-sm self-end">
              New Arrivals
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
