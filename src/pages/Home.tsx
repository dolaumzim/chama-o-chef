import React, { useEffect, useState } from 'react';
import NearbyDishes from '../components/NearbyDishes';
import FavoriteDishes from '../components/FavoriteDishes';
// import AllDishes from '../components/AllDishes';
import Header from '../components/Header';

const Home: React.FC = () => {
  const [activeColor, setActiveColor] = useState(false);

  useEffect(() => {
    const positionScroll = () => {
      if (window.scrollY > 40) {
        setActiveColor(true);
      } else {
        setActiveColor(false);
      }
    };
    window.addEventListener('scroll', positionScroll);
  }, []);

  return (
    <div>
      <Header action={activeColor} />
      <NearbyDishes />
      <FavoriteDishes />
      {/* <AllDishes /> */}
    </div>
  );
};

export default Home;
