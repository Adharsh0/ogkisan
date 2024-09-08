import React from 'react';
import './ProfilePage.css'; // Import CSS for styling

const ProfilePage = () => {
  // Mock data for the logged-in farmer
  const farmer = {
    name: 'Raj Kumar',
    email: 'raj.kumar@example.com',
    phoneNo: '123-456-7890',
    city: 'Delhi',
    profilePicture: 'https://via.placeholder.com/150' // Placeholder image
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={farmer.profilePicture} alt="Profile" className="profile-picture" />
        <h1>{farmer.name}</h1>
        <p className="profile-email">{farmer.email}</p>
      </div>
      <div className="profile-details">
        <h2>Details</h2>
        <p><strong>Phone:</strong> {farmer.phoneNo}</p>
        <p><strong>City:</strong> {farmer.city}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
