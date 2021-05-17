import Layout from "../components/Layout";
import Container from "../components/Container";
import styles from "../styles/filter.module.css";
import Link from "next/link";
const prefix = "/cgu.github.io";
export default function Filter() {
  return (
    <Layout position="2">
      <Container>
        <div className={styles.container}>
          <h1 className={styles.title}>請選擇篩選依據</h1>
          <div className={styles.options}>
            <Link href={{ pathname: "/filter/[id]", query: { id: "year" } }}>
              <div className={styles.btn}>學年度</div>
            </Link>
            <Link
              href={{ pathname: "/filter/[id]", query: { id: "position" } }}
            >
              <div className={styles.btn}>地點清單</div>
            </Link>
            <Link href={{ pathname: "/filter/[id]", query: { id: "map" } }}>
              <div className={styles.btn}>校園平面圖</div>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
