import { BackgroundContainer, RowImages } from './styles.ts';
import background1 from '../../assets/backgound1.svg';
import background2 from '../../assets/background2.svg';
import background3 from '../../assets/background3.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BackgroundImage = () => {
  const images = [background1, background2, background3];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    dots: true,
    arrows: false,
  };

  return (
    <BackgroundContainer>
      <Slider {...sliderSettings}>
        {images.map((img, index) => (
          <div key={index}>
            <RowImages>
              <img src={img}  />
            </RowImages>
          </div>
        ))}
      </Slider>
    </BackgroundContainer>
  );
};

export default BackgroundImage;