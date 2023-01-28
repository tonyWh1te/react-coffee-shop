import { Link, Outlet } from 'react-router-dom';
import Beans from '../Beans/Beans';
import './Layout.scss';

function Layout() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="menu">
            <Link className="logo" to="/">
              <img src="/images/Logo.svg" alt="logo" />
            </Link>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link className="menu__list-link" to="/products">
                  Our coffee
                </Link>
              </li>
              <li className="menu__list-item">
                <Link className="menu__list-link" to="/#">
                  For your pleasure
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <nav className="menu footer__menu">
              <Link className="logo" to="/">
                <img src="./images/Logo-black.svg" alt="logo" />
              </Link>
              <ul className="menu__list">
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/products">
                    Our coffee
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/#">
                    For your pleasure
                  </Link>
                </li>
              </ul>
            </nav>
            <Beans classes={['footer__beans']} imageUrl={'/images/beans-black.svg'} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
