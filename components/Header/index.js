import { useState, useEffect } from "react";
import classnames from "classnames";
import Link from "next/link";
import styles from "./index.module.css";

const Header = ({ position }) => {
  const [active, setactive] = useState(false);
  let handleScroll = function () {
    let headerClass = classnames(styles.header);
    if (window.scrollY != 0) {
      document.getElementsByClassName(headerClass)[0].style.padding = "0.8% 6%";
    } else {
      document.getElementsByClassName(headerClass)[0].style.padding = "2% 6%";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (active == false) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
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
          <Link href="/" title="cgu">
            <div className={styles.logo}>
              <img src="/static/CGU_Logo.png" alt="cgu" />
              <hr></hr>
              <div className={styles.logoText}>校園八景</div>
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
            <Link href="/blog" title="首頁" itemProp="url">
              {"首頁"}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 2 ? styles.pageActive : undefined}
          >
            <Link href="/about" title="作品欣賞" itemProp="url">
              {"作品欣賞"}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 3 ? styles.pageActive : undefined}
          >
            <Link href="/about" title="長庚大學首頁" itemProp="url">
              {"長庚大學首頁"}
            </Link>
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
