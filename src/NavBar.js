import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="links">
          <Link to="/">POČETNA</Link>
          <Link to="/usluge">USLUGE</Link>
          <Link to="/rezervacije">REZERVACIJE</Link>
          <Link to="/galerija">GALERIJA</Link>
          <a href="#kontakt">KONTAKT</a>
          <div className="prijava">
            <Link to="/Prijava">Registruj se</Link>
            <button onClick={() => window.location.href = '/Prijava'}>Uloguj se</button>
          </div>
        </div>
      </nav>
    );
  }
   
  export default NavBar;