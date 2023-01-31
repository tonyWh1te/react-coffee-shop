import { Route, Routes } from 'react-router-dom';
import { MockAPI } from './services/MockAPI.service';
import HomePage from './views/Home/HomePage/HomePage';
import CatalogPage from './views/Catalog/CatalogPage/CatalogPage';
import Layout from './components/Layout/Layout';
import ProductPage from './views/Product/ProductPage/ProductPage';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsReady(false);
        const itemsResponse = await MockAPI.get('https://63d8c7cd74f386d4efdd996f.mockapi.io/items');
        setData(itemsResponse);
        setIsReady(true);
      } catch (error) {
        alert(error.message);
      }
    };

    loadData();
  }, []);

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
          <Route
            path="products"
            element={<CatalogPage data={visibleData} onUpdateSearch={onUpdateSearch} onSetFilter={onSetFilter} isReady={isReady} />}
          />
          <Route path="products/:title" element={<ProductPage getProduct={getProduct} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
