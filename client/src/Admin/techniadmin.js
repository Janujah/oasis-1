// import React, { useState, useEffect } from 'react';
// import Navbar from './count';

// function UserTable() {
//     const [users, setUsers] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);
//     const [editFormData, setEditFormData] = useState(null);

//     useEffect(() => {
//         fetchUsers();
//         const newSocket = new WebSocket('ws://localhost:3001');
//         newSocket.onmessage = (event) => {
//             setUsers(JSON.parse(event.data));
//         };
//         return () => newSocket.close();
//     }, []);

//     const fetchUsers = () => {
//         fetch('https://oasis-r62g.onrender.com/Technicians/view')
//             .then(response => response.json())
//             .then(data => setUsers(data))
//             .catch(error => {
//                 console.error('Failed to fetch users:', error);
//                 alert('Failed to load users.');
//             });
//     };

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(users.length / itemsPerPage);

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

//     const verifyUser = (id) => {
//         fetch(`https://oasis-r62g.onrender.com/Technicians/verify/${id}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json' },
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(() => {
//                 alert('User verified successfully');
//                 fetchUsers();
//             })
//             .catch(error => {
//                 console.error('Error verifying user:', error);
//                 alert(`Failed to verify the user: ${error.message}`);
//             });
//     };

//     const deleteUser = (id) => {
//         if (window.confirm('Are you sure you want to delete this user?')) {
//             fetch(`https://oasis-r62g.onrender.com/Doctors/delete/${id}`, {
//                 method: 'DELETE',
//             })
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     alert(data.message || 'User deleted successfully');
//                     fetchUsers();
//                 })
//                 .catch(error => {
//                     console.error('Error:', error);
//                     alert('Failed to delete the user.');
//                 });
//         }
//     };

//     const openEditModal = (user) => {
//         setEditFormData(user);
//     };

//     const closeEditModal = () => {
//         setEditFormData(null);
//     };

//     const handleEditFormChange = (event) => {
//         const { name, value } = event.target;
//         setEditFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const submitEditForm = () => {
//         if (!editFormData || !editFormData._id) {
//             alert('Error: No user data to update.');
//             return;
//         }

//         fetch(`https://oasis-r62g.onrender.com/Doctors/update/${editFormData._id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(editFormData),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 alert('User updated successfully');
//                 fetchUsers();
//                 closeEditModal();
//             })
//             .catch(error => {
//                 console.error('Error updating user:', error);
//                 alert('Failed to update user.');
//             });
//     };

//     return (
//         <div className="user-management-container">
//             <Navbar />
//             {editFormData && (
//                 <div className="edit-modal">
//                     <form onSubmit={submitEditForm}>
//                         {/* Form fields */}
//                     </form>
//                 </div>
//             )}
//             <div className="user-table-container">
//                 <table className="user-table">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Registered ID</th>
//                             <th>Working Hospitals</th>
//                             <th>Age</th>
//                             <th>Contact No</th>
//                             <th>Bio</th>
//                             <th>Profile Image</th>
//                             <th>Signature Image</th>
//                             <th>Actions</th>
//                             <th>Verification</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentItems.map(user => (
//                             <tr key={user._id}>
//                                 <td>{user.fullName}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.registeredId}</td>
//                                 <td>{user.workingHospitals}</td>
//                                 <td>{user.age}</td>
//                                 <td>{user.contactNo}</td>
//                                 <td>{user.bio}</td>
//                                 <td>
//                                     <img src={user.profileImage} alt="Profile" style={{ width: "50px", height: "50px" }} />
//                                 </td>
//                                 <td>
//                                     <img src={user.signatureImage} alt="Signature" style={{ width: "50px", height: "50px" }} />
//                                 </td>
//                                 <td>
//                                     <button onClick={() => openEditModal(user)}>Edit</button>
//                                     <button onClick={() => deleteUser(user._id)}>Delete</button>
//                                 </td>
//                                 <td>
//                                     {user.isVerified ? 'Verified' : <button onClick={() => verifyUser(user._id)}>Verify</button>}
//                                 </td>
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

// export default UserTable;

import React, { useState, useEffect } from 'react';
import Nav from './count';

const PRODUCTS_PER_PAGE = 10;

const AdminProductTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://oasis-r62g.onrender.com/products/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products.');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <div>
        <Nav />
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{error}</h2>
      </div>
    );
  }

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="user-table-container" >
      <Nav />
      <header className="user-table-container" >
        {/* <h1 style={{ fontSize: '90px', textAlign: 'center', fontWeight: 'bold', color: '#0e0737' }}>Admin - Products</h1> */}
      </header>
      <table className="user-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Product Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.productName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>LKR {product.price}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
        {`${startIndex + 1}-${Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts)} of ${totalProducts} products`}
      </div>
    </div>
  );
};

export default AdminProductTable;
