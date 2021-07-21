import Layout from '../components/Layout';
import Container from '../components/Container';
import styles from '../styles/filter.module.css';
import Link from 'next/link';
import PrefixedLink from '../components/PrefixedLink';
export default function Filter() {
  return (
    <Layout position="2">
      <Container>
        <div className={styles.container}>
          <h1 className={styles.title}>請選擇篩選依據</h1>
          <div className={styles.options}>
            <PrefixedLink href="/filter/[id]" as="/filter/year">
              <div className={styles.btn}>學年度</div>
            </PrefixedLink>
            <PrefixedLink href="/filter/[id]" as="/filter/position">
              <div className={styles.btn}>地點清單</div>
            </PrefixedLink>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
