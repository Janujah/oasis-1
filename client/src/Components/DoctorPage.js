// import React, { useState, useEffect } from 'react';
// import Nav from './navbar'

// function DoctorPage() {
    //     const [doctors, setDoctors] = useState([]);
    
    //     useEffect(() => {
        //         fetch('https://oasis-r62g.onrender.com/Doctors/view')
        //             .then(response => response.json())
        //             .then(data => setDoctors(data))
//             .catch(error => console.error('Error:', error));
//     }, []);

//     return (
    //         <div>
    //             <Nav/><br/><br/><br/><br/><br/><br/><br/>
    //         <div><h1 style={{fontSize:'90px', textAlign:'center'}}className='ourservices'><b>Doctors</b></h1></div><br></br>
    //             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    //             {doctors.map(doctor => (
        //               <a href='/profile' style={{textDecoration:'none',color:'black'}}>  <DoctorCard key={doctor._id} doctor={doctor} /></a>
        //             ))}
        //             </div>
        //         </div>
        //     );
        // }
        
        // export default DoctorPage;
        
        // import React, { useState, useEffect } from 'react';
        // import DoctorCard from '../Components/doccard';
        // import Navbar from '../Components/nav'
        
        // function DoctorShowcase() {
            //     const [doctors, setDoctors] = useState([]);
            //     const [searchTerm, setSearchTerm] = useState('');
            
            //     useEffect(() => {
                //         fetchVerifiedDoctors();
                //     }, []);
                
                //     const fetchVerifiedDoctors = () => {
                    //         fetch('http://localhost:3002/Doctors/view/verified') // Assuming 'verified' fetches only verified doctors
                    //             .then(response => response.json())
//             .then(data => setDoctors(data))
//             .catch(error => console.error('Failed to fetch verified doctors:', error));
//     };

//     const handleSearchChange = (event) => {
    //         setSearchTerm(event.target.value);
    //     };
    
    //     const filteredDoctors = doctors.filter(doctor =>
        //         doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    
    //     return (
        //         <div>
        //             <Navbar />
        //             <div style={{ padding: '20px' }}>
        //                 <input
        //                     type="text"
        //                     placeholder="Search doctors..."
        //                     value={searchTerm}
        //                     onChange={handleSearchChange}
        //                     style={{ width: '100%', padding: '10px' }}
        //                 />
        //             </div>
        //             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        //                 {filteredDoctors.map(doctor => (
            //                      <a href='/profile' ><DoctorCard key={doctor._id} doctor={doctor} /></a>
            //                 ))}
            //             </div>
            //         </div>
            //     );
            // }
            
            // export default DoctorShowcase;
            
            // import React, { useState, useEffect } from 'react';
            // // import DoctorCard from './DoctorCard';
            // import Nav from './navbar';
            // // import './DoctorPage.css'; // Assuming you create a separate CSS file
            
            // function DoctorPage() {
                //     const [doctors, setDoctors] = useState([]);
                //     const [error, setError] = useState(null);
                
                //     useEffect(() => {
                    //         fetch('https://oasis-r62g.onrender.com/Doctors/view')
                    //             .then(response => response.json())
                    //             .then(data => setDoctors(data))
                    //             .catch(error => {
                        //                 console.error('Error fetching doctors:', error);
                        //                 setError('Failed to load doctors.');
                        //             });
                        //     }, []);
                        
                        //     if (error) {
