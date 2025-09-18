import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import WeekHighlights from './WeekHighlights';
import PopularThisWeek from './PopularThisWeek';
import BrandsForYou from './BrandsForYou';
import SummerCollections from './SummerCollections';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-euclid">
      <Header />
      <HeroBanner />
      <WeekHighlights />
      <PopularThisWeek />
      <BrandsForYou />
      <SummerCollections />
      <Footer />
    </div>
  );
};

export default HomePage;
