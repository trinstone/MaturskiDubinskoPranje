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
  const [password, setPassword] = useState("");
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
        // Determine if this is a Radnik registration
        const isRadnikRegistration = email.includes('@dubinskop');
        
        const newUser = {
          mejl: email,
          sifra: password,
          ime: name,
          prezime: lastName,
          brTelefon: phoneNumber
        };

        const endpoint = isRadnikRegistration 
          ? 'http://localhost:8080/api/radnici/'
          : 'http://localhost:8080/api/klijenti/';

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser)
        });

        if (!response.ok) {
          const errorMsg = await response.text();
          throw new Error(`Server error: ${errorMsg}`);
        }

        const savedUser = await response.json();
        setKorisnik(savedUser);
        navigate(isRadnikRegistration ? "/Radnik" : "/");
      } else {
        // Login process - check both klijenti and radnici
        const [klijentiResponse, radniciResponse] = await Promise.all([
          fetch('http://localhost:8080/api/klijenti/'),
          fetch('http://localhost:8080/api/radnici/')
        ]);

        const [klijenti, radnici] = await Promise.all([
          klijentiResponse.json(),
          radniciResponse.json()
        ]);

        const user = [...klijenti, ...radnici].find(
          user => user.mejl === email && user.sifra === password
        );

        if (user) {
          setKorisnik(user);
          navigate(user.mejl.includes('@dubinskop') ? "/Radnik" : "/");
        } else {
          setError("Invalid credentials");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "An error occurred");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main>
      <div id="auth-form">
        <h1 id="form-title">{isRegistering ? "Register" : "Login"}</h1>
        <form id="form" onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <input type="tel" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </>
          )}

          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            id="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" id="submit-btn" disabled={isPending}>
            {isPending ? "Processing..." : (isRegistering ? "Register" : "Login")}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!isRadnik && (
          <p id="toggle-text">
            {isRegistering ? (
              <>Already have an account? <span onClick={() => navigate("/prijava")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Login</span></>
            ) : (
              <>Don't have an account? <span onClick={() => navigate("/prijava/register")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Register</span></>
            )}
          </p>
        )}
      </div>
    </main>
  );
};

export default Prijava;
