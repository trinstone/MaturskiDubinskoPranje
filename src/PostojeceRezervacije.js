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
        const response = await fetch(`http://localhost:5000/rezervacije?userId=${korisnik.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch reservations");
        }
        const data = await response.json();
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
    <div>
      <h1>Postojeće Rezervacije</h1>
      {loading ? (
        <p>Učitavanje rezervacija...</p>
      ) : rezervacije.length > 0 ? (
        <ul>
          {rezervacije.map((rezervacija) => (
            <li key={rezervacija.id}>
              <strong>Datum:</strong> {rezervacija.datum}, <strong>Vreme:</strong> {rezervacija.vreme}, <strong>Adresa:</strong> {rezervacija.adresa}, <strong>Usluge:</strong> {rezervacija.usluge.join(", ")}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nemate nijednu rezervaciju.</p>
      )}
    </div>
  );
};

export default PostojeceRezervacije;