import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/Home/HomePage/HomePage';
import CatalogPage from './views/Catalog/CatalogPage/CatalogPage';
import Layout from './components/Layout/Layout';
import ProductPage from './views/Product/ProductPage/ProductPage';
import './App.scss';

function App() {
  const data = [
    {
      id: uuidv4(),
      imgUrl: 'images/content/best3.png',
      title: 'Brazil Cerrado 2 kg',
      country: 'Brazil',
      price: 6.99,
    },
    {
      id: uuidv4(),
      imgUrl: 'images/content/best2.png',
      title: 'Presto Coffee Beans 1 kg',
      country: 'Kenya',
      price: 15.99,
    },
    {
      id: uuidv4(),
      imgUrl: 'images/content/best1.png',
      title: 'Solimo Coffee Beans 2 kg',
      country: 'Columbia',
      price: 10.73,
    },
    {
      id: uuidv4(),
      imgUrl: '/images/content/best1.png',
      title: 'Kirkland Signature 1 kg',
      country: 'Columbia',
      price: 15,
    },
    {
      id: uuidv4(),
      imgUrl: 'images/content/best3.png',
      title: 'AROMISTICO Coffee 1 kg',
      country: 'Brazil',
      price: 6.99,
    },
    {
      id: uuidv4(),
      imgUrl: 'images/content/best3.png',
      title: 'Bourbon Santos 5 kg',
      country: 'Brazil',
      price: 8.99,
    },
  ];

  const getData = (title) => {
    const index = data.findIndex((item) => item.title === title);

    return data[index];
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<CatalogPage data={data} />} />
          <Route path="products/:title" element={<ProductPage getData={getData} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
