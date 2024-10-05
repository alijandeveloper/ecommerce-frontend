import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register'; // Import Register page
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Welcome to the E-commerce Website</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> {/* Add registration route */}
          {/* Additional routes will go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
