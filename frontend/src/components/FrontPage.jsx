// src/components/FrontPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css'; // Import the CSS file for styling

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <div className="frontpage-header">
        <h1>Welcome to OG KISAN</h1>
        <h2>Your gateway to connecting with the farming community</h2>
      </div>
      <div className="button-container">
        <Link to="/home?role=farmers" className="button farmer-button">Farmer</Link>
        <Link to="/home?role=clients" className="button client-button">Client</Link>
      </div>
    </div>
  );
};

export default FrontPage;
