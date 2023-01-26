import HomePage from './views/Home/HomePage/HomePage';
import './app.scss';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <nav className="menu">
            <a className="logo" href="/#">
              <img src="/images/Logo.svg" alt="logo" />
            </a>
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__list-link" href="/#">
                  Our coffee
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="/#">
                  For your pleasure
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <HomePage />
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <nav className="menu footer__menu">
              <a className="logo" href="/#">
                <img src="./images/Logo-black.svg" alt="logo" />
              </a>
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a className="menu__list-link" href="/#">
                    Our coffee
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="/#">
                    For your pleasure
                  </a>
                </li>
              </ul>
            </nav>
            <div className="beans footer__beans">
              <img className="beans__img" src="./images/beans-black.svg" alt="beans" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
