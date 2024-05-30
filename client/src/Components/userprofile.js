// import React, { useState, useEffect } from 'react';

// function UserProfile({ doctor }) {
//     const [userData, setUserData] = useState({});
//     const [timeSlots, setTimeSlots] = useState([]);
//     const [selectedSlot, setSelectedSlot] = useState(null);

//     // This function will be called to fetch the doctor's data from the backend
//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3001/doctors/${id}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setUserData(data.user);  // Assuming the response has a 'user' field
//                 setTimeSlots(data.timeSlots);  // Assuming the response has a 'timeSlots' field
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchUserData();
//     }, [id]);   // Effect depends on doctorId change

//     return (
//         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }}>
//             <div className="profile-container">
//                 <div className="profile-header">
//                     <img src={userData.profileImage} alt="Profile" className="profile-image" />
//                     <h1>{userData.name}</h1>
//                     <p>{userData.email}</p>
//                     <p>{userData.role}</p>
                    // <button onClick={() => alert("Booking functionality to be implemented.")} className="book-button">Book Appointment</button>
//                 </div>
//                 <div className="profile-details">
//                     <h2>Available Time Slots</h2>
//                     <table className="timeslot-table">
//                         <thead>
//                             <tr>
//                                 <th>Day</th>
//                                 <th>Time</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {timeSlots.map((slot, index) => (
//                                 <tr key={index}>
//                                     <td>{slot.day}</td>
//                                     <td>{slot.time}</td>
//                                     <td>
//                                         <button onClick={() => setSelectedSlot(slot)} className="select-button">Select</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function UserProfile() {
//     const { id } = useParams(); // Extract the id from URL parameters
//     const [userData, setUserData] = useState({});
//     const [timeSlots, setTimeSlots] = useState([]);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3001/Doctors/view/${id}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 if (!response.ok) throw new Error('Failed to fetch data');
//                 const data = await response.json();
//                 console.log('Fetched data:', data); // Log the fetched data
//                 setUserData(data);
//                 setTimeSlots(data.timeSlots || []); // Ensure timeSlots is an array
//             } catch (err) {
//                 console.error(err);
//                 setError(err.message);
//             }
//         };

//         fetchUserData();
//     }, [id]);

//     const handleBookAppointment = () => {
//         const hasToken = localStorage.getItem('auth-token');

//         if (hasToken) {
//             if (selectedSlot) {
//                 // Implement booking functionality here
//                 console.log(`Booking appointment for slot: ${selectedSlot.id}`);
//             } else {
//                 alert('Please select a time slot');
//             }
//         } else {
//             window.location.href = '/login';
//         }
//     };

//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }} className='container1'>
//             <div className="profile-container">
//                 <div className="profile-header">
//                     <img src={userData.profileImage || 'default-image-url.png'} alt="Profile" className="profile-image" />
//                     <h1>{userData.fullName}</h1>
//                     <p>Email: {userData.email}</p>
//                     <p>Position: {userData.position}</p>
//                 </div>
//                 <button onClick={handleBookAppointment} className="book-button">Book Appointment</button>

