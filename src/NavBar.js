import { Link, useNavigate } from "react-router-dom";
import { useKorisnik } from "./KorisnikKontekst"; 
import './cssPojedinacni/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const { korisnik, setKorisnik, isRadnik } = useKorisnik(); 

  const handleLogout = () => {
    setKorisnik(null); 
    localStorage.removeItem("userId"); 
    navigate("/"); 
  };

  return (
    <nav>
        {isRadnik() ? (
          <Link to="/Radnik">REZERVACIJE</Link>
        ) : (
          <>
          <Link to="/">POČETNA</Link>
            <Link to="/usluge">USLUGE</Link>
            <Link to="/UvodRezervacije">REZERVACIJE</Link>
            <Link to="/galerija">GALERIJA</Link>
            <a href="#kontakt">KONTAKT</a>
          </>
        )}

        <div className="prijava">
          {!korisnik && !isRadnik() && (
            <Link to="/Prijava/register">Registruj se</Link>
          )}
          <button onClick={korisnik ? handleLogout : () => navigate("/Prijava")}>
            {korisnik ? "Izloguj se" : "Uloguj se"}
          </button>
        </div>
    </nav>
  );
};

export default NavBar;