import React, { useState } from "react";
import { useKorisnik } from "./KorisnikKontekst"; // Import user context

export default function Rezervacije() {
  const { korisnik } = useKorisnik();
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("00:00");
  const [adresa, setAdresa] = useState("");  // State for 'Adresa'
  const [napomena, setNapomena] = useState("");  // State for 'Napomena'

  // Mapping of service names to IDs
  const serviceOptions = [
    { id: 1, name: "Stolica" },
    { id: 2, name: "Trosed" },
    { id: 3, name: "Tepih" },
    { id: 4, name: "Auto" },
    { id: 5, name: "Tvrde površine" },
    { id: 6, name: "Staklene površine" }
  ];

  const toggleService = (service) => {
    if(selectedServices.some(s => s.service === service))
    {
            setSelectedServices((prev) =>
        prev.filter((s) => s.service !== service));
    }
    else{
      setSelectedServices((prev) =>
        [...prev, {service: service, detail: "" }]
      );
    }
  };

  const handleDetailChange = (service, value) => {
    setSelectedServices((prev) => prev.map((s)=>s.service === service ? {service: service,detail: value}:s));
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

    // Map selected services to their IDs
    const selectedServiceIds = selectedServices.map(serviceName => {
      const service = serviceOptions.find(option => option.name === serviceName.service);
      return service ? service.id : null;
    }).filter(id => id !== null); // Remove null values if any service name is invalid
    const selectedServiceDetails = selectedServices.map(s => s.detail);
    const reservationData = {
      mejl: korisnik.mejl, // Updated: Klijent should be an object, not just the ID
      adresa: adresa,  // Using React state for 'Adresa'
      datumVreme: `${selectedDate}T${selectedTime}:00`, // Ensure full datetime format for backend
      uslugeIds: selectedServiceIds,
      detaljiUsluga: selectedServiceDetails, // Send IDs instead of names
      napomena: napomena,  // Using React state for 'Napomena'
    };

    console.log("Sending reservation data:", reservationData);

    try {
      const response = await fetch("http://localhost:8080/api/rezervacije/", {
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
      console.log("Reservation successfully created:", data); // Backend response

      // Clear form after submission
      setAdresa("");
      setSelectedDate("");
      setSelectedTime("00:00");
      setSelectedServices([]);
      setNapomena("");

      alert("Rezervacija uspešno poslata!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Došlo je do greške prilikom slanja rezervacije.");
    }
  };

  return (
    <main>
      <div className="rezervacije">
        <h2>Rezervacija</h2>

        <div className="input-grid">
          <div className="input-group">
            <label>Adresa:</label>
            <input
              type="text"
              placeholder="Adresa"
              className="input-field"
              value={adresa}  // Use state for 'Adresa'
              onChange={(e) => setAdresa(e.target.value)}  // Update state when input changes
            />
          </div>

          <div className="input-group">
            <label>Datum:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group-row">
            <div className="input-group">
              <label>Vreme:</label>
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

            <div className="input-group">
              <label>Usluge:</label>
              <div className="usluge-input">
                <input
                  type="text"
                  readOnly
                  value={selectedServices.map(s=>s.service).join(", ")}
                  placeholder="Odaberi usluge"
                  className="input-field"
                />
                <button
                  className="dropdown-btn"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  ▼
                </button>
              </div>

              {isDropdownOpen && (
                <div className="dropdown-content">
                  {serviceOptions.map((service) => (
                    <label key={service.name} className="dropdown-item">
                      <input
                        type="checkbox"
                        checked={selectedServices.some(s => s.service === service.name)}
                        onChange={() => toggleService(service.name)}
                      />
                      {service.name}
                    </label>
                  ))}
                  <button className="ok-btn" onClick={() => setIsDropdownOpen(false)}>
                    OK
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {selectedServices.length > 0 && (
          <div className="input-grid">
            {selectedServices.map((service) => (
              <div key={service.service} className="input-group">
                <label>{service.service}:</label>
                <input
                  type="text"
                  placeholder={`Unesite detalje za ${service.service}`}
                  value={service.detail}
                  onChange={(e) => handleDetailChange(service.service, e.target.value)}
                  className="input-field"
                />
              </div>
            ))}
          </div>
        )}

        <div className="input-group">
          <label>Napomena:</label>
          <input
            type="text"
            placeholder="Unesite napomenu"
            value={napomena}  // Using state for 'Napomena'
            onChange={(e) => setNapomena(e.target.value)}  // Update state when input changes
            className="input-field"
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>Rezerviši</button>
      </div>
    </main>
  );
}