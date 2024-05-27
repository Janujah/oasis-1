// const express = require('express');
// // const router = express.Router();
// // const userController = require('../Controller/logincontroller');

// // // Route to handle POST requests for login
// // router.post('/login', userController.login);

// // module.exports = router;

// // import express from 'express';
//  const userController = require('../Controller/logincontroller');

// const router = express.Router();

// router.post('/login', userController);

// module.exports = router;


const express = require("express");
const router = express.Router();
const LogInControl = require("../Controller/logincontroller");

//routes using controller function

router.post("/login", LogInControl.loginUser);


module.exports = router;