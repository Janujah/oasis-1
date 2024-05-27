// // // // // import React, { useState } from 'react';
// // // // // import { useFormik } from 'formik';
// // // // // import * as Yup from 'yup';

// // // // // function ProfilePage() {
// // // // //     const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
// // // // //     const [signatureImage, setSignatureImage] = useState('https://via.placeholder.com/150');

// // // // //     const formik = useFormik({
// // // // //         initialValues: {
// // // // //             fullName: 'John Doe',
// // // // //             email: 'john.doe@example.com',
// // // // //             bio: '',
// // // // //             availableTime: '',
// // // // //             registeredId: '',
// // // // //             workingHospitals: '',
// // // // //             age: '',
// // // // //             contactNo: ''
// // // // //         },
// // // // //         validationSchema: Yup.object({
// // // // //             fullName: Yup.string().required('Full name is required'),
// // // // //             email: Yup.string().email('Invalid email address').required('Email is required'),
// // // // //             bio: Yup.string(),
// // // // //             availableTime: Yup.string(),
// // // // //             registeredId: Yup.string().required('Registered ID is required'),
// // // // //             workingHospitals: Yup.string().required('Current working hospitals are required'),
// // // // //             age: Yup.number().positive().integer().required('Age is required'),
// // // // //             contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Contact number is required')
// // // // //         }),
// // // // //         onSubmit: values => {
// // // // //             console.log('User Profile:', values);
// // // // //             alert('Profile updated!');
// // // // //         },
// // // // //     });

// // // // //     const handleImageChange = (file, setImage) => {
// // // // //         if (file) {
// // // // //             setImage(URL.createObjectURL(file));
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div style={{ background:'linear-gradient(to bottom,   #FFFCFC,  #AB9551)'}}>
// // // // //         <div className="profile-container" >
// // // // //             <h1>Your Profile</h1>
// // // // //             <form onSubmit={formik.handleSubmit} className="profile-form">
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="fullName">Full Name:</label>
// // // // //                     <input id="fullName" type="text" {...formik.getFieldProps('fullName')} />
// // // // //                     {formik.touched.fullName && formik.errors.fullName && <div className="error">{formik.errors.fullName}</div>}
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="email">Email:</label>
// // // // //                     <input id="email" type="email" {...formik.getFieldProps('email')} />
// // // // //                     {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="bio">Bio:</label>
// // // // //                     <textarea id="bio" {...formik.getFieldProps('bio')} />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="availableTime">Available Time:</label>
// // // // //                     <input id="availableTime" type="text" placeholder="e.g., Mondays, 3-5 PM" {...formik.getFieldProps('availableTime')} />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="registeredId">Registered ID:</label>
// // // // //                     <input id="registeredId" type="text" {...formik.getFieldProps('registeredId')} />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="workingHospitals">Current Working places:</label>
// // // // //                     <input id="workingHospitals" type="text" {...formik.getFieldProps('workingHospitals')} />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="age">Age:</label>
// // // // //                     <input id="age" type="number" {...formik.getFieldProps('age')} />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="contactNo">Contact No:</label>
// // // // //                     <input id="contactNo" type="text" {...formik.getFieldProps('contactNo')} />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="profilePicture">Profile Picture:</label>
// // // // //                     <input id="profilePicture" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setProfileImage)} />
// // // // //                     <img src={profileImage} alt="Profile" className="profile-image" />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                     <label htmlFor="digitalSignature">Digital Signature:</label>
// // // // //                     <input id="digitalSignature" type="file" accept="image/*" onChange={(e) => handleImageChange(e.target.files[0], setSignatureImage)} />
// // // // //                     <img src={signatureImage} alt="Signature" className="profile-image" />
// // // // //                 </div>
// // // // //                 <button type="submit" className="update-button"><a href='/Doctors' style={{textDecoration:'none',  color:'white'}}>Update Profile</a></button>
// // // // //             </form>
// // // // //         </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default ProfilePage;


// // // // import React, { useState , useEffect } from 'react';
// // // // import { useFormik } from 'formik';
// // // // import * as Yup from 'yup';
// // // // import axios from 'axios';

// // // // function ProfilePage() {
// // // //     const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
// // // //     const [signatureImage, setSignatureImage] = useState('https://via.placeholder.com/150');



// // // //     const formik = useFormik({
// // // //         initialValues: {
// // // //             fullName: '',
// // // //             email: '',
// // // //             bio: '',
// // // //             availableTime: '',
// // // //             registeredId: '',
// // // //             workingHospitals: '',
// // // //             age: '',
// // // //             contactNo: ''
// // // //         },
// // // //         validationSchema: Yup.object({
// // // //             fullName: Yup.string().required('Full name is required'),
// // // //             email: Yup.string().email('Invalid email address').required('Email is required'),
// // // //             bio: Yup.string(),
// // // //             availableTime: Yup.string(),
// // // //             registeredId: Yup.string().required('Registered ID is required'),
// // // //             workingHospitals: Yup.string().required('Current working hospitals are required'),
// // // //             age: Yup.number().positive().integer().required('Age is required'),
// // // //             contactNo: Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number').required('Contact number is required')
// // // //         }),

// // // //         onSubmit: values => {
// // // //             axios.post('http://localhost:3002/Doctors/create', {
// // // //                 ...values,
// // // //                 profileImage,
// // // //                 signatureImage
// // // //             })
// // // //             .then(response => {
// // // //                 alert('Profile updated successfully!');
// // // //             })
// // // //             .catch(error => {
// // // //                 alert('Failed to update profile.');
// // // //                 console.error('Error:', error);
// // // //             });
// // // //         },
// // // //     });

// // // //     const handleImageChange = (event, setImage) => {
// // // //         const file = event.currentTarget.files[0];
// // // //         if (file) {
// // // //             setImage(URL.createObjectURL(file));
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="profile-container" style={{ padding: "20px", fontFamily: "Arial" }}>
// // // //             <h1 style={{ textAlign: "center" }}>Your Profile</h1>
// // // //             <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }}>
// // // //                 {/* Full Name */}
// // // //                 <label htmlFor="fullName">Full Name:</label>
// // // //                 <input
// // // //                     id="fullName"
// // // //                     type="text"
// // // //                     {...formik.getFieldProps('fullName')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />
// // // //                 {formik.touched.fullName && formik.errors.fullName && <div style={{ color: "red" }}>{formik.errors.fullName}</div>}

// // // //                 {/* Email */}
// // // //                 <label htmlFor="email">Email:</label>
// // // //                 <input
// // // //                     id="email"
// // // //                     type="email"
// // // //                     {...formik.getFieldProps('email')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />
// // // //                 {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}

