import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/Home/HomePage/HomePage';
import CatalogPage from './views/Catalog/CatalogPage/CatalogPage';
import Layout from './components/Layout/Layout';
import ProductPage from './views/Product/ProductPage/ProductPage';
import './App.scss';
import { useState } from 'react';

function App() {
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');
  const data = [
    {
      id: uuidv4(),
      imgUrl: '/images/content/best3.png',
      title: 'Brazil Cerrado 2 kg',
      country: 'Brazil',
      price: 6.99,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, perferendis repudiandae explicabo consequatur repellendus hic dolor.',
    },
    {
      id: uuidv4(),
      imgUrl: '/images/content/best2.png',
      title: 'Presto Coffee Beans 1 kg',
      country: 'Kenya',
      price: 15.99,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, perferendis repudiandae explicabo consequatur repellendus hic dolor.',
    },
    {
      id: uuidv4(),
      imgUrl: '/images/content/best1.png',
      title: 'Solimo Coffee Beans 2 kg',
      country: 'Columbia',
      price: 10.73,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, perferendis repudiandae explicabo consequatur repellendus hic dolor.',
    },
    {
      id: uuidv4(),
      imgUrl: '/images/content/best1.png',
      title: 'Kirkland Signature 1 kg',
      country: 'Columbia',
      price: 15,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, perferendis repudiandae explicabo consequatur repellendus hic dolor.',
    },
    {
      id: uuidv4(),
      imgUrl: '/images/content/best3.png',
      title: 'AROMISTICO Coffee 1 kg',
      country: 'Brazil',
      price: 6.99,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, perferendis repudiandae explicabo consequatur repellendus hic dolor.',
    },
    {
      id: uuidv4(),
      imgUrl: '/images/content/best3.png',
      title: 'Bourbon Santos 5 kg',
      country: 'Brazil',
      price: 8.99,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, perferendis repudiandae explicabo consequatur repellendus hic dolor.',
    },
  ];

  const getProduct = (title) => {
    const index = data.findIndex((item) => item.title === title);

    return data[index];
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const searchProduct = (term, items) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.title.toLowerCase().indexOf(term.toLowerCase()) >= 0);
  };

  const onSetFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filterProduct = (filter, items) => {
    return filter.length > 0 ? items.filter((item) => item.country === filter) : items;
  };

  const visibleData = filterProduct(filter, searchProduct(term, data));

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<CatalogPage data={visibleData} onUpdateSearch={onUpdateSearch} onSetFilter={onSetFilter} />} />
          <Route path="products/:title" element={<ProductPage getProduct={getProduct} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