//                 <div className="profile-details">
//                     <h2>Available Time Slots</h2>
//                     <table className="timeslot-table">
//                         <thead>
//                             <tr>
//                                 <th>Day</th>
//                                 <th>Time</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {timeSlots.length > 0 ? (
//                                 timeSlots.map((slot, index) => (
//                                     <tr key={index}>
//                                         <td>{slot.date}</td>
//                                         <td>{slot.time}</td>
//                                         <td>
//                                             <button 
//                                                 onClick={() => setSelectedSlot(slot)} 
//                                                 className="select-button"
//                                                 style={{ backgroundColor: selectedSlot === slot ? 'green' : 'initial' }}
//                                             >
//                                                 {selectedSlot === slot ? 'Selected' : 'Select'}
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="3">No available time slots</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                     {selectedSlot && <button onClick={handleBookAppointment} className="book-button">Book Appointment</button>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;






import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileDetailsPage() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://oasis-r62g.onrender.com/Doctors/view/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setDoctor(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching doctor details:', error);
                toast.error("Failed to load doctor details", { position: "bottom-right" });
                setLoading(false);
            });
    }, [id]);

    const handleBookAppointment = (availability) => {
        navigate(`/booking/${doctor._id}`, { state: { availability, doctorName: doctor.fullName } });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return (
        <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)', padding: '60px' }} className='container11'>
            <div className="profile-container" style={{ width: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: "center", marginBottom: '20px' }}>{doctor.fullName}</h1>
                <img src={doctor.profileImage} alt={doctor.fullName} style={{ display: 'block', margin: '0 auto 20px', width: '200px', height: '200px', borderRadius: '50%' }} />
                <p><strong>Position:</strong> {doctor.position}</p>
                <p><strong>Email:</strong> {doctor.email}</p>
                <p><strong>Bio:</strong> {doctor.bio}</p>
                <p><strong>Registered ID:</strong> {doctor.registeredId}</p>
                <p><strong>Working Hospitals:</strong> {doctor.workingHospitals}</p>
                <p><strong>Age:</strong> {doctor.age}</p>
                <p><strong>Contact No:</strong> {doctor.contactNo}</p>
                <h3>Availability:</h3>
                {doctor.availability && doctor.availability.length > 0 ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Day</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctor.availability.map((slot, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{slot.day}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{slot.time}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                        <button onClick={() => handleBookAppointment(slot)} style={{ padding: '5px 10px', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Appointment</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No availability information provided.</p>
                )}
                <ToastContainer />
            </div>
        </div>
    );
}

export default ProfileDetailsPage;










// ProfileDetails.js

// ProfileDetails.js

// ProfileDetails.js
// import React, { useState, useEffect } from 'react';
// function ProfileDetails({ doctor }) {
//     const [profile, setProfile] = useState(null);

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 // Check if doctor is defined and has an ID
//                 if (!doctor || !doctor.id) {
//                     return;
//                 }

//                 const response = await fetch(`http://localhost:3001/Doctors/view/${doctor._id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch profile');
//                 }
//                 const data = await response.json();
//                 setProfile(data);
//             } catch (error) {
//                 console.error('Error fetching profile:', error);
//             }
//         };
//         fetchProfile();
//     }, [doctor]);

//     return (
//         <div>
//             {profile ? (
//                 <div>
//                     {profile.profileImage && <img src={`data:${profile.profileImage.contentType};base64,${profile.profileImage.data.toString('base64')}`} alt="Profile" />}
//                     <h1>{profile.fullName}</h1>
//                     <p>Position: {profile.position}</p>
//                     <p>Email: {profile.email}</p>
//                     <p>Bio: {profile.bio}</p>
//                     <p>Registered ID: {profile.registeredId}</p>
//                     <p>Working Hospitals: {profile.workingHospitals}</p>
//                     <p>Age: {profile.age}</p>
//                     <p>Contact No: {profile.contactNo}</p>
//                     <h2>Availability:</h2>
//                     <ul>
//                         {profile.availability.map((slot, index) => (
//                             <li key={index}>{slot.day} - {slot.time}</li>
//                         ))}
//                     </ul>Error fetching profile: TypeError: doctor is undefined 
//                     {profile.signatureImage && <img src={`data:${profile.signatureImage.contentType};base64,${profile.signatureImage.data.toString('base64')}`} alt="Signature" />}
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default ProfileDetails;




// import React, { useState, useEffect } from 'react';

// function UserProfile({ doctor }) {
//     const [userData, setUserData] = useState(null); // Use null initially to check for data presence later
//     const [timeSlots, setTimeSlots] = useState([]);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Function to fetch user data
//         const fetchUserData = async () => {
//             if (!doctor || !doctor.id) {
//                 setLoading(false);
//                 setError('No doctor selected');
//                 return;
//             }

//             try {
//                 const response = await fetch(`http://localhost:3001/Doctors/view/${doctor.id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 setUserData(data.user);
//                 setTimeSlots(data.timeSlots);
//             } catch (err) {
//                 console.error(err);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserData();
//     }, [doctor]);

//     if (loading) {
//         // return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     if (!userData) {
//         // return <p>No data available for this doctor.</p>;
//     }

//     return (
//         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }}>
//             <div className="profile-container">
//                 <div className="profile-header">
//                     <img src={userData.profileImage || 'default-image-url.png'} alt="Doctor Profile" className="profile-image" />
//                     <h1>{userData.fullName || 'No name available'}</h1>
//                     <p>{userData.email || 'No email available'}</p>
//                     <p>{userData.position || 'No position available'}</p>
//                     <a href='/doctors/Booking'><button className="book-button">Book Appointment</button></a>
//                 </div>
//                 <div className="profile-details">
//                     <h2>Available Time Slots</h2>
//                     <table className="timeslot-table">
//                         <thead>
//                             <tr>
//                                 <th>Day</th>
//                                 <th>Time</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {timeSlots.length > 0 ? timeSlots.map((slot, index) => (
//                                 <tr key={index}>
//                                     <td>{slot.day}</td>
//                                     <td>{slot.time}</td>
//                                     <td>
//                                         <button onClick={() => setSelectedSlot(slot)} className="select-button">Select</button>
//                                     </td>
//                                 </tr>
//                             )) : <tr><td colSpan="3">No available time slots</td></tr>}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;
