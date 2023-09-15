import React from 'react';
import Header from '../components/Header';
import NearbyDishes from '../components/NearbyDishes';
import FavoriteDishes from '../components/FavoriteDishes';
import AllDishes from '../components/AllDishes';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <NearbyDishes />
      <FavoriteDishes />
      <AllDishes />
    </div>
  );
};

export default Home;
