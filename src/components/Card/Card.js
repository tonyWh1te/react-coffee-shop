import './Card.scss';

function Card({ imgUrl, title, country, price }) {
  return (
    <a className="goods__goods-item" href="/#">
      <img className="goods__img" src={imgUrl} alt="beans" />
      <div className="goods__info">
        <h6 className="goods__info-title">{title}</h6>
        <p className="goods__info-country">{country}</p>
        <b className="goods__info-price">{`${price}$`}</b>
      </div>
    </a>
  );
}

export default Card;
