import styles from './index.module.css';
import Slider from 'react-slick';
import CustomSlide from '../CustomSlide';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const MainBanner = () => {
  const size = useWindowSize();

  const bannerList = [
    {
      id: 1,
      image: 'banner01.jpg',
    },
    {
      id: 2,
      image: 'banner02.jpg',
    },
    {
      id: 3,
      image: 'banner03.jpg',
    },
    {
      id: 4,
      image: 'banner04.jpg',
    },
    {
      id: 5,
      image: 'banner05.jpg',
    },
    {
      id: 6,
      image: 'banner06.jpg',
    },
    {
      id: 7,
      image: 'banner07.jpg',
    },
    {
      id: 8,
      image: 'banner08.jpg',
    },
  ];
  const settings = {
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        「臺灣詩•鄉土情」課程<br></br>
        長庚八景詩及教學影像數位化資料庫
      </div>
      <div className={styles.MainBanner}>
        <div className={styles.about} id="A">
          <div className={styles.quote}>
            承襲古典精神，將長庚寫入傳統。<br></br>
            描繪校園景致，讓學子悠遊詩情。
          </div>
          <div className={styles.content}>
            希望藉由<br></br>一首首校園景緻的詩篇，
            {size.width > 425 ? '' : <br></br>}重拾校園生活的青春印記<br></br>
            一堂堂課業學習的身影，{size.width > 425 ? '' : <br></br>}
            重溫努力耕耘的課堂趣味<br></br>
            共同建置長庚人的溫馨與榮光
          </div>
        </div>
        <div className={styles.banner}>
          <Slider {...settings}>
            {bannerList.map((index, id) => (
              <CustomSlide key={id} image={index.image} />
            ))}
          </Slider>
        </div>
      </div>
      <Link href="/filter">
        <div className={styles.readMore}>作品欣賞</div>
      </Link>
    </div>
  );
};

export default MainBanner;
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
