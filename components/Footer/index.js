import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.contact}>
        <div className={styles.ftlogo}>
          <img src="/static/footer-logo.svg" alt="idouding" />
        </div>

        <div className={styles.copyright}>
          Copyright © 2021 長庚大學. All rights reserved.{" "}
        </div>
      </div>
    </footer>
  );
}
