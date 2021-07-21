import styles from './index.module.css';
import Slider from 'react-slick';
import { funcImg } from '../Image/index.js';
import CustomSlide from '../CustomSlide';

const Banner = ({ bannerData }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.Banner}>
      <div className={styles.x}>
        <Slider {...settings}>
          {bannerData.map((index, id) => (
            <CustomSlide key={id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
