// const connectDB = require("./DB/connect");
// const express = require("express");
// const FarmerModel = require("./Models/Farmers.model");
// const MachineryModel = require("./Models/machineryOwner.model");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// const app = express();
// const PORT = 3001;

// app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
// }));
// app.use(cookieParser());

// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.status(401).json("Authentication token is not available.");
//     }
//     jwt.verify(token, process.env.JWT_SECRET_KEY || "jwt-secret-key", (err, decoded) => {
//         if (err) return res.status(401).json("Invalid authentication token.");
//         req.user = decoded;
//         next();
//     });
// };

// app.get("/home", verifyUser, (req, res) => {
//     res.json("Success");
// });

// app.get("/Machine", verifyUser, (req, res) => {
//     res.json("Successmachine");
// });

// app.post("/register", (req, res) => {
//     const { Name, NIC, TelNo, Email, Password } = req.body;
//     bcrypt.hash(Password, 10).then((hash) => {
//         FarmerModel.create({ Name, NIC, TelNo, Email, Password: hash })
//             .then((farmers) => res.json(farmers))
//             .catch((err) => res.status(500).json(err));
//     }).catch((err) => res.status(500).json(err.message));
// });

// app.post("/registerMachine", (req, res) => {
//     const { Name, NIC, TelNo, Address, VehicleTypes, Email, Password } = req.body;
//     bcrypt.hash(Password, 10).then((hash) => {
//         MachineryModel.create({ Name, NIC, TelNo, Address, VehicleTypes, Email, Password: hash })
//             .then((machinery) => res.json(machinery))
//             .catch((err) => res.status(500).json(err));
//     }).catch((err) => res.status(500).json(err.message));
// });

// app.post("/signin", (req, res) => {
//     const { Email, Password } = req.body;
//     FarmerModel.findOne({ Email }).then((farmer) => {
//         if (farmer) {
//             bcrypt.compare(Password, farmer.Password).then((isMatch) => {
//                 if (isMatch) {
//                     const token = jwt.sign({ Email: farmer.Email }, process.env.JWT_SECRET_KEY || "jwt-secret-key", { expiresIn: "1d" });
//                     res.cookie("token", token, { httpOnly: true });
//                     res.json("Success");
//                 } else {
//                     res.status(401).json("Password is incorrect.");
//                 }
//             });
//         } else {
//             MachineryModel.findOne({ Email }).then((machinery) => {
//                 if (machinery) {
//                     bcrypt.compare(Password, machinery.Password).then((isMatch) => {
//                         if (isMatch) {
//                             const token = jwt.sign({ Email: machinery.Email }, process.env.JWT_SECRET_KEY || "jwt-secret-key", { expiresIn: "1d" });
//                             res.cookie("token", token, { httpOnly: true });
//                             res.json("Successmachine");
//                         } else {
//                             res.status(401).json("Password is incorrect.");
//                         }
//                     });
//                 } else {
//                     res.status(404).json("User not found.");
//                 }
//             });
//         }
//     });
// });

// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     } catch (err) {
//         console.error("Failed to connect to the database:", err);
//     }
// };

// startServer();
