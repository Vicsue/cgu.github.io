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
      year: 105,
      title: '永慶爺像',
      author: '蔡昕晏',
      position: '創辦人紀念公園',
      image: '105-30.PNG',
      line1: '墨身懷勁骨，',
      line2: '兀坐睇凝神。',
      line3: '遠矚千年志，',
      line4: '青衿耀北辰。',
      authorize: true,
    },
    {
      id: 2,
      year: 108,
      title: '木棧冬雨',
      author: '魏敬耘',
      position: '木棧道',
      image: '108-93.png ',
      line1: '冬雷千鏃破，',
      line2: '冽雨萬針傾。',
      line3: '浚瀨濺濺瀑，',
      line4: '孤魚孑孑行。',
      authorize: true,
    },
    {
      id: 3,
      year: 102,
      title: '書齋品文',
      author: '作者',
      position: '圖書館',
      image: '102-1.png',
      line1: '與蠹爭食天下事，',
      line2: '伴螢共賞古今談。',
      line3: '前書猶見黃花瘦，',
      line4: '隔頁卻聞夏芰殘。',
      authorize: true,
    },
    {
      id: 4,
      year: 108,
      title: '鏤德銘志',
      author: '翁以柔',
      position: '明德樓',
      image: '108-92.png ',
      line1: '獨樓破際限，',
      line2: '雨嶺雲溪廊。',
      line3: '俯瞰紅塵輩，',
      line4: '雛鷹自此狂。',
      authorize: true,
    },
    {
      id: 5,
      year: 107,
      title: '曉霧晨操',
      author: '劉虹筠',
      position: '操場',
      image: '107-66.png ',
      line1: '朱龍踞翠藏，',
      line2: '碧葉點新妝。',
      line3: '祖逖聞雞舞，',
      line4: '何憂汗透裳。',
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
