import React from 'react';
import '../Style/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="container">
      <h1 className="header">Profile Page</h1>
      <div className="profile-details">
        <label>First Name:</label>
        <span>Jinay</span>
      </div>
      <div className="profile-details">
        <label>Last Name:</label>
        <span>Shah</span>
      </div>
      <div className="profile-details">
        <label>Email:</label>
        <span>jinay.shah@example.com</span>
      </div>
    </div>
  );
};

export default ProfilePage;
