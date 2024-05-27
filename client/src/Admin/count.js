import React, { useEffect, useState } from 'react';
import Navbar from '../Components/nav-admin';
// import './AdminDashboard.css'; 

function AdminDashboard() {
  const [counts, setCounts] = useState({
    users: 0,
    doctors: 0,
    technicians: 0,
    consumers: 0,
    payments: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const responses = await Promise.all([
          fetch('http://localhost:3001/count/users'),
          fetch('http://localhost:3001/count/doctors'),
          fetch('http://localhost:3001/count/technicians'),
          fetch('http://localhost:3001/count/consumers'),
          fetch('http://localhost:3001/count/payments'),
        ]);

        // Check for non-OK responses
        for (const response of responses) {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }

        // Parse JSON bodies
        const data = await Promise.all(responses.map(res => res.json()));

        setCounts({
          users: data[0].count,
          doctors: data[1].count,
          technicians: data[2].count,
          consumers: data[3].count,
          payments: data[4].count,
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="counts-container">
        <div className="count-card">
          <h3>Users</h3>
          <p>{counts.users}</p>
        </div>
        <div className="count-card">
          <h3>Doctors</h3>
          <p>{counts.doctors}</p>
        </div>
        <div className="count-card">
          <h3>Ortho Resources</h3>
          <p>{counts.technicians}</p>
        </div>
        <div className="count-card">
          <h3>Consumers</h3>
          <p>{counts.consumers}</p>
        </div>
        <div className="count-card">
          <h3>Payments</h3>
          <p>{counts.payments}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
