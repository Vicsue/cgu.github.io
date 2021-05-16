import Layout from "../components/Layout";
import Container from "../components/Container";
import MainBanner from "../components/MainBanner";
import About from "../components/About";

const prefix = "/cgu.github.io";
export default function Home({ data }) {
  console.log(data);
  return (
    <Layout position="1">
      <Container>
        <MainBanner />
        {data.map((index, id) => (
          <div>{index.name}</div>
        ))}
        <About />
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://e6c7d47a-18c3-4f11-b9f6-1bf2cd964f4c.mock.pstmn.io/getData`
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
