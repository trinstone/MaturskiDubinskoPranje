import React, { useState } from "react";
import { useKorisnik } from "./KorisnikKontekst"; // Import user context

export default function Rezervacije() {
  const { korisnik } = useKorisnik();
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("00:00");

  const serviceOptions = ["Stolica", "Trosed", "Tepih", "Auto", "Tvrde površine", "Staklene površine"];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
    setServiceDetails((prev) => ({
      ...prev,
      [service]: prev[service] || "", // Keep existing details or initialize empty
    }));
  };

  const handleDetailChange = (service, value) => {
    setServiceDetails((prev) => ({ ...prev, [service]: value }));
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        times.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleSubmit = async () => {
    if (!korisnik) {
      alert("Morate biti prijavljeni da biste napravili rezervaciju.");
      return;
    }

    const reservationData = {
      korisnikId: korisnik.id,
      adresa: document.querySelector('input[placeholder="Adresa"]').value,
      datum: selectedDate,
      vreme: selectedTime,
      usluge: selectedServices.map((service) => ({
        naziv: service,
        detalji: serviceDetails[service] || "", // Include user-inputted details
      })),
    };

    console.log("Sending reservation data:", reservationData);

    try {
      const response = await fetch("http://localhost:5000/rezervacije/", {
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

      // Clear form after submission
      document.querySelector('input[placeholder="Adresa"]').value = "";
      setSelectedDate("");
      setSelectedTime("00:00");
      setSelectedServices([]);
      setServiceDetails({});

      alert("Rezervacija uspešno poslata!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Došlo je do greške prilikom slanja rezervacije.");
    }
  };

  return (
    <div className="rezervacije">
      <h2>Rezervacija</h2>

      <div className="input-grid">
        <div className="input-group">
          <label>Adresa:</label>
          <input type="text" placeholder="Adresa" className="input-field" />
        </div>

        <div className="input-group">
          <label>Datum:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="input-field" />
        </div>

        <div className="input-group-row">
          <div className="input-group">
            <label>Vreme:</label>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="input-field">
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Usluge:</label>
            <div className="usluge-input">
              <input type="text" readOnly value={selectedServices.join(", ")} placeholder="Odaberi usluge" className="input-field" />
              <button className="dropdown-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>▼</button>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-content">
                {serviceOptions.map((service) => (
                  <label key={service} className="dropdown-item">
                    <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => toggleService(service)} />
                    {service}
                  </label>
                ))}
                <button className="ok-btn" onClick={() => setIsDropdownOpen(false)}>OK</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedServices.length > 0 && (
        <div className="input-grid">
          {selectedServices.map((service) => (
            <div key={service} className="input-group">
              <label>{service}:</label>
              <input type="text" placeholder={`Unesite detalje za ${service}`} value={serviceDetails[service] || ""} onChange={(e) => handleDetailChange(service, e.target.value)} className="input-field" />
            </div>
          ))}
        </div>
      )}

      <button className="submit-btn" onClick={handleSubmit}>Rezerviši</button>
    </div>
  );
}