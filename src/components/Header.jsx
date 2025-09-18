import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-euclid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900">Laura's Closet</a>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search for an Item..."
                    className="block w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-800 transition-colors"
                />
            </div>
          </div>

          {/* Right Side: Nav (Desktop) + Hamburger (Mobile) */}
          <div className="flex items-center">
            <nav className="hidden lg:flex items-center space-x-4 text-gray-700">
                {/* Shop Icon */}
                <button aria-label="Shop" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 10a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
                    </svg>
                </button>
                
                {/* Heart/Wishlist Icon */}
                <button aria-label="Wishlist" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                    </svg>
                </button>
                
                {/* User/Account Icon */}
                <button aria-label="Account" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                
                {/* Basket with existing icon */}
                <button className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <img src="/src/assets/Figam/shopping-basket 1.png" alt="Basket" className="h-5 object-contain"/>
                </button>
            </nav>
            <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {/* Mobile Search */}
            <div className="relative mb-4 px-2">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search for an Item..."
                    className="block w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-row justify-around px-2 py-2 text-gray-700">
                {/* Shop Icon */}
                <button aria-label="Shop" className="p-3 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 10-8 0v4M5 9h14l-1 10a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
                    </svg>
                </button>
                
                {/* Heart/Wishlist Icon */}
                <button aria-label="Wishlist" className="p-3 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                    </svg>
                </button>
                
                {/* User/Account Icon */}
                <button aria-label="Account" className="p-3 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                
                {/* Basket Icon */}
                <button className="p-3 rounded-full hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    <img src="/src/assets/Figam/shopping-basket 1.png" alt="Basket" className="h-6 object-contain"/>
                </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
