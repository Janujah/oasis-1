// // // import React, { useState } from 'react';

// // // const PaymentPage = () => {
// // //   // State variables to hold form data
// // //   const [cardNumber, setCardNumber] = useState('');
// // //   const [expiryDate, setExpiryDate] = useState('');
// // //   const [cvv, setCvv] = useState('');
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');

// // //   // Function to handle form submission
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Here you can perform any further processing, such as sending data to a server
// // //     console.log('Form submitted with data:', { cardNumber, expiryDate, cvv, name, email });
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Payment Page</h2>
// //     //   <form onSubmit={handleSubmit}>
// //     //     <div>
// //     //       <label>Card Number:</label>
// //     //       <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
// //     //     </div>
// //     //     <div>
// //     //       <label>Expiry Date:</label>
// //     //       <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
// //     //     </div>
// //     //     <div>
// //     //       <label>CVV:</label>
// //     //       <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
// //     //     </div>
// //     //     <div>
// //     //       <label>Name:</label>
// //     //       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// //     //     </div>
// //     //     <div>
// //     //       <label>Email:</label>
// //     //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //     //     </div>
// //     //     <button type="submit">Pay Now</button>
// //     //   </form>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentPage;

// // import React, { useState } from 'react';
// // import {loadStripe} from '@stripe/stripe-js';

// // const PaymentPage = () => {
// //   // State variables to hold form data
// //   const [cardNumber, setCardNumber] = useState('');
// //   const [expiryDate, setExpiryDate] = useState('');
// //   const [cvv, setCvv] = useState('');
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');

// //   // Function to handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can perform any further processing, such as sending data to a server
// //     console.log('Form submitted with data:', { cardNumber, expiryDate, cvv, name, email });
// //   };

// //   const makePayment = async () =>{
// //     const stripe = await loadStripe('pk_test_51PGywdBwqNocB2yIpZysEHjwSRQtGyTy7CT7hALvMgHDH7LvJsNQtupXJlqMi9oSaxWtHpERUxoacfQkEox0jpGI00jFplb4rr');

// //     const response = await fetch('')
// //   }

// //   return (
// //     <div className="payment-container"> {/* Add the class name here */}
// //       <h2>Payment Page</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Card Number:</label>
// //           <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Expiry Date:</label>
// //           <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>CVV:</label>
// //           <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Name:</label>
// //           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Email:</label>
// //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //         </div>
// //         <button type="submit" onClick={makePayment}>Pay Now</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// // import React, { useState } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';

// // const PaymentPage = () => {
// //   // State variables to hold form data
// //   const [cardNumber, setCardNumber] = useState('');
// //   const [expiryDate, setExpiryDate] = useState('');
// //   const [cvv, setCvv] = useState('');
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');

// //   // Function to handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can perform any further processing, such as sending data to a server
// //     console.log('Form submitted with data:', { cardNumber, expiryDate, cvv, name, email });
// //     makePayment();
// //   };

// //   const makePayment = async () => {
// //     try {
// //       const stripe = await loadStripe('pk_test_51PGywdBwqNocB2yIpZysEHjwSRQtGyTy7CT7hALvMgHDH7LvJsNQtupXJlqMi9oSaxWtHpERUxoacfQkEox0jpGI00jFplb4rr'); // Replace with your publishable key
// //       const response = await fetch('https://oasis-4aui.onrender.com/booking/payment', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           amount: 1000, // Replace with the actual amount
// //           currency: 'USD', // Replace with the desired currency
// //           source: 'stripe', // Replace with the token or source obtained from Stripe Elements or Checkout
// //           description: 'Sample payment',
// //           userId: 'USER_ID', // Replace with the user ID
// //         }),
// //       });
// //       const data = await response.json();
// //       console.log('Payment response:', data);
// //       // Redirect user to success page or handle the response accordingly
// //     } catch (error) {
// //       console.error('Error making payment:', error);
// //     }
// //   };

// //   return (
// //     <div className="payment-container">
// //       <h2>Payment Page</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Card Number:</label>
// //           <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Expiry Date:</label>
// //           <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>CVV:</label>
// //           <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Name:</label>
// //           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Email:</label>
// //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //         </div>
// //         <button type="submit">Pay Now</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// import React, { useEffect, useState } from 'react';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => {
//     fetch('https://oasis-4aui.onrender.com/booking/payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ amount: 1000 }), // Example amount in cents
//     })
//       .then((response) => response.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });

//     if (result.error) {
//       console.log(result.error.message);
//     } else {
//       // Payment succeeded
//     }
//   };

//   return (
//     clientSecret && (
//       <form onSubmit={handleSubmit}>
//         <PaymentElement />
//         <button disabled={!stripe}>Submit</button>
//       </form>
//     )
//   );
// };

// export default CheckoutForm;

// import React from 'react'
// function Payment() {
//   return (
//     <div>
//       <div className="payment">
//         <form action="#">
//           <div className="row">
//             <div className="col">
//               <h3 className="title">Payment</h3>
//               <div className="inputBox">
//               </div>
//               <div className="inputBox">
//                 <input type="text" id="cardName"
//                   placeholder="Enter Your name"
//                   required />
//               </div>
//               <div className="inputBox">
//                 <label for="cardNum">
//                   Credit Card Number:
//                 </label>
//                 <input type="text" id="cardNum"
//                   placeholder="1111-2222-3333-4444"
//                   maxlength="19" required />
//               </div>
//               <div className="inputBox">
//                 <label for="">Exp Month:</label>
//                 <select name="" id="">
//                   <option value="">Choose month</option>
//                   <option value="January">January</option>
//                   <option value="February">February</option>
//                   <option value="March">March</option>
//                   <option value="April">April</option>
//                   <option value="May">May</option>
//                   <option value="June">June</option>
//                   <option value="July">July</option>
//                   <option value="August">August</option>
//                   <option value="September">September</option>
//                   <option value="October">October</option>
//                   <option value="November">November</option>
//                   <option value="December">December</option>
//                 </select>
//               </div>
//               <div className="flex">
//                 <div className="inputBox">
//                   <label for="">Exp Year:</label>
//                   <select name="" id="">
//                     <option value="">Choose Year</option>
//                     <option value="2023">2023</option>
//                     <option value="2024">2024</option>
//                     <option value="2025">2025</option>
//                     <option value="2026">2026</option>
//                     <option value="2027">2027</option>
//                   </select>
//                 </div>
//                 <div className="inputBox">
//                   <label for="cvv">CVV</label>
//                   <input type="number" id="cvv"
//                     placeholder="123" required />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <input type="submit" value="Proceed to Checkout"
//             className="submit_btn" />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Payment;
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Payment() {
  const [booking, setBooking] = useState({
    name: "Booking for Doctor consultation",
    price: 1500
  });

  const stripeKey = 'pk_test_51PGywdBwqNocB2yIpZysEHjwSRQtGyTy7CT7hALvMgHDH7LvJsNQtupXJlqMi9oSaxWtHpERUxoacfQkEox0jpGI00jFplb4rr'; // Replace with your Stripe public key

  const onToken = (token) => {
    // Handle the received token, usually by sending it to your server
    console.log('Payment Successful:', token);
    // You can make a request to your server here to process the payment with the token
  };

  return (
    <div>
      <StripeCheckout
        stripeKey={stripeKey}
        token={onToken}
        name={booking.name}
        amount={booking.price * 100} // Stripe expects the amount in cents
        currency="USD" // or the currency of your choice
      />
    </div>
  );
}

export default Payment;
