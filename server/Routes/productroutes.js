const express = require('express');
const router = express.Router();
const productController = require('../Controller/productcontrollar');

// Route to add a new product
router.post('/add', productController.addProduct);

// Route to get all products
router.get('/all', productController.getAllProducts);

router.get('/user/:userName', productController.getProductsByUserName);
module.exports = router;
