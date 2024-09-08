import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <div className="navbar">
        <h1>Farming Platform</h1>
      </div>

      {/* Floating Welcome Heading */}
      <div className="homepage-header">
        <h1>Welcome to Our Farming Platform</h1>
      </div>

      {/* Main Content Section */}
      <div className="homepage-content">
        <p>
          Empowering farmers and buyers to connect directly and make better agreements. 
          Join us in revolutionizing the agriculture sector with transparency and trust.
        </p>

        {/* Button Container with Pop-up Effect */}
        <div className="button-container">
          <a href="/login" className="button login-button">Login</a>
          <a href="/signup" className="button signup-button">Signup</a>
          <a href="/about" className="button about-button">More About Us</a>
        </div>
      </div>

      {/* Footer Section with Contact and Social Media Links */}
      <div className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>123 Farm Lane, Agriculture City, AG12345</p>
            <p>Email: info@farmingplatform.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="facebook-logo.png" alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src="twitter-logo.png" alt="Twitter" />
              </a>
              <a href="#" className="social-icon">
                <img src="instagram-logo.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;