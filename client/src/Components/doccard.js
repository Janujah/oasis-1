// import React, { useState } from 'react';

// function DoctorCard({ doctor }) {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <>
//       <div className="doctor-card" onClick={toggleDetails}>
//         <img src={doctor.profileImage} alt={doctor.fullName} className="doctor-image" />
//         <div className="doctor-info">
//           <h2 className="doctor-name">{doctor.fullName}</h2>
//           <p className="doctor-position">{doctor.position}</p>
//           <p>{doctor.position}</p>
//         </div>
//       </div>

//       {showDetails && (
//         <div className="modal">
//           <h1>{doctor.fullName}</h1>
//           <p>{doctor.email}</p>
//           <p>{doctor.position}</p>
//           <button onClick={toggleDetails}>Close</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default DoctorCard;

import React, { useState } from 'react';

function DoctorCard({ doctor }) {
    return (
        <div className="doctor-card" style={{ margin: '10px', border: '1px solid #ccc', padding: '20px', width: '300px' }}>
            <img src={doctor.profileImage} alt={doctor.fullName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{doctor.fullName}</h3>
            <p>{doctor.specialty}</p>
            {doctor.isVerified && <span style={{ color: 'green', fontWeight: 'bold' }}>Verified</span>}
            <p>{doctor.bio}</p>
        </div>
    );
}

export default DoctorCard;
