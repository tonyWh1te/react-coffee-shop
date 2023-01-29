import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Beans from '../../../components/Beans/Beans';
import Top from '../../../components/Top/Top';
import './ProductPage.scss';

function ProductPage({ getData }) {
  const { title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => setProduct(getData(title)), [title, getData]);

  return (
    <>
      <Top bgUrl={'/images/header-bg.jpg'} title={'Our Coffee'} />
      {product && (
        <>
          <p>{title}</p>
          <p>{product.country}</p>
          <p>{product.price}</p>
        </>
      )}
    </>
  );
}

export default ProductPage;
