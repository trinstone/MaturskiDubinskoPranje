import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useKorisnik } from "./KorisnikKontekst"; // Import the user context

const Prijava = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setKorisnik } = useKorisnik(); // Get setKorisnik from context

  const [isRegistering, setIsRegistering] = useState(location.pathname.toLowerCase() === "/prijava/register");

  useEffect(() => {
    setIsRegistering(location.pathname.toLowerCase() === "/prijava/register");
  }, [location.pathname]);

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // State for handling API request
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isRegistering) {
      // Register a new user
      const newUser = {
        mejl: email,
        sifra: password,
        ime: name,
        prezime: lastName,
        brTelefon: phoneNumber
      };
  
      try {
        const response = await fetch('http://localhost:8080/api/klijenti/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser)
        });
  
        if (!response.ok) {
          const errorMsg = await response.text();
          throw new Error(`Server error: ${errorMsg}`);
        }
  
        const savedUser = await response.json(); // Assuming backend returns saved user
        console.log("User Registered:", savedUser);
        setKorisnik(savedUser); // Save user to context
        navigate("/"); // Redirect after registration
      } catch (error) {
        console.error("Error registering user:", error);
        setError("Registration failed. " + error.message);
      }
    } else {
      // Login process
      try {
        const response = await fetch('http://localhost:8080/api/klijenti/');
        const users = await response.json();
  
        const user = users.find(user => user.mejl === email && user.sifra === password);
  
        if (user) {
          console.log('User logged in:', user);
          setKorisnik(user); // Save logged-in user to context
          navigate("/"); // Redirect after login
        } else {
          console.log('User not found');
          setError("Invalid credentials");
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('An error occurred while trying to fetch users.');
      }
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

          <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" id="submit-btn" disabled={isPending}>{isRegistering ? "Register" : "Login"}</button>
        </form>
        {isPending && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <p id="toggle-text">
          {isRegistering ? (
            <>Already have an account? <span onClick={() => navigate("/prijava")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Login</span></>
          ) : (
            <>Don't have an account? <span onClick={() => navigate("/prijava/register")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Register</span></>
          )}
        </p>
      </div>
    </main>
  );
};

export default Prijava;
