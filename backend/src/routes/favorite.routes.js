const express = require("express");
const auth = require("../middleware/auth.middleware");
const { toggleFavorite } = require("../controllers/favorite.controller");

const router = express.Router();

router.post("/:productId", auth, toggleFavorite);

module.exports = router;
