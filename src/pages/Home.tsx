import React, { useEffect, useState } from 'react';
import NearbyDishes from '../components/NearbyDishes';
import FavoriteDishes from '../components/FavoriteDishes';
// import AllDishes from '../components/AllDishes';
import Header from '../components/Header';
import { SectionDishes } from '../components/SectionDishes';
import { SectionMapHome } from '../components/SectionMap';
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
      <div style={{height:'300px', width:'100%', display:'flex', justifyContent: 'center', alignItems : 'center', overflow:'hidden', background: 'url("src/assets/banner.svg")', backgroundSize: 'cover', marginBottom:'2vh', backgroundPosition: '50%'}}>
      </div>
      <div id='nearby'/>
      <NearbyDishes/>
      <SectionDishes />
      <div id='favorites'/>
      <FavoriteDishes />
      <div id='map'/>
      <SectionMapHome />
      <Cart />
      {/* <AllDishes /> */}
    </div>
  );
};

export default Home;
