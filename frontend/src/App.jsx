
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import FrontPage from './components/FrontPage';
// import HomePage from './components/HomePage';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import MainPage from './components/MainPage'; // Update this if needed
// import ContactDashboard from './components/ContactDashboard';



// const App = () => {
//   return (
//     <Router>
      
//         <Routes>
//           <Route path="/" element={<FrontPage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/main" element={<MainPage />} /> {/* Adjust as needed */}
//           <Route path="/contact-dashboard" element={<ContactDashboard />} />
          
//         </Routes>
      
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import NewContracts from './components/NewContracts'; // Import NewContracts
import ContactDashboard from './components/ContactDashboard';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/new-contracts" element={<NewContracts />} /> {/* Add this route */}
        <Route path="/contact-dashboard" element={<ContactDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
