import styles from './index.module.css';
import { funcImg } from '../Image/index.js';
import { useWindowSize } from '../WindowSize/index.js';
import Link from 'next/link';

const CustomSlide = ({
  image,
  year,
  title,
  author,
  position,
  line1,
  line2,
  line3,
  line4,
  ...props
}) => {
  const size = useWindowSize();
  console.log(position);
  return (
    <div
      {...props}
      className={styles.carousel}
      style={{
        background: `linear-gradient(0deg, rgba(47 ,47 ,47, 0.8) 1.8%, rgba(40, 19, 0, 0.266667) 31.54%, rgba(40, 19, 0, 0) 61.9%),url(${funcImg(`/static/img/${image}
          `)}) no-repeat center center / cover`,
      }}
    >
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <div className={styles.poem}>
            {line1}
            {line2}
          </div>
          <div className={styles.poem}>
            {line3}
            {line4}
          </div>
          <div className={styles.right}>
            <a href={`/poem/${position}`}>
              <p>{position}/</p>
            </a>
            <a href={`/poem/${year}`}>
              <p>{year}學年度/</p>
            </a>
            <p>{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlide;