// // // //                 {/* Bio */}
// // // //                 <label htmlFor="bio">Bio:</label>
// // // //                 <textarea
// // // //                     id="bio"
// // // //                     {...formik.getFieldProps('bio')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />

// // // //                 {/* Available Time */}
// // // //                 <label htmlFor="availableTime">Available Time:</label>
// // // //                 <input
// // // //                     id="availableTime"
// // // //                     type="text"
// // // //                     {...formik.getFieldProps('availableTime')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                     placeholder="e.g., Mondays, 3-5 PM"
// // // //                 />

// // // //                 {/* Registered ID */}
// // // //                 <label htmlFor="registeredId">Registered ID:</label>
// // // //                 <input
// // // //                     id="registeredId"
// // // //                     type="text"
// // // //                     {...formik.getFieldProps('registeredId')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />

// // // //                 {/* Working Hospitals */}
// // // //                 <label htmlFor="workingHospitals">Current Working Places:</label>
// // // //                 <input
// // // //                     id="workingHospitals"
// // // //                     type="text"
// // // //                     {...formik.getFieldProps('workingHospitals')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />

// // // //                 {/* Age */}
// // // //                 <label htmlFor="age">Age:</label>
// // // //                 <input
// // // //                     id="age"
// // // //                     type="number"
// // // //                     {...formik.getFieldProps('age')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />

// // // //                 {/* Contact No */}
// // // //                 <label htmlFor="contactNo">Contact No:</label>
// // // //                 <input
// // // //                     id="contactNo"
// // // //                     type="text"
// // // //                     {...formik.getFieldProps('contactNo')}
// // // //                     style={{ padding: "8px", margin: "5px 0" }}
// // // //                 />

// // // //                 {/* Profile Picture */}
// // // //                 <label htmlFor="profilePicture">Profile Picture:</label>
// // // //                 <input
// // // //                     id="profilePicture"
// // // //                     type="file"
// // // //                     accept="image/*"
// // // //                     onChange={(event) => handleImageChange(event, setProfileImage)}
// // // //                     style={{ margin: "5px 0" }}
// // // //                 />
// // // //                 <img src={profileImage} alt="Profile" style={{ width: "100px", height: "100px", marginBottom: "10px" }} />

// // // //                 {/* Digital Signature */}
// // // //                 <label htmlFor="digitalSignature">Digital Signature:</label>
// // // //                 <input
// // // //                     id="digitalSignature"
// // // //                     type="file"
// // // //                     accept="image/*"
// // // //                     onChange={(event) => handleImageChange(event, setSignatureImage)}
// // // //                     style={{ margin: "5px 0" }}
// // // //                 />
// // // //                 <img src={signatureImage} alt="Signature" style={{ width: "100px", height: "100px", marginBottom: "10px" }} />

// // // //                 <button type="submit" style={{ padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
// // // //                     Save Profile
// // // //                 </button>
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default ProfilePage;

// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // function ProfilePage() {
// // // //     const [formData, setFormData] = useState({
// // // //         fullName: '',
// // // //         position: '',
// // // //         email: '',
// // // //         bio: '',
// // // //         registeredId: '',
// // // //         workingHospitals: '',
// // // //         age: '',
// // // //         contactNo: '',
// // // //         availability: [{ day: '', time: '' }],
// // // //     });
// // // //     const [loading, setLoading] = useState(false);
// // // //     const [url, setUrl] = useState("");
// // // //     const [profileImage, setProfileImage] = useState(null);
// // // //     const [signatureImage, setSignatureImage] = useState(null);
// // // //     const [errors, setErrors] = useState({});

// // // //     const convertBase64 = (file) => {
// // // //         return new Promise((resolve, reject) => {
// // // //           const fileReader = new FileReader();
// // // //           fileReader.readAsDataURL(file);
    
// // // //           fileReader.onload = () => {
// // // //             resolve(fileReader.result);
// // // //           };
    
// // // //           fileReader.onerror = (error) => {
// // // //             reject(error);
// // // //           };
// // // //         });
// // // //       };

// // // //       function uploadSingleImage(base64) {
// // // //         setLoading(true);
// // // //         axios
// // // //           .post("http://localhost:5000/uploadImage", { image: base64 })
// // // //           .then((res) => {
// // // //             setUrl(res.data);
// // // //             alert("Image uploaded Succesfully");
// // // //           })
// // // //           .then(() => setLoading(false))
// // // //           .catch(console.log);
// // // //       }
    
// // // //       function uploadMultipleImages(images) {
// // // //         setLoading(true);
// // // //         axios
// // // //           .post("http://localhost:5000/uploadMultipleImages", { images })
// // // //           .then((res) => {
// // // //             setUrl(res.data);
// // // //             alert("Image uploaded Succesfully");
// // // //           })
// // // //           .then(() => setLoading(false))
// // // //           .catch(console.log);
// // // //       }
    
// // // //       const uploadImage = async (event) => {
// // // //         const files = event.target.files;
// // // //         console.log(files.length);
    
// // // //         if (files.length === 1) {
// // // //           const base64 = await convertBase64(files[0]);
// // // //           uploadSingleImage(base64);
// // // //           return;
// // // //         }
    
// // // //         const base64s = [];
// // // //         for (var i = 0; i < files.length; i++) {
// // // //           var base = await convertBase64(files[i]);
// // // //           base64s.push(base);
// // // //         }
// // // //         uploadMultipleImages(base64s);
// // // //       };
    
      

// // // //     const validateForm = () => {
// // // //         const newErrors = {};
// // // //         if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // //         if (!formData.position) newErrors.position = 'Your position is required';
// // // //         if (!formData.email) newErrors.email = 'Email is required';
// // // //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
// // // //         if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
// // // //         if (!formData.workingHospitals) newErrors.workingHospitals = 'Working hospitals are required';
// // // //         if (!formData.age) newErrors.age = 'Age is required';
// // // //         if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Valid 10-digit phone number required';
// // // //         formData.availability.forEach((slot, index) => {
// // // //             if (!slot.day) newErrors[`day${index}`] = 'Day is required';
// // // //             if (!slot.time) newErrors[`time${index}`] = 'Time is required';
// // // //         });
// // // //         setErrors(newErrors);
// // // //         return Object.keys(newErrors).length === 0;
// // // //     };

// // // //     const handleChange = (e) => {
// // // //         const { name, value } = e.target;
// // // //         setFormData(prev => ({ ...prev, [name]: value }));
// // // //     };

