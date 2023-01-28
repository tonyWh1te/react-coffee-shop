import Beans from '../Beans/Beans';
import './About.scss';

function About({ imgUrl, alt, title, description }) {
  const elements = description.length > 0 ? description.map((text, i) => <p key={i}>{text}</p>) : [];

  return (
    <section className="about">
      <div className="container">
        <div className="content">
          <img className="content__img" src={imgUrl} alt={alt} />
          <div className="content__description">
            <h3 className="content__title">{title}</h3>
            <Beans classes={['content__beans']} imageUrl={'./images/beans-black.svg'} />
            <div className="content__text">{elements}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
