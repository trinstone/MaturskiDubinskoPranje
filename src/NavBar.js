import { Link, useNavigate } from "react-router-dom";
import { useKorisnik } from "./KorisnikKontekst"; // Adjust path if necessary

const NavBar = () => {
  const navigate = useNavigate();
  const { korisnik, setKorisnik } = useKorisnik(); // Use the correct context

  const handleLogout = () => {
    setKorisnik(null); // Clear user data
    localStorage.removeItem("userId"); // Remove userId from local storage if used
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">POČETNA</Link>
        <Link to="/usluge">USLUGE</Link>
        <Link to="/UvodRezervacije">REZERVACIJE</Link>
        <Link to="/galerija">GALERIJA</Link>
        <a href="#kontakt">KONTAKT</a>
        <div className="prijava">
          {!korisnik && <Link to="/Prijava/register">Registruj se</Link>}
          <button onClick={korisnik ? handleLogout : () => navigate("/Prijava")}>
            {korisnik ? "Izloguj se" : "Uloguj se"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;