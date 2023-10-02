import { useState, useEffect } from 'react';
import { BackgroundContainer, ImageWrapper } from './styles.ts';
import background from '../../assets/backgound1.svg'

const BackgroundImage = () => {
  const images = [background, 'https://source.unsplash.com/featured/food,1', 'https://source.unsplash.com/featured/food,2'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length])

  return (
    <BackgroundContainer>
     <ImageWrapper>
        {images.map((img, index) => (
          <img 
            key={img}
            src={img} 
            alt="Background" 
            className={currentImage === index ? 'image-slide' : ''} 
          />
        ))}
      </ImageWrapper>
    </BackgroundContainer>
  );
};

export default BackgroundImage;
