// // const mongoose = require('mongoose');

// // const bookingSchema = new mongoose.Schema({
// //     fullName: { type: String, required: true },
// //     dob: { type: Date, required: true },
// //     gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
// //     email: { type: String, required: true },
// //     phone: { type: String, required: true },
// //     consultationReason: { type: String, required: true },
// //     preferredDate: { type: Date, required: true },
// //     // preferredTime: { type: String, required: true, enum: ['morning', 'afternoon', 'evening'] },
// //     chronicConditions: { type: String, default: '' },
// //     medications: { type: String, default: '' },
// //     allergies: { type: String, default: '' },
// //     preferredLanguage: { type: String, required: true, enum: ['English', 'Spanish', 'Other'] },
// //     visitedBefore: { type: String, required: true, enum: ['yes', 'no'] },
// //     consent: { type: Boolean, required: true },
// //     isVerified: { 
// //         type: Boolean, 
// //         default: false 
// //     }
// // }, {
// //     timestamps: true  // Adds createdAt and updatedAt timestamps
// // });

// // const Booking = mongoose.model('Booking', bookingSchema);

// // module.exports = Booking;

// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const bookingSchema = new Schema({
//   doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
//   fullName: { type: String, required: true },
//   dob: { type: Date, required: true },
//   gender: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   consultationReason: { type: String, required: true },
//   preferredDate: { type: Date, required: true },
//   preferredTime: { type: String, required: true },
// //   chronicConditions: { type: String },
// //   medications: { type: String },
// //   allergies: { type: String },
//   preferredLanguage: { type: String, required: true },
//   visitedBefore: { type: Boolean, required: true },
//   consent: { type: Boolean, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;


const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    preferredDate: {
        type: String,
        required: true
    },
    preferredTime: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    consultationReason: {
        type: String,
        required: true
    },
    preferredLanguage: {
        type: String,
        enum: ['English', 'Spanish', 'Other'],
        required: true
    },
    visitedBefore: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    },
    consent: {
        type: Boolean,
        required: true
    },
    paymentProcessed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
