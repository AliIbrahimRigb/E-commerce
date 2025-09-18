import React, { useState } from 'react';
import HomePage from './components/HomePage';
import { ShopPage } from './components/Page2';


function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'shop'

  return (
    <div className="App">
      {currentPage === 'home' ? <HomePage /> : <ShopPage />}
      
      {/* Navigation buttons for testing */}
      <div className="fixed bottom-4 right-4 flex gap-2 z-50">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`px-4 py-2 rounded ${currentPage === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('shop')}
          className={`px-4 py-2 rounded ${currentPage === 'shop' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Shop
        </button>
      </div>
    </div>
  );
}

export default App;