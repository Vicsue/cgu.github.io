import Layout from '../components/Layout';
import Container from '../components/Container';
import styles from '../styles/filter.module.css';
import Link from 'next/link';
import { withRouter } from 'next/router';
export default function Content({ router }) {
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
