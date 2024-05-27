// import React from 'react';
// import logo from '../Components/logo.png';
// import '../CSS/navbar.css';

// function Navbar() {

//   return (
//     <div className="navbar">
//       <div>
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <nav>
//         <ul className="nav-links">
          // <li className="nav-item">
          //   <a className="nav-link" aria-current="page" href="/Technicians">Home</a>
          // </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          // <li className="nav-item">
          //   <a className="nav-link" href="/Techinicians/ourservices">Our Services</a>
          // </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          // <li className="nav-item">
          //   <a className="nav-link" href="/Techinicians/orders">Orders</a>
          // </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          // <li className="nav-item">
          //   <a className="nav-link" href="/Techinicians/ContactUs">Contact Us</a>
          // </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <li className="nav-item">
//             <a className="nav-link" href="/Techinicians/Create-profile">
//               <button className="login-button" style={{width:'200px',height:'55px'}}>Add Profile</button>
//             </a>
//           </li>
//         </ul>
//       </nav>

//     </div>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../Components/logo.png';
// import '../CSS/navbar.css';
// // import Count from '../Admin/count'

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the profile from localStorage or a backend endpoint
//     const fetchProfile = async () => {
//       const storedProfile = JSON.parse(localStorage.getItem('profile'));
//       if (storedProfile) {
//         setProfile(storedProfile);
//       } else {
//         // Optionally, fetch from a backend endpoint
//         try {
//           const response = await fetch('http://localhost:3001/Technicians/profile', { method: 'GET' });
//           const data = await response.json();
//           setProfile(data);
//         } catch (error) {
//           console.error('Error fetching profile:', error);
//         }
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setProfile(null);
//     localStorage.removeItem('profile');
//     navigate('/');
//   };

//   return (
//     <div>
//       {/* <Count/> */}
//     <div className="navbar">
//       <div>
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <nav>
//         <ul className="nav-links">
//         <li className="nav-item">
//             <a className="nav-link" aria-current="page" href="/Technicians">Home</a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <li className="nav-item">
//             <a className="nav-link" href="/Techinicians/ourservices">Our Services</a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <li className="nav-item">
//             <a className="nav-link" href="/Techinicians/orders">Orders</a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <li className="nav-item">
//             <a className="nav-link" href="/Techinicians/ContactUs">Contact Us</a>
//           </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           {isLoggedIn ? (
//             <li className="nav-item">
//               {profile ? (
//                 <span className="nav-link">{profile.fullName}</span>
//               ) : (
//                 <a className="nav-link" href="/Technicians/addproduct">
//                   <button className="login-button" style={{ width: '200px', height: '55px' }}>Add Product</button>
//                 </a>
//               )}
//             </li>
//           ) : (
//             <li className="nav-item">
//               <button className="logout-button" style={{ width: '200px', height: '55px' }} onClick={handleLogout}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import logo from '../Components/logo.png';
import '../CSS/navbar.css';
// import Count from '../Admin/count'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUsername(decoded.userName); // Assuming the token has a fullName field
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {/* <Count/> */}
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/Technicians">Home</a>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <a className="nav-link" href="/Technicians/ourservices">Our Services</a>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <a className="nav-link" href="/Technicians/orders">Orders</a>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <a className="nav-link" href="/Technicians/ContactUs">Contact Us</a>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">{username}</span>
                </li>
                <li className="nav-item">
                  <button className="logout-button" style={{ width: '200px', height: '55px' }} onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/Technicians/addproduct">
                  <button className="login-button" style={{ width: '200px', height: '55px' }}>Add Product</button>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
