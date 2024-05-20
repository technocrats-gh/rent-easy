import React, { useState } from 'react';
import '../Styles/SignUp.scss'
import '../Styles/StartLogin.scss'

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    // Destructure name and value from event target
    const { name, value } = e.target;
    // Update state with the new value for the corresponding input field
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <span id="button" className="row">
          <button type="submit">Sign Up</button>
        </span>
      </form>
    </div>
  );
}

export default SignUpPage;
