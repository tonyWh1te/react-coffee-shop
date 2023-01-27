import Beans from '../../../components/Beans/Beans';
import './HomePageAbout.scss';

function HomePageAbout() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <h3 className="about__subtitle">About Us</h3>
          <Beans classes={['about__beans']} imageUrl={'/images/beans-black.svg'} />
          <div className="about__text">
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation
              recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
              Children me laughing we prospect answered followed. At it went is song that held help face.
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
  );
}

export default HomePageAbout;
