import HomePageCards from '../HomePageCards/HomePageCards';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HoemPageTop from '../HomePageTop/HomePageTop';
import './HomePage.scss';

function HomePage({ data }) {
  return (
    <>
      <HoemPageTop />
      <HomePageAbout />
      <section className="best" style={{ backgroundImage: 'url(images/best-bg.jpg)' }}>
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
