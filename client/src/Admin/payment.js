// // import React, { useState, useEffect } from 'react';
// // import Navbar from '../Components/nav-admin';

// // function UserTable() {
// //     const [users, setUsers] = useState([]);
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [itemsPerPage, setItemsPerPage] = useState(10);
// //     const [editFormData, setEditFormData] = useState(null);

// //     useEffect(() => {
// //         fetchUsers();
// //         const newSocket = new WebSocket('ws://localhost:3001');
// //         newSocket.onmessage = (event) => {
// //             setUsers(JSON.parse(event.data));
// //         };
// //         return () => newSocket.close();
// //     }, []);

// //     const fetchUsers = () => {
// //         fetch('http://localhost:3001/Doctors/view')
// //             .then(response => response.json())
// //             .then(data => setUsers(data))
// //             .catch(error => {
// //                 console.error('Failed to fetch users:', error);
// //                 alert('Failed to load users.');
// //             });
// //     };

// //     const indexOfLastItem = currentPage * itemsPerPage;
// //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //     const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
// //     const totalPages = Math.ceil(users.length / itemsPerPage);

// //     const handlePageChange = (pageNumber) => {
// //         setCurrentPage(pageNumber);
// //     };

// //     const renderPageNumbers = () => {
// //         const pageNumbers = [];
// //         for (let i = 1; i <= totalPages; i++) {
// //             pageNumbers.push(i);
// //         }
// //         return pageNumbers.map(number => (
// //             <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number}>
// //                 {number}
// //             </button>
// //         ));
// //     };

// //     const verifyUser = (id) => {
// //         fetch(`http://localhost:3001/Doctors/verify/${id}`, {
// //             method: 'PATCH',
// //             headers: { 'Content-Type': 'application/json' },
// //         })
// //             .then(response => {
// //                 if (!response.ok) {
// //                     throw new Error(`HTTP error! status: ${response.status}`);
// //                 }
// //                 return response.json();
// //             })
// //             .then(() => {
// //                 alert('User verified successfully');
// //                 fetchUsers();
// //             })
// //             .catch(error => {
// //                 console.error('Error verifying user:', error);
// //                 alert(`Failed to verify the user: ${error.message}`);
// //             });
// //     };

// //     const deleteUser = (id) => {
// //         if (window.confirm('Are you sure you want to delete this user?')) {
// //             fetch(`http://localhost:3001/Doctors/delete/${id}`, {
// //                 method: 'DELETE',
// //             })
// //                 .then(response => {
// //                     if (!response.ok) {
// //                         throw new Error('Network response was not ok');
// //                     }
// //                     return response.json();
// //                 })
// //                 .then(data => {
// //                     alert(data.message || 'User deleted successfully');
// //                     fetchUsers();
// //                 })
// //                 .catch(error => {
// //                     console.error('Error:', error);
// //                     alert('Failed to delete the user.');
// //                 });
// //         }
// //     };

// //     const openEditModal = (user) => {
// //         setEditFormData(user);
// //     };

// //     const closeEditModal = () => {
// //         setEditFormData(null);
// //     };

// //     const handleEditFormChange = (event) => {
// //         const { name, value } = event.target;
// //         setEditFormData(prevData => ({
// //             ...prevData,
// //             [name]: value,
// //         }));
// //     };

// //     const submitEditForm = () => {
// //         if (!editFormData || !editFormData._id) {
// //             alert('Error: No user data to update.');
// //             return;
// //         }

// //         fetch(`http://localhost:3001/Doctors/update/${editFormData._id}`, {
// //             method: 'PUT',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(editFormData),
// //         })
// //             .then(response => response.json())
// //             .then(() => {
// //                 alert('User updated successfully');
// //                 fetchUsers();
// //                 closeEditModal();
// //             })
// //             .catch(error => {
// //                 console.error('Error updating user:', error);
// //                 alert('Failed to update user.');
// //             });
// //     };

