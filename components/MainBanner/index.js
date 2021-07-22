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
      year: 109,
      title: '好漢長坡',
      author: '游睿霖',
      position: '好漢坡',
      image: '109-110.png',
      line1: '階高路徑長，',
      line2: '綠蔭遮雙旁。',
      line3: '烈日雖斜照，',
      line4: '前行好漢強。',
      authorize: true,
    },
    {
      id: 2,
      year: 109,
      title: '志清曉霧',
      author: '陳慶宇',
      position: '志清湖',
      image: '109-109.png',
      line1: '清波孤廟立，',
      line2: '曉霧漫湖沿。',
      line3: '旭日蹄忽起，',
      line4: '石橋頌古賢。',
      authorize: true,
    },
    {
      id: 3,
      year: 107,
      title: '初遊志清',
      author: '王苡庭',
      position: '志清湖',
      image: '109-108.png',
      line1: '浮光映志清，',
      line2: '綠樹碧煙晴。',
      line3: '人至驚飛羽，',
      line4: '佇遲夕照明。',
      authorize: true,
    },
    {
      id: 4,
      year: 109,
      title: '夏日清湖',
      author: '張瑜倢',
      position: '志清湖',
      image: '109-107.png',
      line1: '綠蔭清風起，',
      line2: '曉亭閒品清。',
      line3: '白鵝群戲水，',
      line4: '炎夏碧天晴。',
      authorize: true,
    },
    {
      id: 5,
      year: 109,
      title: '奇木精髓',
      author: '樂克宣',
      position: '文物館',
      image: '109-106.png',
      line1: '館中藏巨木，',
      line2: '萬稔煉癭精。',
      line3: '閉眼諳其偉，',
      line4: '抬頭眺燦晴。',
      authorize: true,
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
      <div className={styles.MainBanner}>
        <div className={styles.about} id="A">
          <div className={styles.title}>
            「臺灣詩•鄉土情」課程<br></br>
            長庚八景詩及教學影像數位化資料庫
          </div>
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
              <CustomSlide
                key={id}
                year={index.year}
                image={index.image}
                title={index.title}
                author={index.author}
                position={index.position}
                line1={index.line1}
                line2={index.line2}
                line3={index.line3}
                line4={index.line4}
              />
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
