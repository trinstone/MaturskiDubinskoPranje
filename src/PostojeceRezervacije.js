import React, { useEffect, useState } from "react";
import { useKorisnik } from "./KorisnikKontekst"; // Adjust path if needed

const PostojeceRezervacije = () => {
  const { korisnik } = useKorisnik();
  const [rezervacije, setRezervacije] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!korisnik) return;

    const fetchRezervacije = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/rezervacije/klijent/${korisnik.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch reservations");
        }
        const data = await response.json();
        console.log(data);  // Log the fetched data to inspect the structure
        setRezervacije(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRezervacije();
  }, [korisnik]);

  if (!korisnik) {
    return <p>Morate biti prijavljeni da biste videli svoje rezervacije.</p>;
  }

  return (
    <main>
    <div>
      <h1>Postojeće Rezervacije</h1>
      {loading ? (
        <p>Učitavanje rezervacija...</p>
      ) : rezervacije.length > 0 ? (
        rezervacije.map((rezervacija) => (
          <table key={rezervacija.id}>
            <thead>
              <tr>
                <th colSpan="2">
                  Rezervacija #{rezervacija.id}
                </th>
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
                        <li key={index}>
                          <strong>{usluga.naziv}</strong>: {usluga.detalji}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "Nema usluga"
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p id="BezRez">Nemate nijednu rezervaciju.</p>
      )}
    </div>
  </main>
  );
};

export default PostojeceRezervacije;