import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ProfileListingPage from './Components/ProfileListingPage';
import ProfileDetailPage from './Components/ProfileDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile-listing" element={<ProfileListingPage />} />
        <Route path="/profile-detail/:id" element={<ProfileDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;