import Layout from '../components/Layout';
import Container from '../components/Container';
import MainBanner from '../components/MainBanner';
import About from '../components/About';

export default function Home() {
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
