import './Top.scss';

function Top({ bgUrl, title }) {
  return (
    <section className="top top-page" style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className="container">
        <div className="top__inner top-page__inner">
          <h1 className="top__title">{title}</h1>
        </div>
      </div>
    </section>
  );
}

export default Top;
