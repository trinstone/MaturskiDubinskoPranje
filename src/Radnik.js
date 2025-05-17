import { useState, useEffect } from 'react';
import { useKorisnik } from "./KorisnikKontekst";
import './cssPojedinacni/Radnik.css';

const Radnik = () => {
  const today = new Date();
  const [monthOffset, setMonthOffset] = useState(0);
  const [rezervacije, setRezervacije] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    "Januar", "Februar", "Mart", "April", "Maj", "Jun",
    "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
  ];

  const dayNames = ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"];

  useEffect(() => {
    fetch('http://localhost:8080/api/rezervacije/') // Adjust this to your actual endpoint
      .then(res => res.json())
      .then(data => setRezervacije(data))
      .catch(err => console.error("Greška pri dohvatanju rezervacija:", err));
  }, []);

  const getCurrentMonthDate = () => {
    const date = new Date(today);
    date.setMonth(today.getMonth() + monthOffset);
    return date;
  };

  const generateDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    const startDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    for (let i = 0; i < startDay; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) days.push(new Date(year, month, i));
    return days;
  };

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDate(day.toISOString().split('T')[0]);
    }
  };

  const getReservationCount = (day) => {
    if (!day) return 0;
    const dateStr = day.toISOString().split('T')[0];
    return rezervacije.filter(r => r.datumVreme.startsWith(dateStr)).length;
  };

  const getReservationsForSelectedDate = () => {
    return rezervacije.filter(r => r.datumVreme.startsWith(selectedDate));
  };

  const monthDate = getCurrentMonthDate();
  const days = generateDays(monthDate);

  return (
    <div className="calendar-container">
      <div className="calendar-navigation">
        {monthOffset > 0 && <button onClick={() => setMonthOffset(monthOffset - 1)}>Prethodni</button>}
        <h2>Kalendar</h2>
        {monthOffset < 3 && <button onClick={() => setMonthOffset(monthOffset + 1)}>Sledeći</button>}
      </div>

      <h3 className="month-title" style={{ color: 'black' }}>
        {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
      </h3>

      <div className="calendar-grid">
        {dayNames.map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
        {days.map((day, index) => {
          const count = getReservationCount(day);
          const isActive = count > 0;
          return (
            <button
              key={index}
              className={`day-button ${!day ? 'empty' : ''} ${isActive ? 'has-reservations' : ''}`}
              onClick={() => handleDayClick(day)}
              disabled={!day}
            >
              {day ? (
                <>
                  {day.getDate()}
                  {count > 0 && <span className="reservation-count">{count}</span>}
                </>
              ) : ''}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="reservation-details">
          <h4>Rezervacije za: {selectedDate}</h4>
          {getReservationsForSelectedDate().map(rezervacija => (
            <table key={rezervacija.id}>
              <thead>
                <tr>
                  <th colSpan="2">Rezervacija #{rezervacija.id}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Datum</td>
                  <td>{rezervacija.datumVreme}</td>
                </tr>
                <tr>
                  <td className="reservation-cell reservation-cell-bold">Adresa</td>
                  <td className="reservation-cell">{rezervacija.adresa}</td>
                </tr>
                <tr>
                  <td>Usluge</td>
                  <td>
                    {rezervacija.usluge && rezervacija.usluge.length > 0 ? (
                      <ul>
                        {rezervacija.usluge.map((usluga, index) => (
                          <li key={index}><strong>{usluga.naziv}</strong>: {usluga.detalji}</li>
                        ))}
                      </ul>
                    ) : "Nema usluga"}
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
};

export default Radnik;