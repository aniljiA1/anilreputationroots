const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/error.middleware");

const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const favoriteRoutes = require("./routes/favorite.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/favorites", favoriteRoutes);

app.use(errorMiddleware);

module.exports = app;
