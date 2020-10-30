const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});

  res.json(products);
});

//@desc Fetch single Product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

module.exports = {
  getProducts,
  getProductById,
};

//@desc DELETE SINGLE PRODUCT
//@route DELETE /api/products/:id
//@access Public
const deleteProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    const deletedProduct = await Product.deleteOne({ _id: req.params.id });

    res.json({ message: "deleted" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

//@desc UPDATE SINGLE PRODUCT
//@route PUT /api/products/update
//@access PRIVATE
const updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.countInStock = req.body.countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json({
      _id: updatedProduct._id,
      name: updatedProduct.name,
      price: updatedProduct.price,
      description: updatedProduct.description,
      countInStock: updatedProduct.countInStock,
    });
  } else {
    res.status(401);

    throw new Error("Product not found");
  }
});

//@desc ADD PRODUCT
//@route POST /api/products
//@access PRIVATE
const addProduct = asyncHandler(async (req, res, next) => {
  const { name, price, image, countInStock, description } = req.body;

  const product = new Product({
    name: "TEST 2",
    price: 58.99,
    image:
      "https://image.freepik.com/free-photo/simple-oval-cardboard-box-with-shadow_23-2148711419.jpg",
    countInStock: 10,
    description: "Hello this is the description",
    user: req.user._id,
  });

  const createdProduct = await product.save();
  if (product) {
    return res.status(201).json(createdProduct);
  } else {
    res.status(400);
    throw new Error("Invalid Product data");
  }
});
module.exports = {
  getProducts,
  getProductById,
  deleteProductById,
  updateProduct,
  addProduct,
};
