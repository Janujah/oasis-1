// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="admin-navbar">
//       <ul className="admin-nav-links">
//         <li><Link to="/Admin/users">Users</Link></li>
//         <li><Link to="/Admin/Doctors">Doctors</Link></li>
//         <li><Link to="/Admin/Technicians">Technicians</Link></li>
//         <li><Link to="/Admin/Consultation">Consumers</Link></li>
//         <li><Link to="/Admin/Payment">Payments</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="admin-navbar">
      <ul className="admin-nav-links" >
        <li><Link to="/Admin/users">Users</Link></li>
        <li><Link to="/Admin/Doctors">Doctors</Link></li>
        <li><Link to="/Admin/Technicians">Ortho Resources</Link></li>
        <li><Link to="/Admin/Consultation">Bookings</Link></li>
        <li><Link to="/Admin/Payment">Payments</Link></li>
      </ul>
      <div className="auth-button">
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

