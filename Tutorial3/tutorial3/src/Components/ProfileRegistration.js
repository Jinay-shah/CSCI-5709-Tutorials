import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ProfileRegistration.css';

const ProfileRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!nameRegex.test(formData.firstName)) {
      errors.firstName = 'Invalid first name (only letters allowed)';
    }

    if (!nameRegex.test(formData.lastName)) {
      errors.lastName = 'Invalid last name (only letters allowed)';
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!passwordRegex.test(formData.password)) {
      errors.password = 'Invalid password format (alphanumeric and special characters, minimum 8 characters)';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    } 

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/profile');
    }
  };

  return (
    <div className="form-container">
      <h1 className="header">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {errors.email && <p className="error-message">{errors.email}</p>}
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
        <div className="form-group">
          {errors.password && <p className="error-message">{errors.password}</p>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProfileRegistration;
