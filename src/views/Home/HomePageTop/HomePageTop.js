import Beans from '../../../components/Beans/Beans';
import './HomePageTop.scss';

function HoemPageTop() {
  return (
    <section className="top" style={{ backgroundImage: 'url(/images/promo.jpg)' }}>
      <div className="container">
        <div className="top__inner top-main__inner">
          <h1 className="top__title">Everything You Love About Coffee</h1>
          <Beans classes={['top__beans']} imageUrl={'/images/beans.svg'} />
          <h2 className="top__subtitle">
            We makes every day full of energy and taste <span>Want to try our beans?</span>
          </h2>
          <button className="top__btn">More</button>
        </div>
      </div>
    </section>
  );
}

export default HoemPageTop;
