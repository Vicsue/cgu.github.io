import styles from './index.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const prefix = '/cgu.github.io';
//const prefix = '';
const Option = ({ category, dataList, getData }) => {
  const list = [];
  const positionList = [
    {
      id: 1,
      value: '圖書館',
    },
    {
      id: 2,
      value: '操場',
    },
    {
      id: 3,
      value: '薄膜球場',
    },
    {
      id: 4,
      value: '明德樓',
    },
    {
      id: 5,
      value: '管理大樓',
    },
    {
      id: 6,
      value: '木棧道',
    },
    {
      id: 7,
      value: '蘊德樓',
    },
    {
      id: 8,
      value: '志清湖',
    },
    {
      id: 9,
      value: '青蛙湖',
    },
    {
      id: 10,
      value: '創辦人紀念公園',
    },
    {
      id: 11,
      value: '第二醫學大樓',
    },
    {
      id: 12,
      value: '文物館',
    },
    {
      id: 13,
      value: '工學大樓',
    },
    {
      id: 14,
      value: '好漢坡',
    },
    {
      id: 15,
      value: '第一醫學大樓',
    },
    {
      id: 16,
      value: '據德樓',
    },
    {
      id: 17,
      value: '其他',
    },
  ];
  const yearList = [
    {
      id: 1,
      value: 102,
    },
    {
      id: 2,
      value: 103,
    },
    {
      id: 3,
      value: 104,
    },
    {
      id: 4,
      value: 105,
    },
    {
      id: 5,
      value: 106,
    },
    {
      id: 6,
      value: 107,
    },
    {
      id: 7,
      value: 108,
    },
    {
      id: 8,
      value: 109,
    },
  ];
  let data = [];
  if (category == 'year') {
    data = yearList;
  }
  if (category == 'position') {
    data = positionList;
  }

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < dataList.length; j++) {
      if (category == 'position' && data[i].value == dataList[j].position) {
        sum += 1;
      }
      if (category == 'year' && data[i].value == dataList[j].year) {
        sum += 1;
      }
    }
    list.push([data[i].value, sum]);
    sum = 0;
  }
  const [active, setActive] = useState(false);
  const size = useWindowSize();

  return (
    <div className={styles.Option} id="B">
      {list.map((index, id) => (
        <Link
          href={{
            pathname: '/poem/[id]',
            query: { id: `${index[0]}` },
          }}
        >
          <div className={active ? styles.Card : styles.CardActive}>
            <div className={styles.title}> {index[0]} </div>
            <div className={styles.amount}> {index[1]} </div>
          </div>
        </Link>
      ))}
      <div
        className={styles.btn}
        style={list.length < 9 || active ? { display: 'none' } : undefined}
        onClick={(e) => {
          setActive(true);
          getData(true);
        }}
      >
        <img src={`${prefix}/static/readnore-icon.svg`}></img>
        <span>查看更多</span>
      </div>
    </div>
  );
};

export default Option;
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
