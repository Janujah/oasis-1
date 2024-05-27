// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Payment = require('../models/Payment');

// // exports.processPayment = async (req, res) => {
// //   try {
// //     const { amount, currency, source, description, userId } = req.body;

// //     // Create payment intent with Stripe
// //     const paymentIntent = await stripe.paymentIntents.create({
// //       amount,
// //       currency,
// //       source,
// //       description,
// //     });

// //     // Save payment details to MongoDB
// //     const payment = new Payment({
// //       user: userId,
// //       amount,
// //       currency,
// //       paymentMethod: 'Stripe',
// //       transactionId: paymentIntent.id,
// //       status: 'completed', // Assuming the payment is completed immediately
// //     });
// //     await payment.save();

// //     res.status(200).json({ message: 'Payment successful', payment });
// //   } catch (error) {
// //     console.error('Error processing payment:', error);
// //     res.status(500).json({ error: 'Error processing payment' });
// //   }
// // };


// const stripe = require('stripe')(process.env.STRIPE_SECRET);

// exports.createConsultation = async (req, res) => {
//     // try {
//     //     // Create a new Stripe Checkout session
//     //     const session = await stripe.checkout.sessions.create({
//     //         payment_method_types: ['card'],
//     //         line_items: [
//     //             {
//     //                 price_data: {
//     //                     currency: 'LKR',
//     //                     product_data: {
//     //                         name: 'Consultation',
//     //                     },
//     //                     unit_amount: 1500, // Amount in cents
//     //                 },
//     //                 quantity: 1,
//     //             },
//     //         ],
//     //         mode: 'payment',
//     //         success_url: 'http://localhost:3000/success', // Redirect URL after successful payment
//     //         cancel_url: 'http://localhost:3000/cancel', // Redirect URL if payment is canceled
//     //     });

//     //     res.json({ id: session.id });
//     // } catch (error) {
//     //     res.status(500).json({ error: 'Internal server error' });
//     // }
//     try {
//         const { amount } = req.body;
//         const paymentIntent = await stripe.paymentIntents.create({
//           amount,
//           currency: 'lkr',
//         });
    
//         res.send({
//           clientSecret: paymentIntent.client_secret,
//         });
//       } catch (error) {
//         res.status(500).send({ error: error.message });
//       }
// };


// const Payment = require('../Models/PaymentModel');
// // import asynchandler from 'express-async-handler';
// exports.Payment = async (req, res) => {
//   try {
//     const {  amount,user } = req.body;
//     // Perform any necessary validation on token and amount

//   var price = amount 
//     // Save payment details to your database
//     const payment = new Payment({
//       paymentStatus:"paid",
//       user:user._id,
//       amount:price,
//       currency: 'LKR', 
//       description: 'Payment for consultation',
//     //   source: token.id, // Assuming you store the source ID as a string
//     });

//     const savedPayment = await payment.save();

//     // If the payment is successful, send a success response
//     res.json({ success: true, payment: savedPayment });
//   } catch (error) {
//     // If there's an error, send an error response
//     res.status(500).json({ success: false, error: error.message });
//   }
// };


// exports.PaymentDetails = async (req, res) => {
//   try {
//     const data = await Payment.find();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// };


// const { ServerDescription } = require("mongodb");
// const uuid = require("uuid");

// const stripe = require("stripe")("sk_test_51PGywdBwqNocB2yIpwGG0uTLqhIkSkSIpRK7OGKRgPYLFD6J90rNWeIsRgGBZWvsmdcoEsx9LRMMCWAQYrRceflv00lWJKnwXc");

// exports.payMent = async (req,res) => {
//   const { token } = req.body;

//   try {
//       const customer = await stripe.customers.create({
//           email: token.email,
//           source: token.id
//       });

//       const charge = await stripe.charges.create({
//           amount: 1500, 
//           currency: 'lkr',
//           customer: customer.id,
//           receipt_email: token.email,
//           description: 'Booking for Doctor consultation',
//           shipping: {
//               name: token.card.name,
//               address: {
//                   country: token.card.address_country
//               }
//           }
//       },
//     //    { idempotencyKey: uuid() }
//     );

//       res.status(200).json(charge);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Payment Failed' });
//   }
// }


const stripe = require("stripe")("sk_test_51PGywdBwqNocB2yIFr1uvOiTCHI6UZJ7NhyHzvS5ItGnGYZGX4dSscfgMORzYm7PXM2qqFMuwf8XsvnCryXnYNar00bnmdnWol");
// const { v4: uuidv4 } = require('uuid');
const Transaction = require('../Models/PaymentModel');
const Booking = require('../Models/consult.model');  // Assuming you have a Booking model
const Doctor = require('../Models/Doctor.model');    // Assuming you have a Doctor model


exports.payMent = async (req, res) => {
  const { token, booking } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const charge = await stripe.charges.create({
      amount: 1500 * 100,
      currency: 'lkr',
      customer: customer.id,
      receipt_email: token.email,
      description: 'Booking for Doctor consultation',
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country
        }
      }
    });

    // Save transaction details in the database
    const transaction = new Transaction({
      customerId: customer.id,
      chargeId: charge.id,
      amount: charge.amount,
      currency: charge.currency,
      description: charge.description,
      receiptEmail: charge.receipt_email,
      status: charge.status,
      createdAt: charge.created,
      shipping: charge.shipping
    });

    await transaction.save();

    // Create new booking
    const newBooking = new Booking({
      // populate booking fields accordingly
      doctorId: booking.doctorId,
      // add other necessary booking details from req.body
    });

    await newBooking.save();

    res.status(200).json({ message: 'Payment successful', bookingId: newBooking._id, doctorId: booking.doctorId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment Failed' });
  }
}


exports.PaymentDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const charge = await stripe.charges.retrieve(id);
        res.status(200).json(charge);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch transaction details' });
    }
  };
  
// exports.Success = async (req,res) => {
//     const { bookingId, doctorId } = req.body;

//     try {
//       // Find the booking by ID
//       const booking = await Booking.findById(bookingId);
//       if (!booking) {
//         return res.status(404).send('Booking not found');
//       }
  
//       // Find the doctor by ID and add the booking to the doctor's dashboard
//       const doctor = await Doctor.findById(doctorId);
//       if (!doctor) {
//         return res.status(404).send('Doctor not found');
//       }
  
//       doctor.bookings.push(booking);
//       await doctor.save();
  
//       res.status(200).send('Booking added to doctor\'s dashboard successfully');
//     } catch (error) {
//       console.error('Error adding booking to doctor\'s dashboard:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   }


//   exports.getDoctorBookings = async (req, res) => {
//     const { doctorId } = req.params;
  
//     try {
//       const doctor = await Doctor.findById(doctorId).populate('bookings');
//       if (!doctor) {
//         return res.status(404).send('Doctor not found');
//       }
  
//       res.status(200).json(doctor.bookings);
//     } catch (error) {
//       console.error('Error fetching doctor bookings:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   };