// // // //     const handleAvailabilityChange = (index, field, value) => {
// // // //         const newAvailability = formData.availability.map((slot, idx) =>
// // // //             index === idx ? { ...slot, [field]: value } : slot
// // // //         );
// // // //         setFormData(prev => ({ ...prev, availability: newAvailability }));
// // // //     };

// // // //     const handleAddAvailability = () => {
// // // //         setFormData(prev => ({
// // // //             ...prev, availability: [...prev.availability, { day: '', time: '' }]
// // // //         }));
// // // //     };

// // // //     const handleRemoveAvailability = (index) => {
// // // //         setFormData(prev => ({
// // // //             ...prev, availability: prev.availability.filter((_, idx) => idx !== index)
// // // //         }));
// // // //     };

// // // //     const handleImageChange = (event, setImage) => {
// // // //         const file = event.target.files[0];
// // // //         if (file) setImage(file);
// // // //     };

// // // //     const handleSubmit = (e) => {
// // // //         e.preventDefault();
// // // //         if (!validateForm()) return;

// // // //         console.log('Form submitted:', formData);
// // // //         // Assume API exists to handle POST request
// // // //         fetch('http://localhost:3001/Doctors/create', {
// // // //             method: 'POST',
// // // //             headers: { 'Content-Type': 'application/json' },
// // // //             body: JSON.stringify(formData),
// // // //         })
// // // //             .then(res => res.json())
// // // //             .then(() => alert('Profile updated successfully!'))
// // // //             .catch(error => console.error('Error:', error));
// // // //     };

// // // //     return (
// // // //         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }}>
// // // //             <div className="profile-container" style={{ padding: "20px" }}>
// // // //                 <h1 style={{ textAlign: "center" }}>Your Profile</h1>
// // // //                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">
// // // //                     <label htmlFor="profileImage">Profile Picture:</label>
// // // //                     <input id="profileImage" name="profileImage" type="file" accept="image/*" onChange={(event) => handleImageChange(event, setProfileImage)} style={{ margin: "5px 0" }} />
// // // //                     {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
// // // //                     {Object.keys(formData).filter(key => key !== 'availability').map(key => (
// // // //                         <div key={key}>
// // // //                             <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}:</label>
// // // //                             <input id={key} name={key} type={key === 'age' || key === 'contactNo' ? 'number' : 'text'} value={formData[key]} onChange={handleChange} style={{ padding: "8px", margin: "5px 0" }} />
// // // //                             {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
// // // //                         </div>
// // // //                     ))}
// // // //                     {formData.availability.map((slot, index) => (
// // // //                         <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// // // //                             <input type="text" placeholder="Day" value={slot.day} onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)} style={{ marginRight: '5px' }} />
// // // //                             <input type="text" placeholder="Time" value={slot.time} onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)} style={{ marginRight: '5px' }} />
// // // //                             <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
// // // //                         </div>
// // // //                     ))}
// // // //                     <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>Add Availability</button>
// // // //                     <label htmlFor="signatureImage">Digital Signature:</label>
// // // //                     <input id="signatureImage" name="signatureImage" type="file" accept="image/*" onChange={(event) => handleImageChange(event, setSignatureImage)} style={{ margin: "5px 0" }} />
// // // //                     {signatureImage && <img src={URL.createObjectURL(signatureImage)} alt="Signature" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
// // // //                     <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Save Profile</button>
// // // //                 </form>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default ProfilePage;

// // // import React, { useState } from 'react';

// // // function ProfilePage() {
// // //     const [formData, setFormData] = useState({
// // //         fullName: '',
// // //         position: '',
// // //         email: '',
// // //         bio: '',
// // //         registeredId: '',
// // //         workingHospitals: '',
// // //         age: '',
// // //         contactNo: '',
// // //         availability: [{ day: '', time: '' }],
// // //     });
// // //     const [loading, setLoading] = useState(false);
// // //     const [profileImage, setProfileImage] = useState(null);
// // //     const [signatureImage, setSignatureImage] = useState(null);
// // //     const [errors, setErrors] = useState({});

// // //     const convertBase64 = (file) => {
// // //         return new Promise((resolve, reject) => {
// // //             const fileReader = new FileReader();
// // //             fileReader.readAsDataURL(file);

// // //             fileReader.onload = () => {
// // //                 resolve(fileReader.result);
// // //             };

// // //             fileReader.onerror = (error) => {
// // //                 reject(error);
// // //             };
// // //         });
// // //     };

// // //     const uploadSingleImage = async (base64) => {
// // //         setLoading(true);
// // //         try {
// // //             const response = await fetch("http://localhost:3001/Image/uploadImage", {
// // //                 method: "POST",
// // //                 headers: { "Content-Type": "application/json" },
// // //                 body: JSON.stringify({ image: base64 }),
// // //             });
// // //             const data = await response.json();
// // //             return data; // assuming the response contains the URL
// // //         } catch (error) {
// // //             console.error(error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const uploadMultipleImages = async (images) => {
// // //         setLoading(true);
// // //         try {
// // //             const response = await fetch("http://localhost:3001/Image//uploadMultipleImages", {
// // //                 method: "POST",
// // //                 headers: { "Content-Type": "application/json" },
// // //                 body: JSON.stringify({ images }),
// // //             });
// // //             const data = await response.json();
// // //             return data; // assuming the response contains an array of URLs
// // //         } catch (error) {
// // //             console.error(error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const uploadImages = async () => {
// // //         const uploads = [];
// // //         if (profileImage) {
// // //             const profileBase64 = await convertBase64(profileImage);
// // //             uploads.push(uploadSingleImage(profileBase64));
// // //         }
// // //         if (signatureImage) {
// // //             const signatureBase64 = await convertBase64(signatureImage);
// // //             uploads.push(uploadSingleImage(signatureBase64));
// // //         }
// // //         return Promise.all(uploads);
// // //     };

// // //     const validateForm = () => {
// // //         const newErrors = {};
// // //         if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // //         if (!formData.position) newErrors.position = 'Your position is required';
// // //         if (!formData.email) newErrors.email = 'Email is required';
// // //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
// // //         if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
// // //         if (!formData.workingHospitals) newErrors.workingHospitals = 'Working hospitals are required';
// // //         if (!formData.age) newErrors.age = 'Age is required';
// // //         if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Valid 10-digit phone number required';
// // //         formData.availability.forEach((slot, index) => {
// // //             if (!slot.day) newErrors[`day${index}`] = 'Day is required';
// // //             if (!slot.time) newErrors[`time${index}`] = 'Time is required';
// // //         });
// // //         setErrors(newErrors);
// // //         return Object.keys(newErrors).length === 0;
// // //     };

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData(prev => ({ ...prev, [name]: value }));
// // //     };

