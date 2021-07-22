import { useState, useEffect } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './index.module.css';
const prefix = '/cgu.github.io';
//const prefix = '';

const Header = ({ position }) => {
  const [active, setactive] = useState(false);

  useEffect(() => {
    if (active == false) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  });

  return (
    <header
      className={classnames(styles.header, {
        [styles.active]: active,
      })}
    >
      <div
        className={classnames(styles.container, {
          [styles.containerActive]: active,
        })}
      >
        <div className={styles.logo}>
          <Link href="/" title="home">
            <div className={styles.logo}>
              <img src={`${prefix}/static/CGU_Logo.png`} alt="cgu-logo" />
              <hr></hr>
              <div className={styles.logoText}>臺灣詩•鄉土情</div>
            </div>
          </Link>
        </div>
        <nav
          className={styles.navbar}
          itemScope
          itemType="http://www.schema.org/SiteNavigationElement"
        >
          <div
            itemProp="name"
            className={position == 1 ? styles.pageActive : undefined}
          >
            <Link href="/" title="首頁" itemProp="url">
              {'首頁'}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 2 ? styles.pageActive : undefined}
          >
            <Link href="/filter" title="作品欣賞" itemProp="url">
              {'作品欣賞'}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 3 ? styles.pageActive : undefined}
          >
            <Link href="/photo" title="校園巡禮" itemProp="url">
              {'校園巡禮'}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 4 ? styles.pageActive : undefined}
          >
            <a href="https://www.cgu.edu.tw/" target="_blank">
              長庚大學
            </a>
          </div>
        </nav>
        <div className={styles.r}>
          <div className={styles.hambuger} onClick={() => setactive(!active)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
