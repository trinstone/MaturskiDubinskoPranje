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

  // Generate time options in 15-minute intervals
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

  const handleSubmit = async () => {
    const reservationData = {
      adresa: document.querySelector('input[placeholder="Adresa"]').value,
      datum: selectedDate,
      vreme: selectedTime,
      usluge: selectedServices,
    };

    console.log("Sending reservation data:", reservationData);

    try {
      const response = await fetch("http://localhost:5000/rezervacije", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Reservation successfully created:", data);

      // Clear the form after successful submission
      document.querySelector('input[placeholder="Adresa"]').value = "";
      setSelectedDate("");
      setSelectedTime("00:00");
      setSelectedServices([]);

      alert("Rezervacija uspešno poslata!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Došlo je do greške prilikom slanja rezervacije.");
    }
  };

  return (
    <div className="rezervacije">
      <h2>Rezervacija</h2>

      {/* Standard Input Fields - Two Columns */}
      <div className="input-grid">
        {/* Only Adresa field remains */}
        <div className="input-group">
          <label>Adresa:</label>
          <input type="text" placeholder="Adresa" className="input-field" />
        </div>

        {/* Date Input for Datum */}
        <div className="input-group">
          <label>Datum:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Vreme and Usluge in the same row */}
        <div className="input-group-row">
          {/* Vreme Dropdown */}
          <div className="input-group">
            <label>Vreme:</label>
            <div className="time-dropdown">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="input-field"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Usluge Input */}
          <div className="input-group">
            <label>Usluge:</label>
            <div className="usluge-input">
              <input
                type="text"
                readOnly
                value={selectedServices.join(", ")}
                placeholder="Odaberi usluge"
                className="input-field"
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
        </div>
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
                className="input-field"
              />
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit}>
        Rezerviši
      </button>
    </div>
  );
}