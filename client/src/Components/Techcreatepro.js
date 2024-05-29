// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// function ProfilePage() {
//     const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
//     const [signatureImage, setSignatureImage] = useState('https://via.placeholder.com/150');

//     const formik = useFormik({
//         initialValues: {
//             fullName: 'John Doe',
//             email: 'john.doe@example.com',
//             bio: '',
//             availableTime: '',
//             registeredId: '',
//             workingHospitals: '',
//             age: '',
//             contactNo: ''
//         },
//         validationSchema: Yup.object({
//             fullName: Yup.string().required('Full name is required'),
//             email: Yup.string().email('Invalid email address').required('Email is required'),
//             bio: Yup.string(),
//             availableTime: Yup.string(),
//             registeredId: Yup.string().required('Registered ID is required'),
//             workingHospitals: Yup.string().required('Current working hospitals are required'),
//             age: Yup.number().positive().integer().required('Age is required'),
//             contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Contact number is required')
//         }),
//         onSubmit: values => {
//             console.log('User Profile:', values);
//             alert('Profile updated!');
//         },
//     });

//     const handleImageChange = (file, setImage) => {
//         if (file) {
//             setImage(URL.createObjectURL(file));
//         }
//     };

//     return (
//         <div style={{ background:'linear-gradient(to bottom,   #FFFCFC,  #AB9551)'}}>
//         <div className="profile-container" >
//             <h1>Your Profile</h1>
//             <form onSubmit={formik.handleSubmit} className="profile-form">
//                 <div className="form-group">
//                     <label htmlFor="fullName">Full Name:</label>
//                     <input id="fullName" type="text" {...formik.getFieldProps('fullName')} />
//                     {formik.touched.fullName && formik.errors.fullName && <div className="error">{formik.errors.fullName}</div>}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input id="email" type="email" {...formik.getFieldProps('email')} />
//                     {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="bio">Bio:</label>
//                     <textarea id="bio" {...formik.getFieldProps('bio')} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="availableTime">Available Time:</label>
//                     <input id="availableTime" type="text" placeholder="e.g., Mondays, 3-5 PM" {...formik.getFieldProps('availableTime')} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="registeredId">Registered ID:</label>
//                     <input id="registeredId" type="text" {...formik.getFieldProps('registeredId')} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="workingHospitals">Current Working places:</label>
//                     <input id="workingHospitals" type="text" {...formik.getFieldProps('workingHospitals')} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="age">Age:</label>
//                     <input id="age" type="number" {...formik.getFieldProps('age')} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="contactNo">Contact No:</label>
//                     <input id="contactNo" type="text" {...formik.getFieldProps('contactNo')} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="profilePicture">Profile Picture:</label>
//                     <input id="profilePicture" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setProfileImage)} />
//                     <img src={profileImage} alt="Profile" className="profile-image" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="digitalSignature">Digital Signature:</label>
//                     <input id="digitalSignature" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setSignatureImage)} />
//                     <img src={signatureImage} alt="Signature" className="profile-image" />
//                 </div>
//                 <button type="submit" className="update-button"><a href='/Doctors' style={{textDecoration:'none',  color:'white'}}>Update Profile</a></button>
//             </form>
//         </div>
//         </div>
//     );
// }

// export default ProfilePage;


import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function ProfilePage() {
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
    const [signatureImage, setSignatureImage] = useState('https://via.placeholder.com/150');

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            bio: '',
            availableTime: '',
            registeredId: '',
            workingHospitals: '',
            age: '',
            contactNo: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            bio: Yup.string(),
            availableTime: Yup.string(),
            registeredId: Yup.string().required('Registered ID is required'),
            workingHospitals: Yup.string().required('Current working hospitals are required'),
            age: Yup.number().positive().integer().required('Age is required'),
            contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Contact number is required')
        }),
        onSubmit: values => {
            // Post to backend
            axios.post('https://oasis-4aui.onrender.com/Doctors', {
                ...values,
                profileImage,  // Assuming you want to send image URLs which are managed by the state
                signatureImage
            })
            .then(response => {
                alert('Profile updated successfully!');
                console.log(response.data);
            })
            .catch(error => {
                alert('Failed to update profile.');
                console.error('Error:', error);
            });
        },
    });

    const handleImageChange = (file, setImage) => {
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }}>
            <div className="profile-container">
                <h1>Your Profile</h1>
             <form onSubmit={formik.handleSubmit} className="profile-form">
                 <div className="form-group">
                     <label htmlFor="fullName">Full Name:</label>
                     <input id="fullName" type="text" {...formik.getFieldProps('fullName')} />
                     {formik.touched.fullName && formik.errors.fullName && <div className="error">{formik.errors.fullName}</div>}
                 </div>
                 <div className="form-group">
                     <label htmlFor="email">Email:</label>
                    <input id="email" type="email" {...formik.getFieldProps('email')} />
                     {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
                 </div>
                 <div className="form-group">
                     <label htmlFor="bio">Bio:</label>
                     <textarea id="bio" {...formik.getFieldProps('bio')} />
                </div>
                 <div className="form-group">
                     <label htmlFor="availableTime">Available Time:</label>
                     <input id="availableTime" type="text" placeholder="e.g., Mondays, 3-5 PM" {...formik.getFieldProps('availableTime')} />
                 </div>
                 <div className="form-group">
                     <label htmlFor="registeredId">Registered ID:</label>
                     <input id="registeredId" type="text" {...formik.getFieldProps('registeredId')} />
                 </div>
                 <div className="form-group">
                     <label htmlFor="workingHospitals">Current Working places:</label>
                     <input id="workingHospitals" type="text" {...formik.getFieldProps('workingHospitals')} />
                 </div>
                 <div className="form-group">
                     <label htmlFor="age">Age:</label>
                     <input id="age" type="number" {...formik.getFieldProps('age')} />
                 </div>
                 <div className="form-group">
                     <label htmlFor="contactNo">Contact No:</label>
                     <input id="contactNo" type="text" {...formik.getFieldProps('contactNo')} />
                 </div>
                 <div className="form-group">
                     <label htmlFor="profilePicture">Profile Picture:</label>
                     <input id="profilePicture" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setProfileImage)} />
                     <img src={profileImage} alt="Profile" className="profile-image" />
                 </div>
                 <div className="form-group">
                     <label htmlFor="digitalSignature">Digital Signature:</label>
                     <input id="digitalSignature" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setSignatureImage)} />
                     <img src={signatureImage} alt="Signature" className="profile-image" />
                 </div>
                 <button type="submit" className="update-button"><a href='/Doctors' style={{textDecoration:'none',  color:'white'}}>Update Profile</a></button>
            </form>
            </div>
        </div>
    );
}

export default ProfilePage;
