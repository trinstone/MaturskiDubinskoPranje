import React, { useState } from 'react';

const Prijava = () => {
  // State to toggle between Register and Login mode
  const [isRegistering, setIsRegistering] = useState(false);

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle toggle between Login and Register
  const toggleForm = (e) => {
    e.preventDefault();
    setIsRegistering(!isRegistering);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Register user logic
      registerUser(email, password);
    } else {
      // Login user logic
      loginUser(email, password);
    }
  };

  // Function for registering user
  const registerUser = (email, password) => {
    console.log("Registering user:", email, password);
    // Replace with actual API call
    // Example:
    // fetch('/register', { method: 'POST', body: JSON.stringify({ email, password }) });
  };

  // Function for logging in user
  const loginUser = (email, password) => {
    console.log("Logging in user:", email, password);
    // Replace with actual API call
    // Example:
    // fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  };

  return (
    <div id="auth-form">
      <h1 id="form-title">{isRegistering ? 'Register' : 'Login'}</h1>
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
        <button type="submit" id="submit-btn">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p id="toggle-text">
        {isRegistering ? (
          <>Already have an account? <a href="#" onClick={toggleForm}>Login</a></>
        ) : (
          <>Don't have an account? <a href="#" onClick={toggleForm}>Register</a></>
        )}
      </p>
    </div>
  );
};

export default Prijava;