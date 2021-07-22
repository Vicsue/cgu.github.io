import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Card from '../../components/Card';
import styles from '../../styles/photo.module.css';
import { useRouter } from 'next/router';
import ImgsViewer from 'react-images-viewer';
import { useState } from 'react';

const prefix = '/cgu.github.io';
export default function Photo() {
  const router = useRouter();
  const bannerList = [
    { id: '102-1', position: '第二醫學大樓', year: 102 },
    { id: '102-2', position: '文物館', year: 102 },
    { id: '102-3', position: '青蛙湖', year: 102 },
    { id: '102-4', position: '創辦人紀念公園', year: 102 },
    { id: '103-1', position: '志清湖', year: 103 },
    { id: '103-2', position: '志清湖', year: 103 },
    { id: '103-3', position: '志清湖', year: 103 },
    { id: '103-4', position: '圖書館', year: 103 },
    { id: '104-1', position: '志清湖', year: 104 },
    { id: '104-2', position: '青蛙湖', year: 104 },
    { id: '104-3', position: '第一醫學大樓', year: 104 },
    { id: '104-4', position: '青蛙湖', year: 104 },
    { id: '104-5', position: '志清湖', year: 104 },
    { id: '104-6', position: '文物館', year: 104 },
    { id: '104-7', position: '志清湖', year: 104 },
    { id: '105-1', position: '青蛙湖', year: 105 },
    { id: '105-2', position: '青蛙湖', year: 105 },
    { id: '105-3', position: '創辦人紀念公園', year: 105 },
    { id: '105-4', position: '其他', year: 105 },
    { id: '105-5', position: '第一醫學大樓', year: 105 },
    { id: '105-6', position: '創辦人紀念公園', year: 105 },
    { id: '105-7', position: '志清湖', year: 105 },
    { id: '106-1', position: '志清湖', year: 106 },
    { id: '106-2', position: '文物館', year: 106 },
    { id: '106-3', position: '其他', year: 106 },
    { id: '106-4', position: '志清湖', year: 106 },
    { id: '106-5', position: '創辦人紀念公園', year: 106 },
    { id: '106-6', position: '文物館', year: 106 },
    { id: '106-7', position: '志清湖', year: 106 },
    { id: '106-8', position: '文物館', year: 106 },
    { id: '106-9', position: '第一醫學大樓', year: 106 },
    { id: '107-1', position: '志清湖', year: 107 },
    { id: '107-2', position: '文物館', year: 107 },
    { id: '107-3', position: '創辦人紀念公園', year: 107 },
    { id: '107-4', position: '志清湖', year: 107 },
    { id: '107-5', position: '其他', year: 107 },
    { id: '108-1', position: '志清湖', year: 108 },
    { id: '108-2', position: '創辦人紀念公園', year: 108 },
    { id: '108-3', position: '文物館', year: 108 },
    { id: '108-4', position: '圖書館', year: 108 },
    { id: '108-5', position: '第一醫學大樓', year: 108 },
    { id: '108-6', position: '文物館', year: 108 },
    { id: '108-7', position: '第一醫學大樓', year: 108 },
    { id: '108-8', position: '青蛙湖', year: 108 },
    { id: '109-1', position: '文物館', year: 109 },
    { id: '109-2', position: '工學大樓', year: 109 },
    { id: '109-3', position: '第二醫學大樓', year: 109 },
    { id: '109-4', position: '志清湖', year: 109 },
    { id: '109-5', position: '志清湖', year: 109 },
    { id: '109-6', position: '志清湖', year: 109 },
  ];
  let title = router.query.id;
  for (let i = 102; i <= 109; i++) {
    if (router.query.id == i) {
      title += '學年度';
    }
  }
  let IMAGE = [];
  for (let x = 0; x < bannerList.length; x++) {
    if (bannerList[x].year == router.query.id) {
      IMAGE.push({
        src: `/cgu.github.io/static/banner/${bannerList[x].id}.JPG`,
        thumbnail: `/cgu.github.io/static/banner/${bannerList[x].id}.JPG`,
        thumbnailWidth: `640`,
        thumbnailHeight: `424`,
        caption: `${bannerList[x].position}  ${bannerList[x].year}`,
      });
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  return (
    <Layout position="3">
      <Container>
        <div className={styles.poemContainer}>
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{title}校園巡禮照片</h1>
              <div className={styles.back} onClick={() => router.back()}>
                返回上頁
              </div>
            </div>
            <div className={styles.images}>
              {IMAGE.map((index, id) => (
                <img
                  className={styles.image}
                  src={index.src}
                  alt="image"
                  onClick={(e) => {
                    setIsOpen(true);
                    setCurrImg(id);
                  }}
                />
              ))}
              <ImgsViewer
                imgs={IMAGE}
                currImg={currImg}
                showThumbnails={true}
                isOpen={isOpen}
                onClickPrev={(e) => setCurrImg(currImg - 1)}
                onClickNext={(e) => setCurrImg(currImg + 1)}
                onClickThumbnail={(index) => setCurrImg(index)}
                onClose={(e) => setIsOpen(false)}
                backdropCloseable={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
