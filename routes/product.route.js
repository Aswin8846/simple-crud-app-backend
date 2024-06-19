const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();
const {getProducts,getProduct,createProduct, updatedProduct, deletedProduct} = require('../controllers/product.controller');

router.get('/',getProducts);

router.get('/:id',getProduct);

router.post('/',createProduct);

router.put('/:id',updatedProduct);

router.delete('/:id',deletedProduct);

module.exports = router;