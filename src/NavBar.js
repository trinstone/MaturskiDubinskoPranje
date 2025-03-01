import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
      <nav className="navbar">
        <div className="links">
          <Link to="/">POČETNA</Link>
          <Link to="/usluge">USLUGE</Link>
          <Link to="/rezervacije">REZERVACIJE</Link>
          <Link to="/galerija">GALERIJA</Link>
          <a href="#kontakt">KONTAKT</a>
          <div className="prijava">
            <Link to="/Prijava/register">Registruj se</Link>
            <button onClick={() => navigate('/Prijava')}>Uloguj se</button> 
          </div>
        </div>
      </nav>
    );
}

export default NavBar;
