// const express = require('express');
// const bcrypt = require('bcryptjs'); 
// const Users = require('../Models/Signupmodel');
// // import { errorHandler } from '../utils/error.js';
// // import jwt from 'jsonwebtoken';

// const app = express();
// app.use(express.json());




// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await Users.findOne({ email });
//     if (!validUser) return next(errorHandler(404, 'User not found'));
//     const validPassword = bcrypt.compareSync(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: hashedPassword, ...rest } = validUser._doc;
//     const expiryDate = new Date(Date.now() + 3600000);
//     res
//       .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };


// export const signout = (req, res) => {
//   res.clearCookie('access_token').status(200).json('Signout success!');
// };



// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("../Models/Signupmodel");



// exports.Loginfarmer = (req, res) => {
//   const { Email, Password } = req.body;

//   // First check the farmer model
//   farmerModel.findOne({ Email }).then((farmer) => {
//     if (farmer) {
//       bcrypt.compare(Password, farmer.Password).then((isMatch) => {
//         if (isMatch) {
//           const token = jwt.sign({ Email: farmer.Email }, process.env.JWT, {
//             expiresIn: "1d",
//           });
//           res.cookie("token", token, { httpOnly: true });
//           res.json("Success");
//         } else {
//           res.status(401).json("Password is incorrect.");
//         }
//       });
//     } else {
//       // If not found in farmer, check the machinery model
//       machineryModel.findOne({ Email }).then((machinery) => {
//         if (machinery) {
//           bcrypt.compare(Password, machinery.Password).then((isMatch) => {
//             if (isMatch) {
//               const token = jwt.sign(
//                 { Email: machinery.Email },
//                 process.env.JWT,
//                 { expiresIn: "1d" }
//               );
//               res.cookie("token", token, { httpOnly: true });
//               res.json("Successmachine");
//             } else {
//               res.status(401).json("Password is incorrect.");
//             }
//           });
//         } else {
//           // If not found in machinery, check the Admin model
//           AdminModel.findOne({ Email }).then((admin) => {
//             if (admin) {
//               bcrypt.compare(Password, admin.Password).then((isMatch) => {
//                 if (isMatch) {
//                   const token = jwt.sign({ Email: admin.Email }, process.env.JWT, {
//                       expiresIn: "1d",
//                   });
//                   res.cookie("token", token, { httpOnly: true });
//                   res.json("Admin_Success");
//                 } else {
//                   res.status(401).json("Password is incorrect.");
//                 }
//               });
//             } else {
//               res.status(404).json("User not found.");
//             }
//           });
//         }
//       });
//     }
//   });
// };



// // Middleware to verify user
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res
//       .status(401)
//       .json({ error: "Authentication token is not available." });
//   }
//   jwt.verify(token, process.env.JWT, (err, decoded) => {
//     if (err)
//       return res.status(401).json({ error: "Invalid authentication token." });
//     req.user = decoded;
//     next();
//   });
// };

// // Protected route - Home
// app.get("/home", verifyUser, (req, res) => {
//   res.json("Success");
// });

// // Protected route - Machine
// app.get("/Machine", verifyUser, (req, res) => {
//   res.json("Successmachine");
// });

// // Protected route - admin
// app.get("/Admin", verifyUser, (req, res) => {
//   res.json("Admin_Success");
// });


// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../Models/Signupmodel"); // Updated to use the unified UserModel

// exports.loginUser = (req, res) => {
//     const { Email, Password } = req.body;

//     UserModel.findOne({ Email }).then((user) => {
//         if (!user) {
//             return res.status(404).json("User not found.");
//         }
//         bcrypt.compare(Password, user.password).then((isMatch) => {
//             if (isMatch) {
//                 const token = jwt.sign({ Email: user.email, Role: user.Role }, process.env.JWT, {
//                     expiresIn: "1d",
//                 });
//                 res.cookie("token", token, { httpOnly: true });
//                 res.json({ message: "Success", role: user.Role });
//             } else {
//                 res.status(401).json("Password is incorrect.");
//             }
//         });
//     });
// };



// function verifyRole(Role) {
//     return (req, res, next) => {
//         verifyUser(req, res, () => {
//             if (req.user.Role !== Role) {
//                 return res.status(403).json({ error: "Access denied" });
//             }
//             next();
//         });
//     };
// }

// app.get("/", verifyRole('Other'), (req, res) => {
//     res.json("User Success");
// });

// app.get("/Doctors", verifyRole('Doctor'), (req, res) => {
//     res.json("Doctor Success");
// });

