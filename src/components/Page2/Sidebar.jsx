import React, { useState } from 'react';

const Sidebar = ({ filters, setFilters }) => {
  const [openSections, setOpenSections] = useState({
    price: true,
    filters: true,
    brands: true,
    categories: true,
    size: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const brands = ['Women', 'Men', 'Kids', 'Brands'];
  const categories = ['Dresses', 'Top', 'Lingerie & Lounge Wear', 'Blouse', 'Vintage'];
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB'];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {/* Price Range */}
      <div className="mb-8">
        <div 
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-semibold text-lg">PRICES</h3>
          <span className="text-gray-400">{openSections.price ? '−' : '+'}</span>
        </div>
        {openSections.price && (
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Range:</span>
              <span>$100 - $350</span>
            </div>
            <div className="relative">
              <input 
                type="range" 
                min="50" 
                max="500" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div 
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection('filters')}
        >
          <h3 className="font-semibold text-lg">FILTERS</h3>
          <span className="text-gray-400">{openSections.filters ? '−' : '+'}</span>
        </div>
        {openSections.filters && (
          <div className="space-y-3">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                <span className="text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="mb-8">
        <div 
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection('brands')}
        >
          <h3 className="font-semibold text-lg">BRANDS</h3>
          <span className="text-gray-400">{openSections.brands ? '−' : '+'}</span>
        </div>
        {openSections.brands && (
          <div className="space-y-3">
            {['Fendi', 'Prada', 'Versace', 'Gucci & Dolce Gabbana', 'Zara', 'H&M'].map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                <span className="text-gray-700">{brand}</span>
              </label>
            ))}
            <button className="text-[#DE4F46] text-sm">See more</button>
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div 
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection('categories')}
        >
          <h3 className="font-semibold text-lg">CATEGORIES</h3>
          <span className="text-gray-400">{openSections.categories ? '−' : '+'}</span>
        </div>
        {openSections.categories && (
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input type="checkbox" className="mr-3 rounded" />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="mb-8">
        <div 
          className="flex justify-between items-center cursor-pointer mb-4"
          onClick={() => toggleSection('size')}
        >
          <h3 className="font-semibold text-lg">SIZE</h3>
          <span className="text-gray-400">{openSections.size ? '−' : '+'}</span>
        </div>
        {openSections.size && (
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className="border border-gray-300 rounded px-3 py-2 text-sm hover:border-gray-500 transition-colors"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
