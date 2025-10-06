import { Link } from "react-router-dom";
import './cssPojedinacni/NavBar.css';

const NavBar = () => {
  return (
    <nav>
       
          <Link to="/">POČETNA</Link>
          <Link to="/usluge">USLUGE</Link>
          <Link to="/galerija">GALERIJA</Link>
          <a href="#kontakt">KONTAKT</a>
    </nav>
  );
};

export default NavBar;