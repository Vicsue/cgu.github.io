import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.contact}>
        <div className={styles.ftlogo}>
          <img src="/static/img_logo_ft.svg" alt="idouding" />
        </div>
        <div className={styles.ftnav}>
          <div itemProp="name">
            <Link href="/news" title="公益商品" itemProp="url">
              {"公益商品"}
            </Link>
          </div>
          <div itemProp="name">
            <Link href="/exchange" title="公益團體" itemProp="url">
              {"公益團體"}
            </Link>
          </div>
          <div itemProp="name">
            <Link href="/partners" title="blog" itemProp="url">
              {"Blog"}
            </Link>
          </div>
          <div itemProp="name">
            <Link href="/project" title="贈禮客製方案" itemProp="url">
              {"贈禮客製方案"}
            </Link>
          </div>
        </div>
        <div className={styles.information}>
          <address className={styles.email}>
            合作/邀約信箱:&nbsp;service@idouding.com.tw
          </address>
          <div className={styles.copyright}>
            Copyright © 2021 愛到叮. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
