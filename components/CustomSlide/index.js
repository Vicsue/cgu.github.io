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
        background: `url(${funcImg(`/static/${image}
          `)}) no-repeat center center / cover`,
      }}
    ></div>
  );
};

export default CustomSlide;
