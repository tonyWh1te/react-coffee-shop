import { v4 as uuidv4 } from 'uuid';
import HomePageCards from '../HomePageCards/HomePageCards';
import './homePage.scss';

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
    <main className="main">
      <section className="top top-promo" style={{ backgroundImage: 'url(/images/promo.jpg)' }}>
        <div className="container">
          <div className="top__inner top-promo__inner">
            <h1 className="top__title">Everything You Love About Coffee</h1>
            <div className="beans top__beans">
              <img className="beans__img" src="/images/beans.svg" alt="beans" />
            </div>
            <h2 className="top__subtitle">
              We makes every day full of energy and taste <span>Want to try our beans?</span>
            </h2>
            <button className="top__btn">More</button>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about__inner">
            <h3 className="about__subtitle">About Us</h3>
            <div className="beans about__beans">
              <img className="beans__img" src="/images/beans-black.svg" alt="beans" />
            </div>
            <div className="about__text">
              <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation
                recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy
                want. Children me laughing we prospect answered followed. At it went is song that held help face.
              </p>
              <p>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any
                yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor
                are most gave hope. Secure active living depend son repair day ladies now.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="best" style={{ backgroundImage: 'url(/images/best-bg.jpg)' }}>
        <div className="container">
          <div className="best__inner">
            <h3 className="best__subtitle">Our best</h3>
            <HomePageCards data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
