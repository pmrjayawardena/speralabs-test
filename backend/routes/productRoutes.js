const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProductById,
  updateProduct,
  addProduct,
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");

//All Product Related Routes
router.get("/", getProducts);
router.get("/:id", getProductById);
router.route("/:id").delete(deleteProductById);
router.route("/").post(protect, addProduct);
router.route("/update/:id").put(protect, updateProduct);

module.exports = router;
