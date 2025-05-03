import { useState } from 'react';
import { useKorisnik } from "./KorisnikKontekst";

const Radnik = () => {
  const korisnik = useKorisnik();
  const today = new Date();
  const [monthOffset, setMonthOffset] = useState(0); // 0 = current month

  const monthNames = [
    "Januar", "Februar", "Mart", "April", "Maj", "Jun",
    "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
  ];

  const dayNames = ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"];

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

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDayClick = (day) => {
    if (day) {
      console.log('Selected day:', day);
    }
  };

  const handleNext = () => {
    if (monthOffset < 3) {
      setMonthOffset(monthOffset + 1);
    }
  };

  const handlePrev = () => {
    if (monthOffset > 0) {
      setMonthOffset(monthOffset - 1);
    }
  };

  const monthDate = getCurrentMonthDate();

  return (
    <div className="calendar-container">
      <div className="calendar-navigation">
        {monthOffset > 0 && <button onClick={handlePrev}>Prethodni</button>}
        <h2>Kalendar</h2>
        {monthOffset < 3 && <button onClick={handleNext}>Sledeći</button>}
      </div>

      <h3 className="month-title" style={{ color: 'red' }}> {/* Force visible */}
        {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
      </h3>

      <div className="calendar-grid">
        {dayNames.map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
        {generateDays(monthDate).map((day, index) => (
          <button
            key={index}
            className={`day-button ${day ? '' : 'empty'}`}
            onClick={() => handleDayClick(day)}
            disabled={!day}
          >
            {day ? day.getDate() : ''}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Radnik;
