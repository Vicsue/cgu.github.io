import styles from './index.module.css';
import { funcImg } from '../Image/index.js';
import { useWindowSize } from '../WindowSize/index.js';
import Link from 'next/link';

const CustomSlide = ({
  image,

  ...props
}) => {
  return (
    <div
      {...props}
      className={styles.carousel}
      style={{
        background: `linear-gradient(0deg, rgba(47 ,47 ,47, 0.8) 1.8%, rgba(40, 19, 0, 0.266667) 31.54%, rgba(40, 19, 0, 0) 61.9%),url(${funcImg(`/static/${image}
          `)}) no-repeat center center / cover`,
      }}
    ></div>
  );
};

export default CustomSlide;
