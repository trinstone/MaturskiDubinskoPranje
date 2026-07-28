import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './stikeri/cegiClean.png';
import './cssPojedinacni/NavBar.css';

const NavBar = () => {
  const [otvoren, postaviOtvoren] = useState(false);

  const zatvoriMeni = () => postaviOtvoren(false);

  return (
    <nav>
      <div className="nav-sadrzaj">
        <Link to="/" className="nav-logo-link" onClick={zatvoriMeni}>
          <img src={logo} alt="Cegi Clean" className="logo" />
        </Link>

        <button
          className={`nav-hamburger ${otvoren ? 'otvoren' : ''}`}
          aria-label="Meni"
          onClick={() => postaviOtvoren((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-linkovi ${otvoren ? 'prikazano' : ''}`}>
          <Link to="/" onClick={zatvoriMeni}>Početna</Link>
          <Link to="/usluge" onClick={zatvoriMeni}>Usluge</Link>
          <Link to="/galerija" onClick={zatvoriMeni}>Galerija</Link>
          <a href="#kontakt" onClick={zatvoriMeni}>Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
