import Layout from '../components/Layout';
import Container from '../components/Container';
import MainBanner from '../components/MainBanner';
export default function Custom404() {
  return (
    <Layout position="1">
      <Container>
        <div style={{ height: '100%' }}>
          <MainBanner />
        </div>
      </Container>
    </Layout>
  );
}
