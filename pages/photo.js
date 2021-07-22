import Layout from '../components/Layout';
import Container from '../components/Container';
import styles from '../styles/filter.module.css';
import { useRouter } from 'next/router';
import Gallery from 'react-grid-gallery';
import { useState, useEffect } from 'react';
import GalleryOption from '../components/GalleryOption';

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

  let IMAGE = [];
  for (let x = 0; x < bannerList.length; x++) {
    IMAGE.push({
      src: `../static/banner/${bannerList[x].id}.jpg`,
      thumbnail: `../static/banner/${bannerList[x].id}.jpg`,
      thumbnailWidth: `320`,
      thumbnailHeight: `212`,
      caption: `${bannerList[x].position}  ${bannerList[x].year}`,
    });
  }
  return (
    <Layout position="3">
      <Container>
        <div className={styles.container}>
          <h1 className={styles.title}>請選擇學年度</h1>

          <div
            className={styles.options}
            style={{ marginBottom: '9%', marginTop: '4%' }}
          >
            <GalleryOption dataList={bannerList} category={'year'} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
