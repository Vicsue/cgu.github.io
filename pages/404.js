import Layout from '../components/Layout';
import Container from '../components/Container';
import MainBanner from '../components/MainBanner';
import About from '../components/About';

export default function Custom404() {
  var segmentCount = 0;
  var l = window.location;
  l.replace(
    l.protocol +
      '//' +
      l.hostname +
      (l.port ? ':' + l.port : '') +
      l.pathname
        .split('/')
        .slice(0, 1 + segmentCount)
        .join('/') +
      '/?p=/' +
      l.pathname
        .slice(1)
        .split('/')
        .slice(segmentCount)
        .join('/')
        .replace(/&/g, '~and~') +
      (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
  );
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
