import styles from './index.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const GalleryOption = ({ category, dataList }) => {
  const list = [];

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

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < dataList.length; j++) {
      if (category == 'year' && data[i].value == dataList[j].year) {
        sum += 1;
      }
    }
    list.push([data[i].value, sum]);
    sum = 0;
  }

  return (
    <div className={styles.Option} id="B">
      {list.map((index, id) => (
        <Link
          href={{
            pathname: '/photo/[id]',
            query: { id: `${index[0]}` },
          }}
        >
          <div className={styles.CardActive}>
            <div className={styles.title}> {index[0]} </div>
            <div className={styles.amount}> {index[1]} </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryOption;
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
