import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="links">
          <Link to="/">POČETNA</Link>
          <Link to="/usluge">USLUGE</Link>
          <Link to="/rezervacije">REZERVACIJE</Link>
          <Link to="/galerija">GALERIJA</Link>
          <Link to="/kontakt">KONTAKT</Link>
        </div>
      </nav>
    );
  }
   
  export default NavBar;