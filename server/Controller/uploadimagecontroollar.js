// // var cloudinary = require("cloudinary").v2;

// // const cloud_name = process.env.CLOUD_NAME;
// // const api_key = process.env.API_KEY;
// // const api_secret = process.env.API_SECRET;

// // cloudinary.config({
// //   cloud_name: cloud_name,
// //   api_key: api_key,
// //   api_secret: api_secret,
// // });

// // const opts = {
// //   overwrite: true,
// //   invalidate: true,
// //   resource_type: "auto",
// // };

// // const uploadImage = (image) => {
// //   //imgage = > base64
// //   return new Promise((resolve, reject) => {
// //     cloudinary.uploader.upload(image, opts, (error, result) => {
// //       if (result && result.secure_url) {
// //         console.log(result.secure_url);
// //         return resolve(result.secure_url);
// //       }
// //       console.log(error.message);
// //       return reject({ message: error.message });
// //     });
// //   });
// // };
// // module.exports = (image) => {
// //   //imgage = > base64
// //   return new Promise((resolve, reject) => {
// //     cloudinary.uploader.upload(image, opts, (error, result) => {
// //       if (result && result.secure_url) {
// //         console.log(result.secure_url);
// //         return resolve(result.secure_url);
// //       }
// //       console.log(error.message);
// //       return reject({ message: error.message });
// //     });
// //   });
// // };

// // module.exports.uploadMultipleImages = (images) => {
// //   return new Promise((resolve, reject) => {
// //     const uploads = images.map((base) => uploadImage(base));
// //     Promise.all(uploads)
// //       .then((values) => resolve(values))
// //       .catch((err) => reject(err));
// //   });
// // };


// // const cloudinary = require('cloudinary').v2;

// // // Cloudinary configuration
// // cloudinary.config({
// //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // exports.uploadImage = async (req, res) => {
// //     try {
// //         const fileStr = req.body.image;
// //         const uploadResponse = await cloudinary.uploader.upload(fileStr, {
// //             upload_preset: 'doctor_profile',
// //         });
// //         res.status(200).json({ url: uploadResponse.secure_url });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).send('An error occurred while uploading the image.');
// //     }
// // };

// // exports.uploadMultipleImages = async (req, res) => {
// //     try {
// //         const images = req.body.images;
// //         const urls = await Promise.all(images.map(async (image) => {
// //             const uploadResponse = await cloudinary.uploader.upload(image, {
// //                 upload_preset: 'doctor_profile',
// //             });
// //             return uploadResponse.secure_url;
// //         }));
// //         res.status(200).json(urls);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).send('An error occurred while uploading the images.');
// //     }
// // };


// const { uploaded } = require('../utils/multer');
// const Category = require('../Models/Doctor.model'); // Ensure this path is correct
// exports.uploadImage = (req, res) => {
//     uploaded(req, res, async (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send('An error occurred while uploading the image.');
//         }
//         const {             fullName,
//             position,
//             email,
//             bio,
//             registeredId,
//             workingHospitals,
//             age,
//             contactNo,
//             availability } = req.body;
//         const profileImage = req.file ? req.file.path : null; // Ensure this matches the field name
//         const imageDetails = new Category({
//             fullName,
//             position,
//             email,
//             bio,
//             registeredId,
//             workingHospitals,
//             age,
//             contactNo,
//             availability,
//             profileImage,// Ensure this matches the field name in the schema
//         });
//         try {
//             await imageDetails.save();
//             res.json({ imageDetails });
//         } catch (error) {
//             console.error(error);
//             res.status(500).send('An error occurred while saving the image details.');
//         }
//     });
// };
// exports.getImage = async (req, res) => {
//     try {
//         const imageFinder = await Category.find(); // Ensure this matches the model name
//         if (imageFinder.length > 0) {
//             res.json(imageFinder);
//         } else {
//             res.status(404).send('No images found.');
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while retrieving the images.');
//     }
// };
