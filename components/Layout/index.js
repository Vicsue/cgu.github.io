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
        <meta name="author" content="Queenie Wang" />
        <meta name="source" content="" />
        <meta name="copyright" content="Copyright © GPE All rights reserved" />
        <meta
          name="description"
          content="帶著這些問題，我們一起來審視好事交易。我們需要淘汰舊有的觀念，白居易曾說過一句意義深遠的話，試玉要燒三日滿，辨才須待七年期。"
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
        <meta property="og:site_name" content="愛到叮"></meta>
        <meta property="og:title" content="愛到叮" />
        <meta property="og:url" content="http://idouding.cacdidemo.com/" />
        <meta property="og:image" content="/static/img_logo.png" />
        <meta
          property="og:description"
          content="帶著這些問題，我們一起來審視好事交易。我們需要淘汰舊有的觀念，白居易曾說過一句意義深遠的話，試玉要燒三日滿，辨才須待七年期。"
        />
        <link rel="icon" type="image/gif" href="/static/img_logo.svg" />
        <link rel="canonical" href="http://idouding.cacdidemo.com/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/csshake/1.5.3/csshake.min.css"
          integrity="sha512-RliK2gk03WxUELn57ddjWLhEfhUiOZ85VvWLImFy8A7FOPMkF4Z9YGQ3VKX5jpwkEerAL6I0nC+JNeCPrxWBTw=="
          crossorigin="anonymous"
        />

        <title>愛到叮-首頁</title>
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
