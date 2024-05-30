// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom'; 
// // import styles from '../CSS/login.module.css';
// // import logo from '../Components/logo.png';

// // function LoginPage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate(); 

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     console.log('Login Details:', { email, password });
// //     setLoading(true);
// //     setError('');

// //     try {
// //       const response = await axios.post('https://oasis-r62g.onrender.com/login', {
// //         email,
// //         password
// //       });
// //       setLoading(false);

// //       const Role = response.data.Role;
// //       redirectUser(Role);
// //     } catch (err) {
// //       setLoading(false);
// //       setError('Failed to login. Check your email and password.');
// //       console.error('Login error:', err.response || err.message);
// //     }
// //   };

// //   const redirectUser = (Role) => {
// //     switch (Role) {
// //       case 'Doctors':
// //         navigate('/Doctors'); 
// //         break;
// //       case 'Ortho_technician':
// //         navigate('/Technicians');
// //         break;
// //       case 'Others':
// //         navigate('/');
// //         break;
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <form className={styles.form} onSubmit={handleSubmit}>
// //         <img src={logo} alt="Company Logo" className={styles.logo} />
// //         <h3 className={styles.heading}>Login</h3>
// //         <p className={styles.welcomeBack}>Welcome back! Please login to your account.</p>

// //         {error && <div className={styles.error}>{error}</div>}

// //         <div className={styles.inputGroup}>
// //           <label htmlFor='email'>Email</label>
// //           <input
// //             type='email'
// //             id='email'
// //             placeholder='Enter your Email'
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className={styles.inputGroup}>
// //           <label htmlFor='password'>Password</label>
// //           <input
// //             type='password'
// //             id='password'
// //             placeholder='Enter your Password'
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className={styles.forgotPassword}>
// //           <a href='/forgot-password'>Forgot password?</a>
// //         </div>
// //         <button className={styles.loginButton} type="submit" disabled={loading}>
// //           {loading ? 'Logging in...' : 'Login'}
// //         </button>
// //         <div className={styles.registerLink}>
// //           If you don't have an account <a href='/signup' style={{color:'#0e0737', textDecoration:'none'}}>Sign up</a>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default LoginPage;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styles from '../CSS/login.module.css';
// import logo from '../Components/logo.png';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('https://oasis-r62g.onrender.com/login', {
//         Email: email, // Ensure these property names match your server's expected parameters
//         Password: password
//       });
//       setLoading(false);
//       const { Role } = response.data; // Assuming response.data contains the role directly
//       navigateRoleBased(Role); // Redirect based on role
//     } catch (err) {
//       setLoading(false);
//       const errMsg = err.response ? err.response.data.message : err.message;
//       setError(`Failed to login. ${errMsg}`);
//       console.error('Login error:', errMsg);
//     }
//   };

//   const navigateRoleBased = (Role) => {
//     switch (Role) {
//       case 'Doctor':
//         navigate('/Doctors');
//         break;
//       case 'Ortho_technician':
//         navigate('/Technicians');
//         break;
//       case 'Other': // Check your roles carefully
//         navigate('/');
//         break;
//       case 'Admin': // Check your roles carefully
//         navigate('/Admin/users');
//         break;
//       default:
//         setError('Unauthorized role or unknown role.');
//         break;
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <img src={logo} alt="Company Logo" className={styles.logo} />
//         <h3 className={styles.heading}>Login</h3>
//         <p className={styles.welcomeBack}>Welcome back! Please login to your account.</p>

//         {error && <div className={styles.error}>{error}</div>}

//         <div className={styles.inputGroup}>
//           <label htmlFor='email'>Email</label>
//           <input
//             type='email'
//             id='email'
//             placeholder='Enter your Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor='password'>Password</label>
//           <input
//             type='password'
//             id='password'
//             placeholder='Enter your Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.forgotPassword}>
//           <a href='/forgot-password'>Forgot password?</a>
//         </div>
//         <button className={styles.loginButton} type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//         <div className={styles.registerLink}>
//           If you don't have an account <a href='/signup'>Sign up</a>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from '../CSS/login.module.css';
// import logo from '../Components/logo.png';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const userdata = { email, password };
//     console.log(userdata);
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('https://oasis-r62g.onrender.com/user/login', userdata, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email: email, password: password })
//       });

//       const data = await response.json(); // Parse JSON first to handle both success and error

//       if (!response.ok) {
//           throw new Error(data.message || 'Unknown error occurred'); // Use message from server if available
//       }

//       setLoading(false);
//       navigateRoleBased(data.Role); // Assuming role is returned on successful login
//   } catch (err) {
//           setLoading(false);
//           const errMsg = err.message || 'Failed to login. Please check your network.';
//           setError(errMsg);
//           console.error('Login error:', errMsg);
//       }
//   };


//   const navigateRoleBased = (Role) => {
//     switch (Role) {
//       case 'Doctor':
//         navigate('/Doctors');
//         break;
//       case 'Ortho_technician':
//         navigate('/Technicians');
//         break;
//       case 'Other':
//         navigate('/');
//         break;
//       case 'Admin':
//         navigate('/Admin/users');
//         break;
//       default:
//         setError('Unauthorized role or unknown role.');
//         break;
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <img src={logo} alt="Company Logo" className={styles.logo} />
//         <h3 className={styles.heading}>Login</h3>
//         <p className={styles.welcomeBack}>Welcome back! Please login to your account.</p>

//         {error && <div className={styles.error}>{error}</div>}

//         <div className={styles.inputGroup}>
//           <label htmlFor='email'>Email</label>
//           <input
//             type='email'
//             id='email'
//             placeholder='Enter your Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor='password'>Password</label>
//           <input
//             type='password'
//             id='password'
//             placeholder='Enter your Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.forgotPassword}>
//           <a href='/forgot-password'>Forgot password?</a>
//         </div>
//         <button className={styles.loginButton} type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//         <div className={styles.registerLink}>
//           If you don't have an account <a href='/signup' style={{color:'#0e0737', textDecoration:'none'}}>Sign up</a>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../CSS/login.module.css';
import logo from '../Components/logo.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userdata = { email, password };
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://oasis-r62g.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`${response.status}: ${errorMessage}`);
      }

      const data = await response.json();
      localStorage.setItem('auth-token', data.token); // Store the received token in local storage
      setLoading(false);
      navigateRoleBased(data.Role); // Assuming 'Role' is a property of the returned JSON
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error('Login error:', err.message);
    }
  };

  const navigateRoleBased = (Role) => {
    switch (Role) {
      case 'Doctor':
        navigate('/Doctors');
        break;
      case 'Ortho_technician':
        navigate('/Technicians');
        break;
      case 'consumers':
        navigate('/');
        break;
      case 'Admin':
        navigate('/Admin/users');
        break;
      default:
        setError('Unauthorized role or unknown role.');
        break;
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <h3 className={styles.heading}>Login</h3>
        <p className={styles.welcomeBack}>Welcome back! Please login to your account.</p>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.forgotPassword}>
          <a href='/forgot-password'>Forgot password?</a>
        </div>
        <button className={styles.loginButton} type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className={styles.registerLink}>
          If you don't have an account <a href='/signup' style={{ color: '#0e0737', textDecoration: 'none' }}>Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
