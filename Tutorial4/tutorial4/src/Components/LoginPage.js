import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/LoginPage.css';
const Login = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
      try {
        const response = await fetch('https://express-t4.onrender.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (response.ok) {
          navigate('/profile-listing');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    return (
      <div className="container">
        <h2>Login</h2>
        <div className="form-container">
          <label className="label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
          </label>
          <label className="label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </label>
          <button type="button" onClick={handleLogin} className="button">
            Login
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;