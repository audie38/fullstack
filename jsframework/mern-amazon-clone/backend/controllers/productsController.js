const Product = require('../models/productModel');
const AsyncHandler = require('express-async-handler');

const getAllProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

const getProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product Not Found');
  }

  res.status(200).json(product);

});

module.exports = {
  getAllProducts,
  getProduct,
};
