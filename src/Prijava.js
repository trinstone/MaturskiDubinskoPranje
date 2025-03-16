import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Prijava = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate from react-router-dom (correct way for v6)

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
  const [isPending, setIsPending] = useState(false); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate registering a new user
    if (isRegistering) {
      const newUser = { email, password, name, lastName, phoneNumber };

      // Simulate saving to the DB (just pushing to local state)
      fetch('http://localhost:5000/users/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      }).then(() => {
        // After successful registration, redirect to home page
        navigate("/"); // Correct usage of navigate
      });
      console.log("User Registered:", newUser);
    } else {
      // Check if the user exists in the database
      const checkUser = async (email, password) => {
        try {
          const response = await fetch('http://localhost:5000/users'); // Assuming your JSON server is running at this URL
          const users = await response.json();

          // Check if the user exists in the users array
          const user = users.find(user => user.email === email && user.password === password);

          if (user) {
            console.log('User found/ user logged in:', user);
            navigate("/"); // Redirect to the main page after login
          } else {
            console.log('User not found');
            setError("Invalid credentials"); // Set error if user is not found
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          setError('An error occurred while trying to fetch users.');
        }
      };

      checkUser(email, password);
    }
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


