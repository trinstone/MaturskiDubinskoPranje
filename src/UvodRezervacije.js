import React from "react";
import { useNavigate } from "react-router-dom";

function UvodRezervacije() {
  const navigate = useNavigate();

  // Check if a user is logged in (e.g., by checking local storage or state)
  const userId = localStorage.getItem("userId"); // Replace with your actual authentication logic

  return (
    <div id="uvod-rezervacije-container">
      {/* Page Title */}
      <h1 id="uvod-rezervacije-title">Rezervacije</h1>

      {/* Display content based on whether the user is logged in */}
      {userId ? (
        // If the user is logged in, show the buttons
        <div id="uvod-rezervacije-buttons">
          <button
            id="moje-rezervacije-button"
            onClick={() => navigate(`/postojece-rezervacije/${userId}`)} // Navigate to the user's PostojeceRezervacije page
          >
            Moje Rezervacije
          </button>
          <button
            id="napravi-rezervaciju-button"
            onClick={() => navigate("/rezervacije")} // Navigate to the Rezervacije page
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