// // //     const handleAvailabilityChange = (index, field, value) => {
// // //         const newAvailability = formData.availability.map((slot, idx) =>
// // //             index === idx ? { ...slot, [field]: value } : slot
// // //         );
// // //         setFormData(prev => ({ ...prev, availability: newAvailability }));
// // //     };

// // //     const handleAddAvailability = () => {
// // //         setFormData(prev => ({
// // //             ...prev, availability: [...prev.availability, { day: '', time: '' }]
// // //         }));
// // //     };

// // //     const handleRemoveAvailability = (index) => {
// // //         setFormData(prev => ({
// // //             ...prev, availability: prev.availability.filter((_, idx) => idx !== index)
// // //         }));
// // //     };

// // //     const handleImageChange = (event, setImage) => {
// // //         const file = event.target.files[0];
// // //         if (file) setImage(file);
// // //     };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     if (!validateForm()) return;

//     //     setLoading(true);
//     //     try {
//     //         const [profileImageUrl, signatureImageUrl] = await uploadImages();
//     //         const dataToSubmit = {
//     //             ...formData,
//     //             profileImage: profileImageUrl,
//     //             signatureImage: signatureImageUrl,
//     //         };
//     //         const response = await fetch('http://localhost:3001/Doctors/create', {
//     //             method: 'POST',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify(dataToSubmit),
//     //         });
//     //         if (response.ok) {
//     //             alert('Profile updated successfully!');
//     //         } else {
//     //             alert('An error occurred while updating the profile');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //         alert('An error occurred while updating the profile');
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

// // //     return (
// // //         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }}>
// // //             <div className="profile-container" style={{ padding: "20px" }}>
// // //                 <h1 style={{ textAlign: "center" }}>Your Profile</h1>
// // //                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">
// // //                     <label htmlFor="profileImage">Profile Picture:</label>
// // //                     <input id="profileImage" name="profileImage" type="file" accept="image/*" onChange={(event) => handleImageChange(event, setProfileImage)} style={{ margin: "5px 0" }} />
// // //                     {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
// // //                     {Object.keys(formData).filter(key => key !== 'availability').map(key => (
// // //                         <div key={key}>
// // //                             <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}:</label>
// // //                             <input id={key} name={key} type={key === 'age' || key === 'contactNo' ? 'number' : 'text'} value={formData[key]} onChange={handleChange} style={{ padding: "8px", margin: "5px 0" }} />
// // //                             {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
// // //                         </div>
// // //                     ))}
// // //                     {formData.availability.map((slot, index) => (
// // //                         <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// // //                             <input type="text" placeholder="Day" value={slot.day} onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)} style={{ marginRight: '5px' }} />
// // //                             <input type="text" placeholder="Time" value={slot.time} onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)} style={{ marginRight: '5px' }} />
// // //                             <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
// // //                         </div>
// // //                     ))}
// // //                     <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>Add Availability</button>
// // //                     <label htmlFor="signatureImage">Digital Signature:</label>
// // //                     <input id="signatureImage" name="signatureImage" type="file" accept="image/*" onChange={(event) => handleImageChange(event, setSignatureImage)} style={{ margin: "5px 0" }} />
// // //                     {signatureImage && <img src={URL.createObjectURL(signatureImage)} alt="Signature" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
// // //                     <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} disabled={loading}>
// // //                         {loading ? 'Saving...' : 'Save Profile'}
// // //                     </button>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default ProfilePage;

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import { ToastContainer } from 'react-toastify';
// // // import { toast } from 'react-toastify/dist/react-toastify';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';



// // function ProfilePage({ setUserName }) {
// //     const [formData, setFormData] = useState({
// //         fullName: '',
// //         position: '',
// //         email: '',
// //         bio: '',
// //         registeredId: '',
// //         workingHospitals: '',
// //         age: '',
// //         contactNo: '',
// //         availability: [{ day: '', time: '' }],
// //     });
// //     const [loading, setLoading] = useState(false);
// //     const [profileImage, setProfileImage] = useState(null);
// //     const [signatureImage, setSignatureImage] = useState(null);
// //     const [errors, setErrors] = useState({});
// //     const navigate = useNavigate();

// //     const convertBase64 = (file) => {
// //         return new Promise((resolve, reject) => {
// //             const fileReader = new FileReader();
// //             fileReader.readAsDataURL(file);

// //             fileReader.onload = () => {
// //                 resolve(fileReader.result);
// //             };

// //             fileReader.onerror = (error) => {
// //                 reject(error);
// //             };
// //         });
// //     };

// //     const uploadSingleImage = async (base64) => {
// //         setLoading(true);
// //         try {
// //             const response = await fetch("http://localhost:3001/Image/uploadImage", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ image: base64 }),
// //             });
// //             const data = await response.json();
// //             return data; // assuming the response contains the URL
// //         } catch (error) {
// //             console.error(error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const uploadMultipleImages = async (images) => {
// //         setLoading(true);
// //         try {
// //             const response = await fetch("http://localhost:3001/Image/uploadMultipleImages", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ images }),
// //             });
// //             const data = await response.json();
// //             return data; // assuming the response contains an array of URLs
// //         } catch (error) {
// //             console.error(error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const uploadImages = async () => {
// //         const uploads = [];
// //         if (profileImage) {
// //             const profileBase64 = await convertBase64(profileImage);
// //             uploads.push(uploadSingleImage(profileBase64));
// //         }
// //         if (signatureImage) {
// //             const signatureBase64 = await convertBase64(signatureImage);
// //             uploads.push(uploadSingleImage(signatureBase64));
// //         }
// //         return Promise.all(uploads);
// //     };

// //     const validateForm = () => {
// //         const newErrors = {};
// //         if (!formData.fullName) newErrors.fullName = 'Full name is required';
// //         if (!formData.position) newErrors.position = 'Your position is required';
// //         if (!formData.email) newErrors.email = 'Email is required';
// //         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
// //         if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
// //         if (!formData.workingHospitals) newErrors.workingHospitals = 'Working hospitals are required';
// //         if (!formData.age) newErrors.age = 'Age is required';
// //         if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Valid 10-digit phone number required';
// //         formData.availability.forEach((slot, index) => {
// //             if (!slot.day) newErrors[`day${index}`] = 'Day is required';
// //             if (!slot.time) newErrors[`time${index}`] = 'Time is required';
// //         });
// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prev => ({ ...prev, [name]: value }));
// //     };

