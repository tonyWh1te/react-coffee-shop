import { v4 as uuidv4 } from 'uuid';
import HomePageCards from '../HomePageCards/HomePageCards';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HoemPageTop from '../HomePageTop/HomePageTop';
import './HomePage.scss';

function HomePage() {
  const data = [
    {
      id: uuidv4(),
      src: '/images/content/best1.png',
      title: 'Solimo Coffee Beans 2 kg',
      price: 10.73,
    },
    {
      id: uuidv4(),
      src: 'images/content/best2.png',
      title: 'Presto Coffee Beans 1 kg',
      price: 15.99,
    },
    {
      id: uuidv4(),
      src: 'images/content/best3.png',
      title: 'AROMISTICO Coffee 1 kg',
      price: 6.99,
    },
  ];

  return (
    <>
      <HoemPageTop />
      <HomePageAbout />
      <section className="best" style={{ backgroundImage: 'url(/images/best-bg.jpg)' }}>
        <div className="container">
          <div className="best__inner">
            <h3 className="best__subtitle">Our best</h3>
            <HomePageCards data={data} />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
