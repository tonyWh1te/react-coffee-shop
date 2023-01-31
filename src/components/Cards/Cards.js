import ContentLoader from 'react-content-loader';
import { v4 as uuid4 } from 'uuid';
import Card from '../Card/Card';
import './Cards.scss';

function Cards({ data, isLoaded }) {
  const elements = (isLoaded ? data : [...Array(6)]).map((item, i) =>
    isLoaded ? (
      <Card key={uuid4()} {...item} />
    ) : (
      <ContentLoader key={i} speed={2} width={220} height={260} viewBox="0 0 220 260" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="8" ry="8" width="220" height="260" />
      </ContentLoader>
    )
  );

  return <div className="goods">{elements}</div>;
}

export default Cards;