// //     const handleAvailabilityChange = (index, field, value) => {
// //         const newAvailability = formData.availability.map((slot, idx) =>
// //             index === idx ? { ...slot, [field]: value } : slot
// //         );
// //         setFormData(prev => ({ ...prev, availability: newAvailability }));
// //     };

// //     const handleAddAvailability = () => {
// //         setFormData(prev => ({
// //             ...prev, availability: [...prev.availability, { day: '', time: '' }]
// //         }));
// //     };

// //     const handleRemoveAvailability = (index) => {
// //         setFormData(prev => ({
// //             ...prev, availability: prev.availability.filter((_, idx) => idx !== index)
// //         }));
// //     };

// //     const handleImageChange = (event, setImage) => {
// //         const file = event.target.files[0];
// //         if (file) setImage(file);
// //     };

// //     const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       if (!validateForm()) return;

// //       try {
// //           const imageUrls = await uploadImages();
// //           const [profileImageUrl, signatureImageUrl] = imageUrls;

// //           const updatedFormData = {
// //               ...formData,
// //               profileImage: profileImageUrl,
// //               signatureImage: signatureImageUrl,
// //           };

// //           const response = await fetch('http://localhost:3001/Doctors/create', {
// //               method: 'POST',
// //               headers: { 'Content-Type': 'application/json' },
// //               body: JSON.stringify(updatedFormData),
// //           });

// //           if (response.ok) {
// //             toast.success("Profile saved successfully", {
// //               position: "bottom-right",
// //           })        
// //               navigate('/Doctors'); // Redirect to home page
// //           } else {
// //               throw new Error('Failed to save profile');
// //           }
// //       } catch (error) {
// //           console.error('Error:', error);
// //           toast.error("Failed to save profile", {
// //               position:"bottom-right",
// //           });
// //       }
// //   };


// //     return (
// //         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }} className='container11'>
// //             <div className="profile-container" style={{ padding: "60px", width: '800px' }}>
// //                 <h1 style={{ textAlign: "center" }}>Your Profile</h1>
// //                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">
// //                     <label htmlFor="profileImage">Profile Picture:</label>
// //                     <input id="profileImage" name="profileImage" type="file" accept="image/*" onChange={(event) => handleImageChange(event, setProfileImage)} style={{ margin: "5px 0" }} />
// //                     {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
// //                     {Object.keys(formData).filter(key => key !== 'availability').map(key => (
// //                         <div key={key}>
// //                             <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}:</label>
// //                             <input id={key} name={key} type={key === 'age' || key === 'contactNo' ? 'number' : 'text'} value={formData[key]} onChange={handleChange} style={{ padding: "8px", margin: "5px 0" }} />
// //                             {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
// //                         </div>
// //                     ))}
// //                     {formData.availability.map((slot, index) => (
// //                         <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //                             <input type="text" placeholder="Day" value={slot.day} onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)} style={{ marginRight: '5px' }} />
// //                             <input type="time" placeholder="Time" value={slot.time} onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)} style={{ marginRight: '5px' }} />
// //                             <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
// //                         </div>
// //                     ))}
// //                     <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>Add Availability</button>
// //                     {/* <label htmlFor="signatureImage">Digital Signature:</label> */}
// //                     {/* <input id="signatureImage" name="signatureImage" type="file" accept="image/*" onChange={(event) => handleImageChange(event, setSignatureImage)} style={{ margin: "5px 0" }} /> */}
// //                     {/* {signatureImage && <img src={URL.createObjectURL(signatureImage)} alt="Signature" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />} */}
// //                     <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Save Profile</button>
// //             <ToastContainer />
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }

// // export default ProfilePage;


// // import React, { useState } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';
// // import StripeCheckout from 'react-stripe-checkout';

// // const stripePromise = loadStripe('pk_test_51PGywdBwqNocB2yIpZysEHjwSRQtGyTy7CT7hALvMgHDH7LvJsNQtupXJlqMi9oSaxWtHpERUxoacfQkEox0jpGI00jFplb4rr');

