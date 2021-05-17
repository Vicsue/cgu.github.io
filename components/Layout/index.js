import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./index.module.css";
import { useEffect } from "react";
import classnames from "classnames";

export default function Layout({ children, position }) {
  let handleScroll = function () {
    let navClass = classnames(styles.nav);
    if (window.scrollY != 0) {
      document.getElementsByClassName(navClass)[0].style.margin = "0.8% 0";
    } else {
      document.getElementsByClassName(navClass)[0].style.margin = "2% 0";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta name="author" content="Vic Su" />
        <meta name="source" content="" />
        <meta name="copyright" content="Copyright © CGU All rights reserved" />
        <meta
          name="description"
          content="承襲古典精神，將長庚寫入傳統。描繪校園景致，讓學子悠遊詩情。"
        />
        <meta name="keywords" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="fb:admins" content="" />
        <meta property="fb:app_id" content="" />
        <meta property="og:locale" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="長庚大學 校園八景"></meta>
        <meta property="og:title" content="長庚大學 校園八景" />
        <meta
          property="og:description"
          content="承襲古典精神，將長庚寫入傳統。描繪校園景致，讓學子悠遊詩情。"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/csshake/1.5.3/csshake.min.css"
          integrity="sha512-RliK2gk03WxUELn57ddjWLhEfhUiOZ85VvWLImFy8A7FOPMkF4Z9YGQ3VKX5jpwkEerAL6I0nC+JNeCPrxWBTw=="
          crossorigin="anonymous"
        />

        <title>長庚大學 校園八景</title>
        <script
          type="text/javascript"
          src="https://platform-api.sharethis.com/js/sharethis.js#property=60865b6aca2f2c001800975f&product=inline-share-buttons"
          async="async"
        ></script>
      </Head>
      <Header position={position} />
      <div className={styles.nav}></div>
      {children}
      <Footer />
    </div>
  );
}