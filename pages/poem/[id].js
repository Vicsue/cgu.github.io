import Layout from "../../components/Layout";
import Container from "../../components/Container";
import styles from "../../styles/poem.module.css";
import { useRouter } from "next/router";

import Link from "next/link";
const prefix = "/cgu.github.io";
export default function Poem() {
  const router = useRouter();

  return (
    <Layout position="2">
      <Container>
        <div className={styles.container}>
          <h1 className={styles.title}>{router.query.id}作品</h1>
          <div className={styles.back} onClick={() => router.back()}>
            返回上頁
          </div>
          <div className={styles.poems}></div>
          <div className={styles.banner}></div>
        </div>
      </Container>
    </Layout>
  );
}
