import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Beans from '../../../components/Beans/Beans';
import Top from '../../../components/Top/Top';
import './ProductPage.scss';

function ProductPage({ getProduct }) {
  const { title } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => setProduct(getProduct(title)), [title, getProduct]);

  return (
    <>
      <Top bgUrl={'/images/header-bg.jpg'} title={'Our Coffee'} />
      {product && (
        <>
          <section className="about-product">
            <div className="container">
              <div className="about-product__inner">
                <img className="about-product__img" src={product.imgUrl} alt={title} />
                <div className="about-product__text">
                  <h3 className="about-product__title">{title}</h3>
                  <Beans classes={['content__beans']} imageUrl={'/images/beans-black.svg'} />
                  <div className="about-product__characteristics">
                    <p className="about-product__country">
                      <b>Country:</b>
                      {product.country}
                    </p>
                    <p className="about-desc">
                      <b>Description:</b>
                      {product.description}
                    </p>
                    <p className="about-product__price">
                      <b>Price:</b>
                      <span>{`${product.price}$`}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ProductPage;
