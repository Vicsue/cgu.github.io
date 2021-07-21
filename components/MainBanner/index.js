import styles from './index.module.css';
import Slider from 'react-slick';
import CustomSlide from '../CustomSlide';
import { funcImg } from '../Image/index.js';

const MainBanner = () => {
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
    <div className={styles.MainBanner}>
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
  );
};

export default MainBanner;
