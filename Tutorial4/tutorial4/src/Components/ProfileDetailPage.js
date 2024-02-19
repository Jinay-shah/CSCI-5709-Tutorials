import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/ProfileDetailPage.css';

const ProfileDetail = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error during user details fetch:', error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="profile-detail-container">
      <h2>User Profile Detail</h2>
      {user ? (
        <div className="user-profile-box">
          <img src={user.picture} alt={`Profile of ${user.name}`} className="user-image" />
          <div className="user-details">
          {Object.entries(user).map(([key, value]) => (
              <p key={key} className="detail-item">
                <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileDetail;