// // const BookingForm = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     dob: '',
// //     gender: '',
// //     email: '',
// //     phone: '',
// //     consultationReason: '',
// //     preferredDate: '',
// //     preferredTime: '',
// //     chronicConditions: '',
// //     medications: '',
// //     allergies: '',
// //     preferredLanguage: '',
// //     visitedBefore: '',
// //     consent: false
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [booking, setBooking] = useState({
// //     name: "Booking for Doctor consultation",
// //     price: 1500
// //   });
// //   const [paymentProcessed, setPaymentProcessed] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value
// //     }));
// //   };

// //   const validateForm = () => {
// //     let newErrors = {};
// //     let isValid = true;

// //     if (!formData.fullName.trim()) {
// //       isValid = false;
// //       newErrors.fullName = 'Full name is required.';
// //     }
// //     if (!formData.dob) {
// //       isValid = false;
// //       newErrors.dob = 'Date of birth is required.';
// //     }
// //     if (!formData.gender) {
// //       isValid = false;
// //       newErrors.gender = 'Gender is required.';
// //     }
// //     if (!formData.email) {
// //       isValid = false;
// //       newErrors.email = 'Email address is required.';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       isValid = false;
// //       newErrors.email = 'Email address is invalid.';
// //     }
// //     if (!formData.phone) {
// //       isValid = false;
// //       newErrors.phone = 'Phone number is required.';
// //     } else if (!/^\d{10}$/.test(formData.phone)) {
// //       isValid = false;
// //       newErrors.phone = 'Phone number must be 10 digits.';
// //     }
// //     if (!formData.consultationReason.trim()) {
// //       isValid = false;
// //       newErrors.consultationReason = 'Reason for consultation is required.';
// //     }
// //     if (!formData.preferredDate) {
// //       isValid = false;
// //       newErrors.preferredDate = 'Preferred date of consultation is required.';
// //     }
// //     if (!formData.preferredTime) {
// //       isValid = false;
// //       newErrors.preferredTime = 'Preferred time slot is required.';
// //     }
// //     if (!formData.preferredLanguage) {
// //       isValid = false;
// //       newErrors.preferredLanguage = 'Preferred language is required.';
// //     }
// //     if (!formData.visitedBefore) {
// //       isValid = false;
// //       newErrors.visitedBefore = 'Please indicate if you have visited us before.';
// //     }
// //     if (!formData.consent) {
// //       isValid = false;
// //       newErrors.consent = 'You must give your consent to proceed.';
// //     }

// //     setErrors(newErrors);
// //     return isValid;
// //   };

// //   const onToken = async (token) => {
// //     if (!validateForm()) {
// //       alert('Please fill out all required fields before proceeding with payment.');
// //       return;
// //     }

// //     console.log('Payment Successful:', token);
// //     const body = { token, booking };

// //     try {
// //       const response = await fetch('http://localhost:3001/booking/payment', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(body),
// //       });

// //       if (response.ok) {
// //         setPaymentProcessed(true);
// //         const appointment = {
// //           start: new Date(`${formData.preferredDate}T${formData.preferredTime}`),
// //           end: new Date(`${formData.preferredDate}T${formData.preferredTime}`),
// //           title: `Consultation with ${formData.fullName}`
// //         };
// //         await fetch('http://localhost:3001/appointments', {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(appointment),
// //         });

// //         // Send email with Zoom link
// //         await fetch('http://localhost:3001/Email/payment-success', {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify({ ...formData, zoomLink: "https://zoom.us/j/your-zoom-link" }),
// //         });
// //       } else {
// //         console.error('Payment failed.');
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     console.log('Form submitted:', formData);

// //     try {
// //       const response = await fetch('http://localhost:3001/consult/create', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(formData),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Network response was not ok');
// //       }

// //       const session = await response.json();
// //       const stripe = await stripePromise;

// //       const result = stripe.redirectToCheckout({
// //         sessionId: session.id,
// //       });

// //       if (result.error) {
// //         console.error("Error:", result.error.message);
// //       }
// //     } catch (error) {
// //       console.error('Fetch Error:', error);
// //     }
// //   };

// //   return (
// //     <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }} className='container11'>
// //       <div className="profile-container" style={{ padding: "60px", width: '800px' }}>
// //         <form onSubmit={handleSubmit}>
// //           <h1 style={{ color: '#0e0737', fontWeight: 'bold', textAlign: 'center' }}>Book the Appointment</h1>

// //           <label>Full Name:</label>
// //           <input
// //             type="text"
// //             name="fullName"
// //             value={formData.fullName}
// //             onChange={handleChange}
// //             style={errors.fullName ? { border: '1px solid red' } : {}}
// //           />
// //           {errors.fullName && <div style={{ color: 'red' }}>{errors.fullName}</div>}

// //           <label>Date of Birth:</label>
// //           <input
// //             type="date"
// //             name="dob"
// //             value={formData.dob}
// //             onChange={handleChange}
// //             style={errors.dob ? { border: '1px solid red' } : {}}
// //           />
// //           {errors.dob && <div style={{ color: 'red' }}>{errors.dob}</div>}

// //           <label>Gender:</label>
// //           <select
// //             name="gender"
// //             value={formData.gender}
// //             onChange={handleChange}
// //             style={errors.gender ? { border: '1px solid red' } : {}}
// //           >
// //             <option value="">Select</option>
// //             <option value="male">Male</option>
// //             <option value="female">Female</option>
// //             <option value="other">Other</option>
// //           </select>
// //           {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}

// //           <label>Email Address:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             style={errors.email ? { border: '1px solid red' } : {}}
// //           />
// //           {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

// //           <label>Phone Number:</label>
// //           <input
// //             type="text"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             style={errors.phone ? { border: '1px solid red' } : {}}
// //           />
// //           {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}

// //           <label>Reason for Consultation:</label>
// //           <textarea
// //             name="consultationReason"
// //             value={formData.consultationReason}
// //             onChange={handleChange}
// //             style={errors.consultationReason ? { border: '1px solid red' } : {}}
// //           ></textarea>
// //           {errors.consultationReason && <div style={{ color: 'red' }}>{errors.consultationReason}</div>}

// //           <label>Preferred Date of Consultation:</label>
// //           <input
// //             type="date"
// //             name="preferredDate"
// //             value={formData.preferredDate}
// //             onChange={handleChange}
// //             style={errors.preferredDate ? { border: '1px solid red' } : {}}
// //           />
// //           {errors.preferredDate && <div style={{ color: 'red' }}>{errors.preferredDate}</div>}

// //           <label>Preferred Time Slot:</label>
// //           <select
// //             name="preferredTime"
// //             value={formData.preferredTime}
// //             onChange={handleChange}
// //             style={errors.preferredTime ? { border: '1px solid red' } : {}}
// //           >
// //             <option value="">Select</option>
// //             <option value="morning">Morning (9 AM - 12 PM)</option>
// //             <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
// //             <option value="evening">Evening (5 PM - 8 PM)</option>
// //           </select>
// //           {errors.preferredTime && <div style={{ color: 'red' }}>{errors.preferredTime}</div>}

// //           <label>Preferred Language for Consultation:</label>
// //           <select
// //             name="preferredLanguage"
// //             value={formData.preferredLanguage}
// //             onChange={handleChange}
// //             style={errors.preferredLanguage ? { border: '1px solid red' } : {}}
// //           >
// //             <option value="">Select</option>
// //             <option value="English">English</option>
// //             <option value="Spanish">Spanish</option>
// //             <option value="Other">Other</option>
// //           </select>
// //           {errors.preferredLanguage && <div style={{ color: 'red' }}>{errors.preferredLanguage}</div>}

// //           <label>Have you visited our clinic before?</label>
// //           <select
// //             name="visitedBefore"
// //             value={formData.visitedBefore}
// //             onChange={handleChange}
// //             style={errors.visitedBefore ? { border: '1px solid red' } : {}}
// //           >
// //             <option value="">Select</option>
// //             <option value="yes">Yes</option>
// //             <option value="no">No</option>
// //           </select>
// //           {errors.visitedBefore && <div style={{ color: 'red' }}>{errors.visitedBefore}</div>}

// //           <label>
// //             <input
// //               type="checkbox"
// //               name="consent"
// //               checked={formData.consent}
// //               onChange={handleChange}
// //             />
// //             I consent to my data being used for the purpose of scheduling an online consultation.
// //           </label>
// //           {errors.consent && <div style={{ color: 'red' }}>{errors.consent}</div>}

// //           {!paymentProcessed && (
// //             <StripeCheckout
// //               stripeKey="pk_test_51PGywdBwqNocB2yIpZysEHjwSRQtGyTy7CT7hALvMgHDH7LvJsNQtupXJlqMi9oSaxWtHpERUxoacfQkEox0jpGI00jFplb4rr"
// //               token={onToken}
// //               name={booking.name}
// //               amount={booking.price * 100} // Stripe expects the amount in cents
// //               currency="LKR" // or the currency of your choice
// //             >
// //               <button>Confirm</button>
// //             </StripeCheckout>
// //           )}

// //           {paymentProcessed && (
// //             <button type="submit">Confirm Payment</button>
// //           )}
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default BookingForm;


// // export default ProfilePage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique file names

// function ProfilePage({ setUserName }) {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         position: '',
//         email: '',
//         bio: '',
//         registeredId: '',
//         workingHospitals: '',
//         age: '',
//         contactNo: '',
//         availability: [{ day: '', time: '' }],
//     });
//     const [loading, setLoading] = useState(false);
//     const [profileImage, setProfileImage] = useState(null);
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const uploadImageToCloudinary = async (file) => {
//         setLoading(true);
//         try {
//             const data = new FormData();
//             const uniqueFileName = `${uuidv4()}-${file.name}`;
//             data.append('file', file);
//             data.append('upload_preset', 'uu8psxac'); // Add your Cloudinary upload preset here
//             data.append('public_id', uniqueFileName);

//             const response = await fetch('https://api.cloudinary.com/v1_1/dtqvkpwdn/image/upload', {
//                 method: 'POST',
//                 body: data,
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to upload image to Cloudinary');
//             }

//             const result = await response.json();
//             return result.secure_url; // Return the secure URL of the uploaded image
//         } catch (error) {
//             console.error(error);
//             toast.error("Failed to upload image to Cloudinary", { position: "bottom-right" });
//             return null;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.fullName) newErrors.fullName = 'Full name is required';
//         if (!formData.position) newErrors.position = 'Your position is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
//         if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
//         if (!formData.workingHospitals) newErrors.workingHospitals = 'Working hospitals are required';
//         if (!formData.age) newErrors.age = 'Age is required';
//         if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Valid 10-digit phone number required';
//         formData.availability.forEach((slot, index) => {
//             if (!slot.day) newErrors[`day${index}`] = 'Day is required';
//             if (!slot.time) newErrors[`time${index}`] = 'Time is required';
//         });
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleAvailabilityChange = (index, field, value) => {
//         const newAvailability = formData.availability.map((slot, idx) =>
//             index === idx ? { ...slot, [field]: value } : slot
//         );
//         setFormData(prev => ({ ...prev, availability: newAvailability }));
//     };

//     const handleAddAvailability = () => {
//         setFormData(prev => ({
//             ...prev, availability: [...prev.availability, { day: '', time: '' }]
//         }));
//     };

//     const handleRemoveAvailability = (index) => {
//         setFormData(prev => ({
//             ...prev, availability: prev.availability.filter((_, idx) => idx !== index)
//         }));
//     };

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) setProfileImage(file);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         const profileImageUrl = profileImage ? await uploadImageToCloudinary(profileImage) : null;
//         if (!profileImageUrl) {
//             toast.error("Please upload a profile image", { position: "bottom-right" });
//             return;
//         }

//         try {
//             const formDataWithImage = {
//                 ...formData,
//                 profileImage: profileImageUrl,
//             };

//             const response = await fetch('http://localhost:3001/Doctors/create', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formDataWithImage),
//             });

//             if (response.ok) {
//                 toast.success("Profile saved successfully", { position: "bottom-right" });
//                 navigate('/Doctors');
//             } else {
//                 throw new Error('Failed to save profile');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error("Failed to save profile", { position: "bottom-right" });
//         }
//     };

//     const renderFormInput = (key, label) => (
//         <div key={key}>
//             <label htmlFor={key}>{label}:</label>
//             <input
//                 id={key}
//                 name={key}
//                 type={key === 'age' || key === 'contactNo' ? 'number' : 'text'}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 style={{ padding: "8px", margin: "5px 0" }}
//             />
//             {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
//         </div>
//     );

//     return (
//         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }} className='container11'>
//             <div className="profile-container" style={{ padding: "60px", width: '800px' }}>
//                 <h1 style={{ textAlign: "center" }}>Your Profile</h1>
//                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">
//                     <label htmlFor="profileImage">Profile Picture:</label>
//                     <input
//                         id="profileImage"
//                         name="profileImage"
//                         type="file"
//                         ahandleAvailabilityChangeccept="image/*"
//                         onChange={handleImageChange}
//                         style={{ margin: "5px 0" }}
//                     />
//                     {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
//                     {Object.keys(formData).filter(key => key !== 'availability').map(key => (
//                         renderFormInput(key, key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim())
//                     ))}
//                     {formData.availability.map((slot, index) => (
//                         <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                             <input
//                                 type="text"
//                                 placeholder="Day"
//                                 value={slot.day}
//                                 onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
//                                 style={{ marginRight: '5px' }}
//                             />
//                             <input
//                                 type="time"
//                                 placeholder="Time"
//                                 value={slot.time}
//                                 onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)}
//                                 style={{ marginRight: '5px' }}
//                             />
//                             <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
//                         </div>
//                     ))}
//                     <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>Add Availability</button>
//                     <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} disabled={loading}>
//                         {loading ? 'Saving...' : 'Save Profile'}
//                     </button>
//                     <ToastContainer />
//                 </form>
//             </div>
//         </div>
//     );
// }


// export default ProfilePage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique file names

// function ProfilePage({ setUserName }) {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         position: '',
//         email: '',
//         bio: '',
//         registeredId: '',
//         workingHospitals: '',
//         age: '',
//         contactNo: '',
//         availability: [{ day: '', time: '' }],
//     });
//     const [loading, setLoading] = useState(false);
//     const [profileImage, setProfileImage] = useState(null);
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

   

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.fullName) newErrors.fullName = 'Full name is required';
//         if (!formData.position) newErrors.position = 'Your position is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
//         if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
//         if (!formData.workingHospitals) newErrors.workingHospitals = 'Working hospitals are required';
//         if (!formData.age) newErrors.age = 'Age is required';
//         if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Valid 10-digit phone number required';
//         formData.availability.forEach((slot, index) => {
//             if (!slot.day) newErrors[`day${index}`] = 'Day is required';
//             if (!slot.time) newErrors[`time${index}`] = 'Time is required';
//         });
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleAvailabilityChange = (index, field, value) => {
//         const newAvailability = formData.availability.map((slot, idx) =>
//             index === idx ? { ...slot, [field]: value } : slot
//         );
//         setFormData(prev => ({ ...prev, availability: newAvailability }));
//     };

//     const handleAddAvailability = () => {
//         setFormData(prev => ({
//             ...prev, availability: [...prev.availability, { day: '', time: '' }]
//         }));
//     };

//     const handleRemoveAvailability = (index) => {
//         setFormData(prev => ({
//             ...prev, availability: prev.availability.filter((_, idx) => idx !== index)
//         }));
//     };

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) setProfileImage(file);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         const profileImageUrl = profileImage ? await uploadImageToCloudinary(profileImage) : null;
//         if (!profileImageUrl) {
//             toast.error("Please upload a profile image", { position: "bottom-right" });
//             return;
//         }

//         try {
//             const formDataWithImage = {
//                 ...formData,
//                 profileImage: profileImageUrl,
//             };

//             const response = await fetch('http://localhost:3001/Doctors/create', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formDataWithImage),
//             });

//             if (response.ok) {
//                 toast.success("Profile saved successfully", { position: "bottom-right" });
//                 navigate('/Doctors');
//             } else {
//                 throw new Error('Failed to save profile');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error("Failed to save profile", { position: "bottom-right" });
//         }
//     };

//     const renderFormInput = (key, label) => (
//         <div key={key}>
//             <label htmlFor={key}>{label}:</label>
//             <input
//                 id={key}
//                 name={key}
//                 type={key === 'age' || key === 'contactNo' ? 'number' : 'text'}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 style={{ padding: "8px", margin: "5px 0" }}
//             />
//             {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
//         </div>
//     );

//     return (
//         <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }} className='container11'>
//             <div className="profile-container" style={{ padding: "60px", width: '800px' }}>
//                 <h1 style={{ textAlign: "center" }}>Your Profile</h1>
//                 <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">
//                     <label htmlFor="profileImage">Profile Picture:</label>
//                     <input
//                         id="profileImage"
//                         name="profileImage"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                         style={{ margin: "5px 0" }}
//                     />
//                     {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
//                     {Object.keys(formData).filter(key => key !== 'availability').map(key => (
//                         renderFormInput(key, key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim())
//                     ))}
//                     {formData.availability.map((slot, index) => (
//                         <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                             <input
//                                 type="text"
//                                 placeholder="Day"
//                                 value={slot.day}
//                                 onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
//                                 style={{ marginRight: '5px' }}
//                             />
//                             <input
//                                 type="time"
//                                 placeholder="Time"
//                                 value={slot.time}
//                                 onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)}
//                                 style={{ marginRight: '5px' }}
//                             />
//                             <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
//                         </div>
//                     ))}
//                     <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>Add Availability</button>
//                     <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} disabled={loading}>
//                         {loading ? 'Saving...' : 'Save Profile'}
//                     </button>
//                     <ToastContainer />
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ProfilePage;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique file names

function ProfilePage({ setUserName }) {
    const [formData, setFormData] = useState({
        fullName: '',
        position: '',
        email: '',
        bio: '',
        registeredId: '',
        workingHospitals: '',
        age: '',
        contactNo: '',
        availability: [{ day: '', time: '' }],
    });
    const [loading, setLoading] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.position) newErrors.position = 'Your position is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.registeredId) newErrors.registeredId = 'Registered ID is required';
        if (!formData.workingHospitals) newErrors.workingHospitals = 'Working hospitals are required';
        if (!formData.age) newErrors.age = 'Age is required';
        if (!formData.contactNo || formData.contactNo.length !== 10) newErrors.contactNo = 'Valid 10-digit phone number required';
        formData.availability.forEach((slot, index) => {
            if (!slot.day) newErrors[`day${index}`] = 'Day is required';
            if (!slot.time) newErrors[`time${index}`] = 'Time is required';
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAvailabilityChange = (index, field, value) => {
        const newAvailability = formData.availability.map((slot, idx) =>
            index === idx ? { ...slot, [field]: value } : slot
        );
        setFormData(prev => ({ ...prev, availability: newAvailability }));
    };

    const handleAddAvailability = () => {
        setFormData(prev => ({
            ...prev, availability: [...prev.availability, { day: '', time: '' }]
        }));
    };

    const handleRemoveAvailability = (index) => {
        setFormData(prev => ({
            ...prev, availability: prev.availability.filter((_, idx) => idx !== index)
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) setProfileImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        const data = new FormData();
        data.append('profileImage', profileImage);
        data.append('fullName', formData.fullName);
        data.append('position', formData.position);
        data.append('email', formData.email);
        data.append('bio', formData.bio);
        data.append('registeredId', formData.registeredId);
        data.append('workingHospitals', formData.workingHospitals);
        data.append('age', formData.age);
        data.append('contactNo', formData.contactNo);
        data.append('availability', JSON.stringify(formData.availability));

        try {
            const response = await fetch('http://localhost:3001/Doctors/create', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                toast.success("Profile saved successfully", { position: "bottom-right" });
                navigate('/Doctors');
            } else {
                throw new Error('Failed to save profile');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to save profile", { position: "bottom-right" });
        } finally {
            setLoading(false);
        }
    };

    const renderFormInput = (key, label) => (
        <div key={key}>
            <label htmlFor={key}>{label}:</label>
            <input
                id={key}
                name={key}
                type={key === 'age' || key === 'contactNo' ? 'number' : 'text'}
                value={formData[key]}
                onChange={handleChange}
                style={{ padding: "8px", margin: "5px 0" }}
            />
            {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
        </div>
    );

    return (
        <div style={{ background: 'linear-gradient(to bottom, #FFFCFC, #AB9551)' }} className='container11'>
            <div className="profile-container" style={{ padding: "60px", width: '800px' }}>
                <h1 style={{ textAlign: "center" }}>Your Profile</h1>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto" }} encType="multipart/form-data">
                    <label htmlFor="profileImage">Profile Picture:</label>
                    <input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ margin: "5px 0" }}
                    />
                    {profileImage && <img src={URL.createObjectURL(profileImage)} alt="Profile" style={{ width: "200px", height: "200px", marginBottom: "10px" }} />}
                    {Object.keys(formData).filter(key => key !== 'availability').map(key => (
                        renderFormInput(key, key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim())
                    ))}
                    {formData.availability.map((slot, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <input
                                type="text"
                                placeholder="Day"
                                value={slot.day}
                                onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                                style={{ marginRight: '5px' }}
                            />
                            <input
                                type="time"
                                placeholder="Time"
                                value={slot.time}
                                onChange={(e) => handleAvailabilityChange(index, 'time', e.target.value)}
                                style={{ marginRight: '5px' }}
                            />
                            <button type="button" onClick={() => handleRemoveAvailability(index)} style={{ color: 'red' }}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddAvailability} style={{ margin: '10px 0', padding: '5px' }}>Add Availability</button>
                    <button type="submit" style={{ padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} disabled={loading}>
                        {loading ? 'Saving...' : 'Save Profile'}
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default ProfilePage;
