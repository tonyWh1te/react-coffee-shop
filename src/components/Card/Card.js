import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ imgUrl, title, country, price }) {
  return (
    <Link className="goods__goods-item" to={`/products/${title}`}>
      <img className="goods__img" src={imgUrl} alt="beans" />
      <div className="goods__info">
        <h6 className="goods__info-title">{title}</h6>
        <p className="goods__info-country">{country}</p>
        <b className="goods__info-price">{`${price}$`}</b>
      </div>
    </Link>
  );
}

export default Card;
