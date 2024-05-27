// // const Mongoose = require('mongoose');
// // const schema = Mongoose.Schema ({
// //     fullName:{
// //         type:String,
// //         require: true
// //     },
// //     Age:{
// //         type:Number,
// //         require: true
// //     }, 
// //     userName:{
// //         type:String
// //     },  
// //     email:{
// //         type:String,
// //         require: true
// //     },
// //     password:{
// //         type:String,
// //         require: true
// //     },
// //     residence:{
// //         type:String,
// //         require: true
// //     },
// //     position:{
// //         type:String
// //     },
// //     doctorId:{
// //         type:String
// //     }

// // });

// // const NormalUser = Mongoose.model('Doctors',schema);
// // module.exports = NormalUser;


// const Mongoose = require('mongoose');
// const schema = new Mongoose.Schema ({
//     fullName:{
//         type:String,
//         // require: true
//     },
//     Age:{
//         type:Number,
//         // require: true
//     }, 
//     userName:{
//         type:String
//     },  
//     email:{
//         type:String,
//         // require: true
//     },
//     password:{
//         type:String,
//         // require: true
//     },
//     residence:{
//         type:String,
//         // require: true
//     },
//     position:{
//         type:String
//     },
//     doctorId:{
//         type:String
//     }

// });
// const Doc = Mongoose.model('Doctors' ,schema);
// module.exports = Doc;

// const mongoose = require('mongoose');

// const profileSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         // required: [true, 'Full name is required']
//     },
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         // match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
//     bio: {
//         type: String,
//         default: ''
//     },
//     availableTime: {
//         type: String,
//         default: ''
//     },
//     registeredId: {
//         type: String,
//         // required: [true, 'Registered ID is required']
//     },
//     workingHospitals: {
//         type: String,
//         // required: [true, 'Current working hospitals are required']
//     },
//     age: {
//         type: Number,
//         // required: [true, 'Age is required'],
//         // min: [1, 'Age must be a positive number']
//     },
//     contactNo: {
//         type: String,
//         // required: [true, 'Contact number is required'],
//         // match: [/^[0-9]{10}$/, 'Must be a valid 10-digit phone number']
//     },
//     profileImage: {
//         type: String,
//         default: 'https://via.placeholder.com/150'
//     },
//     signatureImage: {
//         type: String,
//         default: 'https://via.placeholder.com/150'
//     }
// });

// const Profile = mongoose.model('Doctors', profileSchema);

// module.exports = Profile;


// const mongoose = require('mongoose');

// const profileSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: [true, 'Full name is required'],
//         trim: true
//     },
//     position:{
//         type:String
//     },
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         trim: true,
//         unique: true,
//         lowercase: true,
//         match: [/\S+@\S+\.\S+/, 'Please use a valid email address']
//     },
//     bio: {
//         type: String,
//         trim: true
//     },
//     availableTime: {
//         type: Array,
//         trim: true
//     },
//     registeredId: {
//         type: String,
//         required: [true, 'Registered ID is required'],
//         trim: true
//     },
//     workingHospitals: {
//         type: String,
//         required: [true, 'Current working hospitals are required'],
//         trim: true
//     },
//     age: {
//         type: Number,
//         required: [true, 'Age is required'],
//         min: [1, 'Age must be a positive number']
//     },
//     contactNo: {
//         type: String,
//         required: [true, 'Contact number is required'],
//         match: [/^[0-9]{10}$/, 'Must be a valid 10-digit phone number']
//     },
//     profileImage: {
//         type: String, // URL to the image or image data
//         // default: null
//     },
//     signatureImage: {
//         type: String, // URL to the image or image data
//         // default: null
//     },
// isVerified: { 
//     type: Boolean, 
//     default: false 
// }

// },
//  {
//     timestamps: true
// }
// );

// const Profile = mongoose.model('Doctors', profileSchema);

// module.exports = Profile;


const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
    day: { type: String },
    time: { type: String },
});

const doctorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true, match: [/\S+@\S+\.\S+/, 'is invalid'] },
    bio: String,
    registeredId: { type: String, required: true },
    workingHospitals: { type: String, required: true },
    age: { type: Number, required: true },
    contactNo: { type: String, required: true, minlength: 10, maxlength: 10 },
    availability: [availabilitySchema],
    profileImage: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
