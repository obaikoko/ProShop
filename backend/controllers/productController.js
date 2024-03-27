import Products from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';


// @desc Gets all products
// @route GET /api/products
// @privacy Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({});
  if (products) {
    res.status(200);
    res.json(products);
  }
});




// @desc Gets Single Product
// @route GET /api/products:id
// @privacy Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.status(200);
    res.json(product);
  }
});

export { getProducts, getProduct };
