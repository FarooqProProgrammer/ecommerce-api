var express = require('express');
const { Auth } = require('../../controller/auth');
const { Ecommerce } = require('../../controller/ecommerce');
const { body, validationResult } = require('express-validator');

var router = express.Router();


router.post('/add-product',Ecommerce.AddProduct)
router.get('/get-product',Ecommerce.getProduct)



module.exports = router;
