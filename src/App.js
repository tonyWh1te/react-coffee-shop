import { Route, Routes } from 'react-router-dom';
import HomePage from './views/Home/HomePage/HomePage';
import CatalogPage from './views/Catalog/CatalogPage/CatalogPage';
import Layout from './components/Layout/Layout';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<CatalogPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
