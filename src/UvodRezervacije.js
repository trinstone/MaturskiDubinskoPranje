import React from "react";
import { useNavigate } from "react-router-dom";
import { useKorisnik } from "./KorisnikKontekst"; // Import the user context

function UvodRezervacije() {
  const navigate = useNavigate();
  const { korisnik } = useKorisnik(); // Get logged-in user from context

  return (
    <div id="uvod-rezervacije-container">
      {/* Page Title */}
      <h1 id="uvod-rezervacije-title">Rezervacije</h1>

      {/* Display content based on whether the user is logged in */}
      {korisnik ? (
        // If the user is logged in, show the buttons
        <div id="uvod-rezervacije-buttons">
          <button
            id="moje-rezervacije-button"
            onClick={() => navigate(`/PostojeceRezervacije/${korisnik.id}`)} // Use user ID from context
          >
            Moje Rezervacije
          </button>
          <button
            id="napravi-rezervaciju-button"
            onClick={() => navigate("/Rezervacije")} // Navigate to the Rezervacije page
          >
            Napravi Novu Rezervaciju
          </button>
        </div>
      ) : (
        // If no user is logged in, show a message and a link to the registration page
        <div id="uvod-rezervacije-not-logged-in">
          <p id="uvod-rezervacije-message">
            Morate biti registrovani korisnik da biste pristupili ovom delu.
          </p>
          <button
            id="registrujte-se-button"
            onClick={() => navigate("/Prijava/register")} // Navigate to the registration page
          >
            Registrujte se ovde
          </button>
        </div>
      )}
    </div>
  );
}

export default UvodRezervacije;