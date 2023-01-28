import { v4 as uuidv4 } from 'uuid';
import About from '../../../components/About/About';
import Top from '../../../components/Top/Top';
import Cards from '../../../components/Cards/Cards';
import Search from '../../../components/Search/Search';
import Filters from '../../../components/Filters/Filters';
import './CatalogPage.scss';

function CatalogPage() {
  const data = [
    {
      id: uuidv4(),
      imgUrl: 'images/content/best3.png',
      title: 'AROMISTICO Coffee 1 kg',
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
      title: 'Solimo Coffee Beans 2 kg',
      country: 'Columbia',
      price: 10.73,
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
      title: 'AROMISTICO Coffee 1 kg',
      country: 'Brazil',
      price: 6.99,
    },
  ];

  return (
    <>
      <Top bgUrl={'/images/header-bg.jpg'} title={'Our Coffee'} />
      <About
        imgUrl={'./images/content/girl.jpg'}
        alt={'girl'}
        title={'About our beans'}
        description={[
          'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
          'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
        ]}
      />
      <div className="choice-goods">
        <div className="container">
          <div className="choice-goods__inner">
            <div className="choice-goods__filters">
              <form className="choice-goods__form">
                <label htmlFor="search" className="choice-goods__form-label">
                  Lookiing for
                </label>
                <Search />
              </form>
              <div className="choice-goods__filter-btns">
                <p className="choice-goods__filter-label">Filter</p>
                <Filters />
              </div>
            </div>
            <Cards data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CatalogPage;
