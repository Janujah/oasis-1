// // src/components/AddProductForm.js
// import React, { useState } from 'react';

// const AddProductForm = ({ onAdd }) => {
//   const [productName, setProductName] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!productName || !price || !image) return;

//     const formData = new FormData();
//     formData.append('productName', productName);
//     formData.append('price', parseFloat(price));
//     formData.append('image', image);

//     onAdd(formData);
//     setProductName('');
//     setPrice('');
//     setImage(null);
//     setImagePreview(null);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="add-product-form">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="productName">Product Name:</label><br />
//         <input
//           type="text"
//           id="productName"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           required
//         /><br />
//         <label htmlFor="price">Price:</label><br />
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         /><br />
//         <label htmlFor="image">Image:</label><br />
//         <input
//           type="file"
//           id="image"
//           onChange={handleImageChange}
//           required
//         /><br />
//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Image Preview" />
//           </div>
//         )}
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;
