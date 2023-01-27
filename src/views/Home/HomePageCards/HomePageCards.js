import HomePageCard from '../HomePageCard/HomePageCard';
import './HomePageCards.scss';

function HomePageCards({ data }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <HomePageCard key={id} {...itemProps} />;
  });
  return <div className="products">{elements}</div>;
}

export default HomePageCards;
