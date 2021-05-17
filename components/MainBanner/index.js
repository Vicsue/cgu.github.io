import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";
const prefix = "/cgu.github.io";

const MainBanner = () => {
  const bannerList = [
    { id: "1", img: "/static/mainbanner-01.jpg" },
    { id: "2", img: "/static/mainbanner-02.jpg" },
  ];
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className={styles.MainBanner}>
      <div className={styles.info}>
        <h1>長庚大學 校園八景</h1>
        <p>
          承襲古典精神，將長庚寫入傳統。<br></br>
          描繪校園景致，讓學子悠遊詩情。
        </p>
        <a href="#A">
          <img src={"/static/readnore-icon.svg"}></img>
          <span>查看更多</span>
        </a>
      </div>
      <div className={styles.x}>
        <Slider {...settings}>
          {bannerList.map((index, id) => (
            <div className={styles.banner}>
              <div
                className={styles.bannerContainer}
                style={{
                  background: `${prefix}url(${index.img}) no-repeat center center / cover`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MainBanner;
