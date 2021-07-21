import Link from 'next/link';
import styles from './index.module.css';
const prefix = '/cgu.github.io';
//const prefix = '';
export default function Footer() {
  return (
    <footer>
      <div className={styles.contact}>
        <div className={styles.ftlogo}>
          <img src={`${prefix}/static/footer-logo.svg`} alt="cgu-logo" />
        </div>
        <div className={styles.copyright}>
          Copyright © 2021 長庚大學. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
