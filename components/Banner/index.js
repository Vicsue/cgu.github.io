import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";
const prefix = "/cgu.github.io";

const Banner = ({ bannerData }) => {
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
    <div className={styles.Banner}>
      <div className={styles.x}>
        <Slider {...settings}>
          {bannerData.map((index, id) => (
            <div className={styles.banner}>
              <div
                className={styles.bannerContainer}
                style={{
                  background: `url(${prefix}/static/banner/${index.id}.JPG) no-repeat center center / cover`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
