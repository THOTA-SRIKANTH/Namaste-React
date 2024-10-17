// App.js
import React from 'react';
import logo from './logo.svg';
import icon from './icon.png'; // Import the icon image
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function App() {
  return (
    <div className="header">
      <div className="logo">
        <img src={icon} alt="Logo" /> {/* Use the imported icon variable */}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">
        <img src={logo} alt="User" /> {/* Optionally use the logo image here */}
      </div>
    </div>
  );
}

export default App;