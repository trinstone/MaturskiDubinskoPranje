import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Prijava = () => {
  const location = useLocation(); // Get current URL
  const navigate = useNavigate(); // ✅ React Router navigation hook

  // State to track whether the user is registering
  const [isRegistering, setIsRegistering] = useState(location.pathname.toLowerCase() === "/prijava/register");

  // Update `isRegistering` whenever the URL changes
  useEffect(() => {
    setIsRegistering(location.pathname.toLowerCase() === "/prijava/register");
  }, [location.pathname]);

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      registerUser(email, password);
    } else {
      loginUser(email, password);
    }
  };

  // Function for registering user
  const registerUser = (email, password) => {
    console.log("Registering user:", email, password);
  };

  // Function for logging in user
  const loginUser = (email, password) => {
    console.log("Logging in user:", email, password);
  };

  return (
    <div id="auth-form">
      <h1 id="form-title">{isRegistering ? "Register" : "Login"}</h1>
      <form id="form" onSubmit={handleSubmit}>
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
        <button type="submit" id="submit-btn">
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>
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

