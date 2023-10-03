import React, { useEffect, useState } from 'react';
import NearbyDishes from '../components/NearbyDishes';
import FavoriteDishes from '../components/FavoriteDishes';
import Header from '../components/Header';
import { SectionDishes } from '../components/SectionDishes';
import { SectionMapHome } from '../components/SectionMap';
import Background from '../components/Background';
import { Cart } from '../components/Cart';

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
      <Background />
      <div id="nearby" />
      <NearbyDishes />
      <SectionDishes />
      <div id="favorites" />
      <FavoriteDishes />
      <div id="map" />
      <SectionMapHome />
      <Cart />
    </div>
  );
};

export default Home;
