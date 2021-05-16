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
        <nav
          className={styles.navbar}
          itemScope
          itemType="http://www.schema.org/SiteNavigationElement"
        >
          <div
            itemProp="name"
            className={position == 1 ? styles.pageActive : undefined}
          >
            <Link href="/product?page=1" title="公益商品" itemProp="url">
              {"公益商品"}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 2 ? styles.pageActive : undefined}
          >
            <Link href="/group" title="公益團體" itemProp="url">
              {"公益團體"}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 3 ? styles.pageActive : undefined}
          >
            <Link href="/project" title="贈禮客製方案" itemProp="url">
              {"贈禮客製方案"}
            </Link>
          </div>
        </nav>
        <div className={styles.logo}>
          <Link href="/" title="idouding">
            {/* <picture>
              <source srcSet="/static/Logo_phone.svg" media="(max-width: 376px)" />
              <img src="/static/img_logo.svg" alt="idouding" className={styles.logoshake}/>
            </picture> */}
            <div className={styles.logo}>
              <img
                src="/static/Group.svg"
                alt="idouding"
                className={styles.logoshake}
              />
              <img
                src="/static/Group2.svg"
                alt="idouding"
                className={styles.logoText}
              />
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
            className={position == 4 ? styles.pageActive : undefined}
          >
            <Link href="/blog" title="blog" itemProp="url">
              {"Blog"}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 5 ? styles.pageActive : undefined}
          >
            <Link href="/about" title="關於我們" itemProp="url">
              {"關於我們"}
            </Link>
          </div>
          <div
            itemProp="name"
            className={position == 6 ? styles.pageActive : undefined}
          >
            <Link href="/about" title="聯絡我們" itemProp="url">
              {"聯絡我們"}
            </Link>
          </div>
        </nav>
        <img className={styles.deco} src="/static/box-deco1.svg"></img>
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
