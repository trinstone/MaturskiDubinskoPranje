import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useKorisnik } from "./KorisnikKontekst"; 
import './cssPojedinacni/Prijava.css';

const Prijava = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setKorisnik } = useKorisnik(); 

  const [isRegistering, setIsRegistering] = useState(location.pathname.toLowerCase() === "/prijava/register");
  const [isRadnik, setIsRadnik] = useState(false);

  useEffect(() => {
    setIsRegistering(location.pathname.toLowerCase() === "/prijava/register");
  }, [location.pathname]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Keep the password, but don't use it for login validation
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      if (isRegistering) {
        // Registration code remains the same
        const isRadnikRegistration = email.includes('@dubinskop');
        
        const newUser = {
          mejl: email,
          sifra: password,
          ime: name,
          prezime: lastName,
          brTelefon: phoneNumber
        };

        const endpoint = isRadnikRegistration 
          ? 'http://localhost:8080/api/radnici' 
          : 'http://localhost:8080/api/klijenti/';

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser)
        });

        if (!response.ok) {
          const errorText = await response.text();
          try {
            const errorData = JSON.parse(errorText);
            if (errorData.message?.includes('duplicate key') || 
                errorData.message?.includes('already exists')) {
              throw new Error('Ovaj email je već registrovan. Molimo prijavite se ili koristite drugi email.');
            }
            throw new Error(errorData.message || 'Došlo je do greške prilikom registracije');
          } catch {
            if (errorText.includes('duplicate key') || 
                errorText.includes('already exists')) {
              throw new Error('Ovaj email je već registrovan. Molimo prijavite se ili koristite drugi email.');
            }
            throw new Error(errorText || 'Došlo je do greške prilikom registracije');
          }
        }

        const savedUser = await response.json();
        setKorisnik(savedUser);
        navigate(isRadnikRegistration ? "/Radnik" : "/");
      } else {
        // If we're logging in, check if email contains "@dubinskop" (indicating radnik)
        const isRadnikLogin = email.includes('@dubinskop');
        
        let response;
        if (isRadnikLogin) {
          // If it's a radnik, only fetch from /api/radnici
          response = await fetch('http://localhost:8080/api/radnici');
        } else {
          // If it's a klijent, only fetch from /api/klijenti
          response = await fetch('http://localhost:8080/api/klijenti/');
        }

        if (!response.ok) {
          setError("Došlo je do greške pri pristupu serveru.");
          return;
        }

        const users = await response.json();

        // Find the user from the fetched data, just checking for the email
        const user = users.find(user => user.mejl === email);

        if (user) {
          // If the user is found, set the user and navigate
          setKorisnik(user);
          navigate(user.mejl.includes('@dubinskop') ? "/Radnik" : "/");
        } else {
          setError("Pogrešni kredencijali. Pokušajte ponovo.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main>
      <div id="auth-form">
        <h1 id="form-title">{isRegistering ? "Registracija" : "Login"}</h1>
        <form id="form" onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <input type="text" id="name" placeholder="Ime" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" id="lastName" placeholder="Prezime" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <input type="tel" id="phoneNumber" placeholder="Broj telefona" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </>
          )}

          <input 
            type="email" 
            id="email" 
            placeholder="Mejl" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            id="password" 
            placeholder="Lozinka" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" id="submit-btn" disabled={isPending}>
            {isPending ? "Učitavanje..." : (isRegistering ? "Registracija" : "Login")}
          </button>
        </form>
        {error && (
          <p style={{ 
            color: "red",
            backgroundColor: "#ffeeee",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
          }}>
            {error}
          </p>
        )}
        <p id="toggle-text">
          {isRegistering ? (
            <>Već imate nalog? <span onClick={() => navigate("/prijava")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Login</span></>
          ) : (
            <>Nemate nalog? <span onClick={() => navigate("/prijava/register")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Registracija</span></>
          )}
        </p>
      </div>
    </main>
  );
};

export default Prijava;