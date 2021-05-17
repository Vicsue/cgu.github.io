import Layout from "../components/Layout";
import Container from "../components/Container";
import MainBanner from "../components/MainBanner";
import About from "../components/About";

const prefix = "/cgu.github.io";
export default function Home() {
  return (
    <Layout position="1">
      <Container>
        <MainBanner />
        <About />
      </Container>
    </Layout>
  );
}