//         return (
    //             <div>
    //                 <Nav />
    //                 <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
    //             </div>
    //         );
    //     }
    
    //     return (
        //         <div>
        //             <Nav />
        //             <header className="doctor-header">
        //                 <h1>Doctors</h1>
        //             </header>
        //             <div className="doctor-grid">
        //                 {doctors.map(doctor => (
            //                     <a href={`/profile/${doctor._id}`} key={doctor._id} className="doctor-link">
            //                         <DoctorCard doctor={doctor} />
            //                     </a>
            //                 ))}
            //             </div>
            //         </div>
            //     );
            // }
            
            // export default DoctorPage;
            
            // import React, { useState, useEffect } from 'react';
            // import Nav from './navbar';
            
            // function DoctorPage() {
                //     const [doctors, setDoctors] = useState([]);
                //     const [error, setError] = useState(null);
                
                //     useEffect(() => {
                    //         fetch('https://oasis-r62g.onrender.com/Doctors/view')
                    //             .then(response => {
                        //                 if (!response.ok) {
                            //                     throw new Error('Network response was not ok');
                            //                 }
                            //                 return response.json();
                            //             })
                            //             .then(data => {
                                //                 setDoctors(data);
                                //                 console.log('Doctors fetched:', data);
                                //             })
                                //             .catch(error => {
                                    //                 console.error('Error fetching doctors:', error);
                                    //                 setError('Failed to load doctors.');
                                    //             });
                                    //     }, []);
                                    
                                    //     if (error) {
                                        //         return (
                                            //             <div>
                                            //                 <Nav />
//                 <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
//             </div>
//         );
//     }

//     return (
    //         <div>
    //             <Nav />
    //             <header className="doctor-header">
    //                 <h1>Doctors</h1>
    //             </header>
    //             <div className="doctor-grid">
    //                 {doctors.map(doctor => (
        //                     <a href={`/profile/${doctor._id}`} key={doctor._id} className="doctor-link">
        //                         {/* Assuming DoctorCard is correctly imported and used */}
        //                         <DoctorCard doctor={doctor} />
        //                     </a>
        //                 ))}
        //             </div>
        //         </div>
        //     );
        // }
        
        // export default DoctorPage;
        // import DoctorCard from './DoctorCard'; // Make sure DoctorCard is imported
        
        
        // import React, { useState, useEffect } from 'react';
        // import Nav from './navbar';
        
        // function DoctorPage() {
            //     const [doctors, setDoctors] = useState([]);
            //     const [error, setError] = useState(null);
            
            //     useEffect(() => {
                //         fetch('https://oasis-r62g.onrender.com/Doctors/view')
                //             .then(response => {
                    //                 if (!response.ok) {
                        //                     throw new Error('Network response was not ok');
                        //                 }
                        //                 return response.json();
                        //             })
                        //             .then(data => {
                            //                 const verifiedDoctors = data.filter(doctor => doctor.isVerified); // Filter to only include verified doctors
                            //                 setDoctors(verifiedDoctors);
                            //                 console.log('Verified doctors fetched:', verifiedDoctors);
                            //             })
                            //             .catch(error => {
                                //                 console.error('Error fetching doctors:', error);
                                //                 setError('Failed to load doctors.');
                                //             });
                                //     }, []);
                                
                                //     if (error) {
                                    //         return (
                                        //             <div>
                                        //                 <Nav />
                                        //                 <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
                                        //             </div>
                                        //         );
                                        //     }
                                        
//     return (
    //         <div>
    //             <Nav />
    //             <header className="doctor-header">
    //                 <h1 style={{fontSize:'90px', textAlign:'center', fontWeight:'bold', color:'#0e0737'}}>Doctors</h1>
    //             </header>
    //             <div className="doctor-grid">
    //                 {doctors.map(doctor => (
        //                     <a href={`/profile/${doctor._id}`} key={doctor._id} className="doctor-link">
        //                         <DoctorCard doctor={doctor} />
        //                     </a>
        //                 ))}
        //             </div>
        //         </div>
        //     );
        // }
        
// import DoctorCard from './DoctorCard'; // Assuming you have a DoctorCard component
// export default DoctorPage;

// import React, { useState, useEffect } from 'react';
// import Nav from './navbar';
// import { Link } from 'react-router-dom';

// const DOCTORS_PER_PAGE = 10;

// function DoctorPage() {
    //     const [doctors, setDoctors] = useState([]);
    //     const [error, setError] = useState(null);
    //     const [currentPage, setCurrentPage] = useState(1);
    
    //     useEffect(() => {
        //         fetch('https://oasis-r62g.onrender.com/Doctors/view')
        //             .then(response => {
            //                 if (!response.ok) {
                //                     throw new Error('Network response was not ok');
                //                 }
                //                 return response.json();
                //             })
                //             .then(data => {
                    //                 const verifiedDoctors = data.filter(doctor => doctor.isVerified); // Filter to only include verified doctors
                    //                 setDoctors(verifiedDoctors);
                    //                 console.log('Verified doctors fetched:', verifiedDoctors);
                    //             })
                    //             .catch(error => {
                        //                 console.error('Error fetching doctors:', error);
                        //                 setError('Failed to load doctors.');
                        //             });
                        //     }, []);
                        
                        //     if (error) {
                            //         return (
                                //             <div>
                                //                 <Nav />
                                //                 <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
                                //             </div>
