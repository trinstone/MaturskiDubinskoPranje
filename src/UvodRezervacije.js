import React from "react";
import { useNavigate } from "react-router-dom";

function UvodRezervacije() {
  const navigate = useNavigate();

  // Replace "1" with the actual user ID (e.g., from authentication or state)
  const userId = 1;

  return (
    <div>
      {/* Page Title */}
      <h1>Rezervacije</h1>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate(`/postojece-rezervacije/${userId}`)} // Navigate to the user's PostojeceRezervacije page
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Moje Rezervacije
        </button>
        <button
          onClick={() => navigate("/rezervacije")} // Navigate to the Rezervacije page
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Napravi Novu Rezervaciju
        </button>
      </div>
    </div>
  );
}

export default UvodRezervacije;