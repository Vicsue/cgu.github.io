import Layout from "../../components/Layout";
import Container from "../../components/Container";
import styles from "../../styles/filter.module.css";
import Link from "next/link";
const prefix = "/cgu.github.io";
function Filter() {
  return (
    <Layout position="2">
      <Container>
        <div className={styles.container}>
          <h1>請選擇篩選依據</h1>
          <div className={styles.options}></div>
        </div>
      </Container>
    </Layout>
  );
}