//         );
//     }

//     const totalDoctors = doctors.length;
//     const totalPages = Math.ceil(totalDoctors / DOCTORS_PER_PAGE);
//     const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;
//     const currentDoctors = doctors.slice(startIndex, startIndex + DOCTORS_PER_PAGE);

//     return (
    //         <div>
    //             <Nav />
    //             <header className="doctor-header">
    //                 <h1 style={{ fontSize: '90px', textAlign: 'center', fontWeight: 'bold', color: '#0e0737' }}>Doctors</h1>
    //             </header>
    //             <div className="doctor-grid">
    //                 {currentDoctors.map(doctor => (
        //             <Link to={`/profile/${doctor._id}`} className="doctor-link">
        //         <div className="doctor-card" style={{ margin: '10px', border: '1px solid #ccc', padding: '20px', width: '300px' }}>
        //             <img src={doctor.profileImage} alt={doctor.fullName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        //             <h3>{doctor.fullName}</h3>
        //             <p>{doctor.specialty}</p>
        //             {doctor.isVerified && <span style={{ color: 'green', fontWeight: 'bold' , visibility:'hidden    '}}>Verified</span>}
        //             <p>{doctor.bio}</p>
        //         </div>
        //         </Link>
        //                 ))}
        //             </div>
        //             <div style={{ textAlign: 'center', margin: '20px 0' }}>
        //                 {Array.from({ length: totalPages }, (_, index) => ( 
            //                     <button
            //                         key={index}
            //                         onClick={() => setCurrentPage(index + 1)}
            //                         style={{
                //                             margin: '0 5px',
                //                             padding: '10px 20px',
                //                             fontSize: '16px',
                //                             cursor: 'pointer',
                //                             backgroundColor: currentPage === index + 1 ? '#0e0737' : '#fff',
                //                             color: currentPage === index + 1 ? '#fff' : '#000',
                //                             border: '1px solid #0e0737',
                //                             borderRadius: '5px'
                //                         }}
                //                     >
                //                         {index + 1}
                //                     </button>
                //                 ))}
                //             </div>
                //             <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>
                //                 {`${startIndex + 1}-${Math.min(startIndex + DOCTORS_PER_PAGE, totalDoctors)} of ${totalDoctors} doctors`}
                //             </div>
                //         </div>
                //     );
                // }
                
                // export default DoctorPage;
//                 import React, { useState, useEffect } from 'react';
//                 import Nav from './navbar';
//                 import { Link } from 'react-router-dom';
                
//                 const DOCTORS_PER_PAGE = 10;
                
//                 function DoctorPage() {
//                     const [doctors, setDoctors] = useState([]);
//                     const [error, setError] = useState(null);
//                     const [currentPage, setCurrentPage] = useState(1);
                    
//                     useEffect(() => {
//                         fetch('https://oasis-r62g.onrender.com/Doctors/view')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const verifiedDoctors = data.filter(doctor => doctor.isVerified); // Filter to only include verified doctors
//                 setDoctors(verifiedDoctors);
//                 console.log('Verified doctors fetched:', verifiedDoctors);
//             })
//             .catch(error => {
//                 console.error('Error fetching doctors:', error);
//                 setError('Failed to load doctors.');
//             });
//     }, []);

//     if (error) {
//         return (
//             <div>
//                 <Nav />
//                 <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
//             </div>
//         );
//     }

//     const totalDoctors = doctors.length;
//     const totalPages = Math.ceil(totalDoctors / DOCTORS_PER_PAGE);
//     const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;
//     const currentDoctors = doctors.slice(startIndex, startIndex + DOCTORS_PER_PAGE);

