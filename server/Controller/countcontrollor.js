// // const express = require('express');
// // const app = express();
// // const User = require('../Models/Signupmodel');
// // const Doctor = require('../Models/Doctor.model');
// // const Technician = require('../Models/Technician.model');
// // const Consumer = require('../Models/consult.model');
// // const Payment = require('../Models/PaymentModel');

// // // Endpoint to get counts
// // exports.createCountEndpoint = (model, name) => {
// //   app.get(`/${name}/count`, async (req, res) => {
// //     try {
// //       const count = await model.countDocuments();
// //       res.json(count);
// //     } catch (err) {
// //       res.status(500).json({ message: `Error fetching ${name} count`, error: err });
// //     }
// //   });
// // };

// // createCountEndpoint(User, 'users');
// // createCountEndpoint(Doctor, 'doctors');
// // createCountEndpoint(Technician, 'technicians');
// // createCountEndpoint(Consumer, 'consumers');
// // createCountEndpoint(Payment, 'payments');


// const User = require('../Models/Signupmodel');
// const Doctor = require('../Models/Doctor.model');
// const Technician = require('../Models/Technician.model');
// const Consumer = require('../Models/consult.model');
// const Payment = require('../Models/PaymentModel');

// // Function to count User documents
// exports.userCount = async (req, res) => {
//   try {
//     const count = await User.countDocuments();
//     res.json(count);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching users count', error: err });
//   }
// };

// // Function to count Doctor documents
// exports.doctorCount = async (req, res) => {
//   try {
//     const count = await Doctor.countDocuments();
//     res.json(count);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching doctors count', error: err });
//   }
// };

// // Function to count Technician documents
// exports.technicianCount = async (req, res) => {
//   try {
//     const count = await Technician.countDocuments();
//     res.json(count);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching technicians count', error: err });
//   }
// };

// // Function to count Consumer documents
// exports.consumerCount = async (req, res) => {
//   try {
//     const count = await Consumer.countDocuments();
//     res.json(count);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching consumers count', error: err });
//   }
// };

// // Function to count Payment documents
// exports.paymentCount = async (req, res) => {
//   try {
//     const count = await Payment.countDocuments();
//     res.json(count);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching payments count', error: err });
//   }
// };


const User = require('../Models/Signupmodel');
const Doctor = require('../Models/Doctor.model');
const Technician = require('../Models/productmodel');
const Consumer = require('../Models/consult.model');
const Payment = require('../Models/PaymentModel');

exports.userCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    console.log('User count:', count); // Add this line
    res.json({ count });
  } catch (err) {
    console.error('Error fetching users count:', err); // Add this line
    res.status(500).json({ message: 'Error fetching users count', error: err });
  }
};

exports.doctorCount = async (req, res) => {
  try {
    const count = await Doctor.countDocuments();
    console.log('Doctor count:', count); // Add this line
    res.json({ count });
  } catch (err) {
    console.error('Error fetching doctors count:', err); // Add this line
    res.status(500).json({ message: 'Error fetching doctors count', error: err });
  }
};

exports.technicianCount = async (req, res) => {
  try {
    const count = await Technician.countDocuments();
    console.log('Technician count:', count); // Add this line
    res.json({ count });
  } catch (err) {
    console.error('Error fetching technicians count:', err); // Add this line
    res.status(500).json({ message: 'Error fetching technicians count', error: err });
  }
};

exports.consumerCount = async (req, res) => {
  try {
    const count = await Consumer.countDocuments();
    console.log('Consumer count:', count); // Add this line
    res.json({ count });
  } catch (err) {
    console.error('Error fetching consumers count:', err); // Add this line
    res.status(500).json({ message: 'Error fetching consumers count', error: err });
  }
};

exports.paymentCount = async (req, res) => {
  try {
    const count = await Payment.countDocuments();
    console.log('Payment count:', count); // Add this line
    res.json({ count });
  } catch (err) {
    console.error('Error fetching payments count:', err); // Add this line
    res.status(500).json({ message: 'Error fetching payments count', error: err });
  }
};

