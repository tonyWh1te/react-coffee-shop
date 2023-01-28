import Card from '../Card/Card';
import './Cards.scss';

function Cards({ data }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <Card key={id} {...itemProps} />;
  });

  return <div className="goods">{elements}</div>;
}

export default Cards;
