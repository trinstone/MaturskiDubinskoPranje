import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import useFetch from "./useFetch"; // Assuming useFetch is in the same folder

const Prijava = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(location.pathname.toLowerCase() === "/prijava/register");

  useEffect(() => {
    setIsRegistering(location.pathname.toLowerCase() === "/prijava/register");
  }, [location.pathname]);

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");  // New fields
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // State for handling API request
  const [userData, setUserData] = useState(null); // Store data returned by useFetch
  const [isPending, setIsPending] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  // Use the useFetch hook to handle registration or login
  const { data, isPending: fetching, error: fetchError } = useFetch(
    isRegistering ? "http://localhost:5000/users" : "http://localhost:5000/users/login", // URL depends on registration or login
    "POST",
    isRegistering ? { email, password, name, lastName, phoneNumber } : { email, password } // Request body
  );

  useEffect(() => {
    console.log("Data:", data);  // Log response data
    console.log("Fetching:", fetching); // Log fetching status
    console.log("Fetch Error:", fetchError);  // Log fetch errors

    if (fetching) {
      setIsPending(true);
    }

    if (fetchError) {
      setError(fetchError);
      setIsPending(false);
    }

    if (data) {
      setUserData(data);
      setIsPending(false);
      if (isRegistering) {
        console.log("User Registered:", data);
        navigate("/prijava"); // Redirect to login page after successful registration
      } else {
        console.log("User Logged In:", data);
        navigate("/"); // Redirect to homepage or another page after successful login
      }
    }
  }, [data, fetching, fetchError, isRegistering, navigate]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="auth-form">
      <h1 id="form-title">{isRegistering ? "Register" : "Login"}</h1>
      <form id="form" onSubmit={handleSubmit}>
        {isRegistering && (
          <>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
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
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <p id="toggle-text">
        {isRegistering ? (
          <>Already have an account? <span onClick={() => navigate("/prijava")} style={{cursor: "pointer", color: "blue", textDecoration: "underline"}}>Login</span></>
        ) : (
          <>Don't have an account? <span onClick={() => navigate("/prijava/register")} style={{cursor: "pointer", color: "blue", textDecoration: "underline"}}>Register</span></>
        )}
      </p>
    </div>
  );
};

export default Prijava;


