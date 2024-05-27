import React, { useState } from 'react';
import styles from '../CSS/SignUpPage.module.css';
import logo from '../Components/logo.png';
import axios from 'axios';

function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const userData = {
      fullName,
      email,
      userName,
      password,
      confirmPassword
    };
    console.log(userData);

    fetch('http://localhost:3002/Technicians/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  
  // try {
  //   axios.post('http://localhost:3002/', userData);
  // } catch (error) {
  //   console.error('Error:', error);
  // }
};

return (
  <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <img src={logo} alt="Company Logo" className={styles.logo} style={{ height: '120px', width: '250px' }} />
      </div>
      <h3 className={styles.heading}>Sign Up</h3>
      <p style={{ fontSize: '21px' }}>Create your account, it's free and only takes a minute.</p>
      <div className={styles.inputGroup}>
        <label htmlFor='fullName'>Full Name</label>
        <input
          type='text'
          id='fullName'
          placeholder='Enter your full name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          placeholder='Create a username'
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Create a password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button className={styles.signUpButton} type="submit">
        Sign Up
      </button>
    </form>
  </div>
);
}

export default SignUpPage;
