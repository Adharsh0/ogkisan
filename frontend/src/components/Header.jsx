
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
// import './Header.css';

// const Header = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('English');

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
    
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <h2><span className="logo-text">OG</span> <span className="kisan">KISAN</span></h2>
//         <h3>Connect With Nature</h3>
//       </div>
//       <div className="header-links">
//         <Link to="/new-contracts">
//           <button className="new-contract-btn">
//             New Contract
//           </button>
//         </Link>
//         <Link to="/profile" className="profile-link">
//           Profile
//         </Link>
//       </div>
//       <div className="user-icon">
//         <i className="fa fa-user"></i>
//       </div>
//       <div className="language-selector">
//         <select value={selectedLanguage} onChange={handleLanguageChange}>
//           <option value="English">English</option>
//           <option value="Hindi">Hindi</option>
//           <option value="Malayalam">Malayalam</option>
       
//         </select>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Optionally handle language change logic here
  };

  return (
    <header className="header">
      <div className="logo">
        <h2><span className="logo-text">OG</span> <span className="kisan">KISAN</span></h2>
        <h3>Connect With Nature</h3>
      </div>
      <div className="header-links">
        <Link to="/new-contracts">
          <button className="new-contract-btn">
            New Contract
          </button>
        </Link>
        <Link to="/profile" className="profile-link">
          Profile
        </Link>
      </div>
      <div className="user-icon">
        <i className="fa fa-user"></i>
      </div>
      <div className="language-selector">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Malayalam">Malayalam</option>
          {/* Add more languages as needed */}
        </select>
      </div>
    </header>
  );
};

export default Header;