// //     return (
// //         <div className="user-management-container">
// //             <Navbar />
// //             {editFormData && (
// //                 <div className="edit-modal">
// //                     <form onSubmit={submitEditForm}>
// //                         {/* Form fields */}
// //                     </form>
// //                 </div>
// //             )}
// //             <div className="user-table-container">
// //                 <table className="user-table">
// //                     <thead>
// //                         <tr>
// //                             <th>Name</th>
// //                             <th>Email</th>
// //                             <th>Registered ID</th>
// //                             <th>Working Hospitals</th>
// //                             <th>Age</th>
// //                             <th>Contact No</th>
// //                             <th>Bio</th>
// //                             <th>Profile Image</th>
// //                             <th>Signature Image</th>
// //                             <th>Actions</th>
// //                             <th>Verification</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {currentItems.map(user => (
// //                             <tr key={user._id}>
// //                                 <td>{user.fullName}</td>
// //                                 <td>{user.email}</td>
// //                                 <td>{user.registeredId}</td>
// //                                 <td>{user.workingHospitals}</td>
// //                                 <td>{user.age}</td>
// //                                 <td>{user.contactNo}</td>
// //                                 <td>{user.bio}</td>
// //                                 <td>
// //                                     <img src={user.profileImage} alt="Profile" style={{ width: "50px", height: "50px" }} />
// //                                 </td>
// //                                 <td>
// //                                     <img src={user.signatureImage} alt="Signature" style={{ width: "50px", height: "50px" }} />
// //                                 </td>
// //                                 <td>
// //                                     <button onClick={() => openEditModal(user)}>Edit</button>
// //                                     <button onClick={() => deleteUser(user._id)}>Delete</button>
// //                                 </td>
// //                                 <td>
// //                                     {user.isVerified ? 'Verified' : <button onClick={() => verifyUser(user._id)}>Verify</button>}
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //                 <div className="pagination">
// //                     {renderPageNumbers()}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default UserTable;



// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/nav-admin';

// function PaymentTable() {
//     const [payments, setPayments] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);

//     useEffect(() => {
//         fetchPayments();
//         const newSocket = new WebSocket('ws://localhost:3001');
//         newSocket.onmessage = (event) => {
//             setPayments(JSON.parse(event.data));
//         };
//         return () => newSocket.close();
//     }, []);

