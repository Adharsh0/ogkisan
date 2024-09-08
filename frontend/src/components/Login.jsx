// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login Data:', credentials);
    
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-header">Farmer Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={credentials.username}
//               onChange={handleChange}
//               required
//               placeholder="Enter your username"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="forgot-password">
//             <a href="/forgot-password">Forgot Password?</a>
//           </div>
//           <button type="submit" className="continue-button">Continue</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if credentials match
    if (credentials.username === 'biju' && credentials.password === '1234') {
      console.log('Login successful');
      // Redirect to the MainPage
      navigate('/main');
    } else {
      console.log('Invalid credentials');
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Farmer Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="continue-button">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
