import React, { useState } from "react";

export default function Rezervacije() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    "Stolica",
    "Trosed",
    "Tepih",
    "Auto",
    "Tvrde površine",
    "Staklene površine",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <div className="rezervacije">
      <h2>Rezervacija</h2>

      {/* Standard Input Fields - Two Columns */}
      <div className="input-grid">
        {["Ime", "Prezime", "Adresa", "Kontakt telefon", "Datum i vreme"].map((label) => (
          <div key={label} className="input-group">
            <label>{label}:</label>
            <input type="text" placeholder={label} />
          </div>
        ))}
      </div>

      {/* "Usluge" Input with Dropdown Button */}
      <div className="input-group usluge-container">
        <label>Usluge:</label>
        <div className="usluge-input">
          <input
            type="text"
            readOnly
            value={selectedServices.join(", ")}
            placeholder="Odaberi usluge"
          />
          <button className="dropdown-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            ▼
          </button>
        </div>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className="dropdown-content">
            {serviceOptions.map((service) => (
              <label key={service} className="dropdown-item">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                />
                {service}
              </label>
            ))}
            <button className="ok-btn" onClick={() => setIsDropdownOpen(false)}>OK</button>
          </div>
        )}
      </div>

      {/* Dynamically Generated Inputs for Selected Services */}
      {selectedServices.length > 0 && (
        <div className="input-grid">
          {selectedServices.map((service) => (
            <div key={service} className="input-group">
              <label>{service}:</label>
              <input type="text" placeholder={`Unesite detalje za ${service}`} />
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button className="submit-btn">Rezerviši</button>
    </div>
  );
}