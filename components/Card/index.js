import styles from './index.module.css';
import { funcImg } from '../Image/index.js';

const Card = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      {data.map((index, id) => (
        <div className={styles.cardActive}>
          <div className={styles.card}>
            <div className={styles.text}>
              <div className={styles.title}>{index.title}</div>
              <div className={styles.poems}>
                {index.line1}
                {index.line2}
                <br></br>
                {index.line3}
                {index.line4}
              </div>
            </div>
            <div className={styles.bg}>
              <div
                className={styles.image}
                style={{
                  background: `url(${funcImg(
                    `/static/img/${index.image}`
                  )}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
          </div>
          <div className={styles.info}>
            {index.author} / {index.year} / {index.position}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