// app.get("/Technicians", verifyRole('Ortho_technician'), (req, res) => {
//     res.json("Technicians Success");
// });

// app.get("/Admin/users", verifyRole('Admin'), (req, res) => {
//     res.json("Admin Success");
// });


// exports.loginUser = async (req, res) => {
//     const { Email, Password } = req.body;

//     try {
//         const user = await UserModel.findOne({ email: Email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found." });
//         }

//         const isMatch =  bcrypt.compare(Password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Password is incorrect." });
//         }

//         const token = jwt.sign({ id: user._id, Role: user.Role }, process.env.JWT_SECRET, {
//             expiresIn: "1d"
//         });

//         res.cookie("token", token, { httpOnly: true });
//         return res.status(200).json({ message: "Success", Role: user.Role });
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Server error while logging in." });
//     }
// };


// const jwt = require("jsonwebtoken");

// exports.verifyRole = (requiredRole) => {
//     return (req, res, next) => {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({ message: "No token, authorization denied." });
//         }

//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = decoded;
// function verifyRole(Role) {
//     return (req, res, next) => {
//         verifyUser(req, res, () => {
//             if (req.user.Role !== Role) {
//                 return res.status(403).json({ error: "Access denied" });
//             }
//             next();
//         });
//     };
// }

//             if (req.user.Role !== requiredRole) {
//                 return res.status(403).json({ message: "Access denied: wrong role." });
//             }

//             next();
//         } catch (err) {
//             res.status(401).json({ message: "Token is not valid." });
//         }
//     };
// }

// module.exports = verifyRole;
// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../Models/Signupmodel");

// exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;


//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password must be provided." });
//     }

//     try {
//         // Use await to ensure that the operation completes before moving to the next line
//         const user = await UserModel.findOne({ email: email });

//         if (!user) {
//             console.log("No user found with email:", email);
//             return res.status(404).json({ message: "User not found." });
//         }

//         // Use await to correctly handle the comparison result
//         const isMatch = bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             console.log("Password mismatch for user:", email);
//             return res.status(401).json({ message: "Password is incorrect." });
//         }

//         // Proceed with JWT token creation
//         const token = jwt.sign({ id: user._id, Role: user.Role , email: user.email , userName: user.userName}, process.env.JWT, 
//             {expiresIn: "1d"
//         });

//         // Set the token in an HTTP-only cookie
//         res.cookie("token", token, { httpOnly: true });

//         // Return a successful response to the client
//         return res.status(200).json({ message: "Success", id: user._id, Role: user.Role , email: user.email , userName: user.userName});
//     } catch (error) {
//         // Proper error handling
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Server error while logging in." });
//     }
// };
// ;




// verifyRole = (Role) => {
//     return (req, res, next) => {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({ message: "No token, authorization denied." });
//         }

//         try {
//             const decoded = jwt.verify(token, process.env.JWT);
//             req.user = decoded;


//             if (req.user.Role !== Role) {
//                 return res.status(403).json({ message: "Access denied: wrong role." });
//             }

//             next();
//         } catch (err) {
//             res.status(401).json({ message: "Token is not valid." });
//         }
//     };
// }

// app.get("/", verifyRole('consumers'), (req, res) => {
//     res.json("User Success");
// });

// app.get("/Doctors", verifyRole('Doctor'), (req, res) => {
//     res.json("Doctor Success");
// });

// app.get("/Technicians", verifyRole('Ortho_technician'), (req, res) => {
//     res.json("Technicians Success");
// });

// app.get("/Admin/users", verifyRole('Admin'), (req, res) => {
//     res.json("Admin Success");
// });


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/Signupmodel");

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password must be provided." });
    }

    try {
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            console.log("No user found with email:", email);
            return res.status(404).json({ message: "User not found." });
        }

        const isMatch =  bcrypt.compare(password, user.password); // Use await here

        if (!isMatch) {
            console.log("Password mismatch for user:", email);
            return res.status(401).json({ message: "Password is incorrect." });
        }

        const token = jwt.sign(
            { id: user._id, Role: user.Role, email: user.email, userName: user.userName },
            process.env.JWT, // Corrected the process.env variable
            { expiresIn: "1d" }
        );

        res.cookie("token", token, { httpOnly: true });

        return res.status(200).json({
            message: "Success",
            id: user._id,
            Role: user.Role,
            email: user.email,
            userName: user.userName,
            token // Send the token in the response
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error while logging in." });
    }
};
