import React, { useState } from "react";

export default function Rezervacije() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("00:00");

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

  // Generate time options in 15-minute intervals for a full day
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        times.push(formattedTime);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="rezervacije">
      <h2>Rezervacija</h2>

      {/* Standard Input Fields - Two Columns */}
      <div className="input-grid">
        {["Ime", "Prezime", "Adresa", "Kontakt telefon"].map((label) => (
          <div key={label} className="input-group">
            <label>{label}:</label>
            <input type="text" placeholder={label} className="input-field" />
          </div>
        ))}

        {/* Date Input for Datum */}
        <div className="input-group">
          <label>Datum:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input-field" // Same styling as other inputs
          />
        </div>

        {/* Custom Time Dropdown for Datum i vreme */}
        <div className="input-group">
          <label>Vreme:</label>
          <div className="time-dropdown">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="input-field" // Same styling as other inputs
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
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
            className="input-field" // Same styling as other inputs
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
              <input
                type="text"
                placeholder={`Unesite detalje za ${service}`}
                className="input-field" // Same styling as other inputs
              />
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button className="submit-btn">Rezerviši</button>
    </div>
  );
}