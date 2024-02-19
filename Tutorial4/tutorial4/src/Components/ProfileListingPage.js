import React, { useState, useEffect } from 'react';
import '../Style/ProfileListingPage.css';
import { Link } from 'react-router-dom';

const ProfileListing = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch('https://express-t4.onrender.com/api/users');
          if (response.ok) {
            const data = await response.json();
            setUsers(data);
          } else {
            console.error('Failed to fetch users');
          }
        } catch (error) {
          console.error('Error during user fetch:', error);
        }
      };
  
      fetchUsers();
    }, []);

    const filteredUsers = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      return (
        <div className="profile-list-container">
          <h2>Profile Listing</h2>
          <div className="search-box">
            Filter: <input
              type="text"
              placeholder="Search by First Name or Last Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="user-list">
          {filteredUsers.map((user) => (
          <Link key={user._id} to={`/profile-detail/${user._id}`} className="user-card-link">
            <div className="user-card">
              <img src={user.picture} alt={`Profile of ${user.name}`} className="user-image" />
              <div className="user-details">
                <p className="user-name">{user.name}</p>
              </div>
            </div>
          </Link>
            ))}
          </div>
        </div>
      );
    };
    
    export default ProfileListing;