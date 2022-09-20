const express = require("express");
const {getProducts,getProduct}=require('../controllers/productsControllers')
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

module.exports = router;