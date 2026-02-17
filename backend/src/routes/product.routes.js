const express = require("express");
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/product.controller");

const router = express.Router();

router.post("/", auth, controller.createProduct);
router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);
router.put("/:id", auth, controller.updateProduct);
router.delete("/:id", auth, controller.deleteProduct);

module.exports = router;
