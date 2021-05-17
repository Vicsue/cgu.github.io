import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Option from "../../components/Option";
import styles from "../../styles/filter.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Link from "next/link";
const prefix = "/cgu.github.io";
export default function Filter() {
  const router = useRouter();
  const dataList = [
    {
      id: 1,
      year: 102,
      title: "書齋品文",
      author: "作者",
      position: "圖書館",
      image: "",
      line1: "與蠹爭食天下事，",
      line2: "伴螢共賞古今談。",
      line3: "前書猶見黃花瘦，",
      line4: "隔頁卻聞夏芰殘。",
      authorize: true,
    },
    {
      id: 2,
      year: 102,
      title: "操場邊的夜景",
      author: "翁瑋彤",
      position: "操場",
      image: "",
      line1: "新月彎彎映，",
      line2: "秋風颯颯迎。",
      line3: "俯窺山麓景，",
      line4: "樂享長庚情。",
      authorize: true,
    },
    {
      id: 3,
      year: 102,
      title: "薄膜爭鋒",
      author: "楊筱萱",
      position: "薄膜球場",
      image: "",
      line1: "薄望框奔灑，",
      line2: "膜蒸勢壯發。",
      line3: "爭魂奪霸勇，",
      line4: "鋒掃風春花。",
      authorize: true,
    },
    {
      id: 4,
      year: 103,
      title: "明德煙雨",
      author: "劉家維",
      position: "明德樓",
      image: "",
      line1: "明日遁華樓，",
      line2: "德消晨起愁，",
      line3: "煙濛湧冽氣。",
      line4: "雨後方知秋。",
      authorize: true,
    },
    {
      id: 5,
      year: 103,
      title: "夜登管八",
      author: "高子柔",
      position: "管理大樓",
      image: "",
      line1: "子夜登樓中，",
      line2: "雲輕月漸朦。",
      line3: "繁星誰與共，",
      line4: "同仰廣寒宮。",
      authorize: true,
    },
  ];

  const [active, setActive] = useState(false);
  function getData(e) {
    setActive(e);
  }
  return (
    <Layout position="2">
      <Container>
        <div
          className={styles.container}
          style={{ height: "auto", overflowY: "scroll" }}
        >
          <h1 className={styles.title}>
            請選擇
            {router.query.id == "year"
              ? "學年度"
              : `${
                  router.query.id == "position"
                    ? "地點清單"
                    : `${router.query.id == "map" ? "校園平面圖" : undefined}`
                }`}
          </h1>
          <Link href="/filter">
            <div className={styles.back}>返回上頁</div>
          </Link>
          <div
            className={styles.options}
            style={
              router.query.id == "year"
                ? { marginBottom: "9%", marginTop: "4%" }
                : undefined
            }
          >
            <Option
              dataList={dataList}
              getData={getData}
              category={router.query.id}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
