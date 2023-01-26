import './homePageCard.scss';

function HomePageCard({ src, title, price }) {
  return (
    <a className="products__item" href="/#">
      <img className="products__item-img" src={src} alt="img" />
      <div className="products__info">
        <h6 className="products__info-title">{title}</h6>
        <b className="products__info-price">{`${price}$`}</b>
      </div>
    </a>
  );
}

export default HomePageCard;