//     const fetchPayments = () => {
//         fetch('http://localhost:3001/payments/view')
//             .then(response => response.json())
//             .then(data => setPayments(data))
//             .catch(error => {
//                 console.error('Failed to fetch payments:', error);
//                 alert('Failed to load payments.');
//             });
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(payments.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(i);
//         }
//         return pageNumbers.map(number => (
//             <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number}>
//                 {number}
//             </button>
//         ));
//     };

//     return (
//         <div className="payment-management-container">
//             <Navbar />
//             <div className="payment-table-container">
//                 <table className="payment-table">
//                     <thead>
//                         <tr>
//                             <th>Customer ID</th>
//                             <th>Charge ID</th>
//                             <th>Amount</th>
//                             <th>Currency</th>
//                             <th>Description</th>
//                             <th>Receipt Email</th>
//                             <th>Status</th>
//                             <th>Created At</th>
//                             <th>Shipping Name</th>
//                             <th>Shipping Country</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map(payment => (
//                             <tr key={payment._id}>
//                                 <td>{payment.customerId}</td>
//                                 <td>{payment.chargeId}</td>
//                                 <td>{payment.amount}</td>
//                                 <td>{payment.currency}</td>
//                                 <td>{payment.description}</td>
//                                 <td>{payment.receiptEmail}</td>
//                                 <td>{payment.status}</td>
//                                 <td>{new Date(payment.createdAt).toLocaleString()}</td>
//                                 <td>{payment.shipping.name}</td>
//                                 <td>{payment.shipping.address.country}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="pagination">
//                     {renderPageNumbers()}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PaymentTable;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/nav-admin';
// // import './PaymentTable.css';

// function PaymentTable() {
//     const [payments, setPayments] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);

//     useEffect(() => {
//         fetchPayments();
//     }, []);

//     const fetchPayments = () => {
//         fetch('http://localhost:3001/stripe/payments')
//             .then(response => response.json())
//             .then(data => setPayments(data))
//             .catch(error => {
//                 console.error('Failed to fetch payments:', error);
//                 alert('Failed to load payments.');
//             });
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(payments.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(i);
//         }
//         return pageNumbers.map(number => (
//             <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number}>
//                 {number}
//             </button>
//         ));
//     };

//     return (
//         <div className="payment-management-container">
//             <Navbar />
//             <div className="payment-table-container">
//                 <table className="payment-table">
//                     <thead>
//                         <tr>
//                             <th>Customer ID</th>
//                             <th>Charge ID</th>
//                             <th>Amount</th>
//                             <th>Currency</th>
//                             <th>Description</th>
//                             <th>Receipt Email</th>
//                             <th>Status</th>
//                             <th>Created At</th>
//                             <th>Shipping Name</th>
//                             <th>Shipping Country</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map(payment => (
//                             <tr key={payment.id}>
//                                 <td>{payment.customer}</td>
//                                 <td>{payment.id}</td>
//                                 <td>{(payment.amount / 100).toFixed(2)}</td>
//                                 <td>{payment.currency.toUpperCase()}</td>
//                                 <td>{payment.description}</td>
//                                 <td>{payment.receipt_email}</td>
//                                 <td>{payment.status}</td>
//                                 <td>{new Date(payment.created * 1000).toLocaleString()}</td>
//                                 <td>{payment.shipping?.name}</td>
//                                 <td>{payment.shipping?.address?.country}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="pagination">
//                     {renderPageNumbers()}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PaymentTable;



// import React, { useState, useEffect } from 'react';
// import Navbar from './count';
// // import './UserTable.css';

// function PaymentTable() {
//     const [payments, setPayments] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);
//     const [userName, setUserName] = useState('');
//     const [userId, setUserId] = useState('');

//     useEffect(() => {
//         fetchUserDetails();
//         fetchPayments();
//     }, []);

//     const fetchUserDetails = () => {
//         const token = localStorage.getItem('token'); // Assuming token is stored in local storage
//         if (token) {
//             fetch('http://localhost:3001/user/details', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     setUserName(data.name);
//                     setUserId(data._id);
//                 })
//                 .catch(error => {
//                     console.error('Failed to fetch user details:', error);
//                     alert('Failed to load user details.');
//                 });
//         }
//     };

//     const fetchPayments = () => {
//         fetch('http://localhost:3001/stripe/payments')
//             .then(response => response.json())
//             .then(data => setPayments(data))
//             .catch(error => {
//                 console.error('Failed to fetch payments:', error);
//                 alert('Failed to load payments.');
//             });
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(payments.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(i);
//         }
//         return pageNumbers.map(number => (
//             <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number}>
//                 {number}
//             </button>
//         ));
//     };

//     return (
//         <div className="user-management-container">
//             <Navbar />
//             <div className="user-table-container">
//                 <table className="user-table">
//                     <thead>
//                         <tr>
//                             <th>Customer ID</th>
//                             <th>Charge ID</th>
//                             <th>Amount</th>
//                             <th>Currency</th>
//                             <th>Description</th>
//                             <th>Receipt Email</th>
//                             <th>Status</th>
//                             <th>Created At</th>
//                             <th>Shipping Name</th>
//                             {/* <th>Shipping Country</th> */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map(payment => (
//                             <tr key={payment.id}>
//                                 <td>{payment.customer}</td>
//                                 <td>{payment.id}</td>
//                                 <td>{(payment.amount / 100).toFixed(2)}</td>
//                                 <td>{payment.currency.toUpperCase()}</td>
//                                 <td>{payment.description}</td>
//                                 <td>{payment.receipt_email}</td>
//                                 <td>{payment.status}</td>
//                                 <td>{new Date(payment.created * 1000).toLocaleString()}</td>
//                                 <td>{userName || userId}</td>
//                                 {/* <td>{payment.shipping?.address?.country}</td> */}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="pagination">
//                     {renderPageNumbers()}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PaymentTable;
import React, { useState, useEffect } from 'react';
import Navbar from './count';
// import './UserTable.css';

function PaymentTable() {
    const [payments, setPayments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        fetchUserDetails();
        fetchPayments();
    }, []);

    const fetchUserDetails = () => {
        const token = localStorage.getItem('token'); // Assuming token is stored in local storage
        if (token) {
            fetch('http://localhost:3001/user/details', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUserName(data.name);
                    setUserId(data._id);
                })
                .catch(error => {
                    console.error('Failed to fetch user details:', error);
                    alert('Failed to load user details.');
                });
        }
    };

    const fetchPayments = () => {
        fetch('http://localhost:3001/stripe/payments')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched payments data:', data); // Log the fetched data
            if (Array.isArray(data)) {
                setPayments(data);
            } else {
                console.error('Fetched payments data is not an array:', data);
                alert('Failed to load payments.');
            }
        })
        .catch(error => {
            console.error('Failed to fetch payments:', error);
            alert('Failed to load payments.');
        });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(payments.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.map(number => (
            <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number}>
                {number}
            </button>
        ));
    };

    return (
        <div className="user-management-container">
            <Navbar />
            <div className="user-table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Charge ID</th>
                            <th>Amount</th>
                            <th>Currency</th>
                            <th>Description</th>
                            <th>Receipt Email</th>
                            <th>Status</th>
                            <th>Created At</th>
                            {/* <th>Shipping Name</th> */}
                            {/* <th>Shipping Country</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(payment => (
                            <tr key={payment.id}>
                                <td>{payment.customer}</td>
                                <td>{payment.id}</td>
                                <td>{(payment.amount / 100).toFixed(2)}</td>
                                <td>{payment.currency.toUpperCase()}</td>
                                <td>{payment.description}</td>
                                <td>{payment.receipt_email}</td>
                                <td>{payment.status}</td>
                                <td>{new Date(payment.created * 1000).toLocaleString()}</td>
                                {/* <td>{userName || userId}</td> */}
                                {/* <td>{payment.shipping?.address?.country}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    {renderPageNumbers()}
                </div>
            </div>
        </div>
    );
}

export default PaymentTable;


// import React, { useState, useEffect } from 'react';
// import Navbar from './count';
// // import './UserTable.css';

// function PaymentTable() {
//     const [payments, setPayments] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);

//     useEffect(() => {
//         fetchPayments();
//     }, []);

//     const fetchPayments = () => {
//         fetch('http://localhost:3001/stripe/payments-with-users')
//             .then(response => response.json())
//             .then(data => setPayments(data))
//             .catch(error => {
//                 console.error('Failed to fetch payments:', error);
//                 alert('Failed to load payments.');
//             });
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(payments.length / itemsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(i);
//         }
//         return pageNumbers.map(number => (
//             <button key={number} onClick={() => handlePageChange(number)} disabled={currentPage === number}>
//                 {number}
//             </button>
//         ));
//     };

//     return (
//         <div className="user-management-container">
//             <Navbar />
//             <div className="user-table-container">
//                 <table className="user-table">
//                     <thead>
//                         <tr>
//                             <th>Customer ID</th>
//                             <th>Charge ID</th>
//                             <th>Amount</th>
//                             <th>Currency</th>
//                             <th>Description</th>
//                             <th>Receipt Email</th>
//                             <th>Status</th>
//                             <th>Created At</th>
//                             <th>User Name</th>
//                             <th>User Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map(payment => (
//                             <tr key={payment.id}>
//                                 <td>{payment.customer}</td>
//                                 <td>{payment.id}</td>
//                                 <td>{(payment.amount / 100).toFixed(2)}</td>
//                                 <td>{payment.currency.toUpperCase()}</td>
//                                 <td>{payment.description}</td>
//                                 <td>{payment.receipt_email}</td>
//                                 <td>{payment.status}</td>
//                                 <td>{new Date(payment.created * 1000).toLocaleString()}</td>
//                                 <td>{payment.user ? payment.user.name : 'N/A'}</td>
//                                 <td>{payment.user ? payment.user.email : 'N/A'}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className="pagination">
//                     {renderPageNumbers()}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PaymentTable;
