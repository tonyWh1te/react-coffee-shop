import { v4 as uuidv4 } from 'uuid';
import HomePageCard from '../HomePageCard/HomePageCard';
import './HomePageCards.scss';

function HomePageCards({ data }) {
  const elements = data.map((item) => {
    return item.best ? <HomePageCard key={uuidv4()} {...item} /> : null;
  });
  return <div className="products">{elements}</div>;
}

export default HomePageCards;
