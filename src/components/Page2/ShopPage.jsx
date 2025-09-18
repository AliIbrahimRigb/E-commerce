import React, { useState } from 'react';
import Header from '../Header';
import ProductGrid from './ProductGrid';
import Sidebar from './Sidebar';
import Banner from './Banner';
import Pagination from './Pagination';
import Footer from '../Footer'
const ShopPage = () => {
  const [filters, setFilters] = useState({
    priceRange: [100, 350],
    categories: [],
    brands: [],
    colors: [],
    sizes: []
  });

  const [sortBy, setSortBy] = useState('New Arrivals');

  return (
    <div className="min-h-screen bg-white font-euclid">
      <Header />
      <Banner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-1/4 hidden lg:block">
            <Sidebar filters={filters} setFilters={setFilters} />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing 1-20 out of 2,356 Products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  <option>New Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>
            
            {/* Product Grid */}
            <ProductGrid />
            
            {/* Pagination */}
            <Pagination />
            
          </div>
        </div>
      </div>
      <Footer className='w-full'/>
    </div>
  );
};

export default ShopPage;