//     return (
//         <div>
//             <Nav />
//             <header className="doctor-header">
//                 <h1 style={{ fontSize: '90px', textAlign: 'center', fontWeight: 'bold', color: '#0e0737' }}>Doctors</h1>
//             </header>
//             <div className="doctor-grid">
//                 {currentDoctors.map(doctor => (
//                     <Link to={`/profile/${doctor._id}`} className="doctor-link" key={doctor._id}>
//                         <div className="doctor-card" style={{ margin: '10px', border: '1px solid #ccc', padding: '20px', width: '300px' }}>
//                             <img src={`http://res.cloudinary.com/dtqvkpwdn/image/upload/${doctor.profileImage.public_id}`} alt={doctor.fullName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//                             <h3>{doctor.fullName}</h3>
//                             <p>{doctor.specialty}</p>
//                             {doctor.isVerified && <span style={{ color: 'green', fontWeight: 'bold' }}>Verified</span>}
//                             <p>{doctor.bio}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//             <div style={{ textAlign: 'center', margin: '20px 0' }}>
//                 {Array.from({ length: totalPages }, (_, index) => ( 
//                     <button
//                         key={index}
//                         onClick={() => setCurrentPage(index + 1)}
//                         style={{
//                             margin: '0 5px',
//                             padding: '10px 20px',
//                             fontSize: '16px',
//                             cursor: 'pointer',
//                             backgroundColor: currentPage === index + 1 ? '#0e0737' : '#fff',
//                             color: currentPage === index + 1 ? '#fff' : '#000',
//                             border: '1px solid #0e0737',
//                             borderRadius: '5px'
//                         }}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//             </div>
//             <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>
//                 {`${startIndex + 1}-${Math.min(startIndex + DOCTORS_PER_PAGE, totalDoctors)} of ${totalDoctors} doctors`}
//             </div>
//         </div>
//     );
// }

// export default DoctorPage;


import React, { useState, useEffect } from 'react';
import Nav from './navbar';
import { Link } from 'react-router-dom';

const DOCTORS_PER_PAGE = 10;

function DoctorPage() {
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://oasis-r62g.onrender.com/Doctors/view')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const verifiedDoctors = data.filter(doctor => doctor.isVerified); // Filter to only include verified doctors
                setDoctors(verifiedDoctors);
            })
            .catch(error => {
                console.error('Error fetching doctors:', error);
                setError('Failed to load doctors.');
            });
    }, []);

    if (error) {
        return (
            <div>
                <Nav />
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
            </div>
        );
    }

    const totalDoctors = doctors.length;
    const totalPages = Math.ceil(totalDoctors / DOCTORS_PER_PAGE);
    const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;
    const currentDoctors = doctors.slice(startIndex, startIndex + DOCTORS_PER_PAGE);

    return (
        <div>
            <Nav />
            <header className="doctor-header">
                <h1 style={{ fontSize: '90px', textAlign: 'center', fontWeight: 'bold', color: '#0e0737' }}>Doctors</h1>
            </header>
            <div className="doctor-grid">
                {currentDoctors.map(doctor => (
                    <Link to={`/profile/${doctor._id}`} className="doctor-link" key={doctor._id}>
                        <div className="doctor-card" style={{ margin: '10px', border: '1px solid #ccc', padding: '20px', width: '300px' }}>
                            <img src={doctor.profileImage} alt={doctor.fullName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <h3>{doctor.fullName}</h3>
                            <p>{doctor.position}</p>
                            {doctor.isVerified && <span style={{ color: 'green', fontWeight: 'bold' }}>Verified</span>}
                            <p>{doctor.bio}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        style={{
                            margin: '0 5px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            backgroundColor: currentPage === index + 1 ? '#0e0737' : '#fff',
                            color: currentPage === index + 1 ? '#fff' : '#000',
                            border: '1px solid #0e0737',
                            borderRadius: '5px'
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>
                {`${startIndex + 1}-${Math.min(startIndex + DOCTORS_PER_PAGE, totalDoctors)} of ${totalDoctors} doctors`}
            </div>
        </div>
    );
}

export default DoctorPage;
