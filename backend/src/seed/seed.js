require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const Product = require("../models/product.model");

mongoose.connect(process.env.MONGO_URI);

(async () => {
  await User.deleteMany();
  await Product.deleteMany();

  const users = await User.insertMany([
    {
      name: "Test User",
      email: "user@test.com",
      password: await bcrypt.hash("123456", 10),
    },
    {
      name: "Admin",
      email: "admin@test.com",
      password: await bcrypt.hash("123456", 10),
    },
  ]);

  const products = Array.from({ length: 10 }).map((_, i) => ({
    title: `Product ${i + 1}`,
    price: (i + 1) * 100,
    description: `Description for product ${i + 1}`,
    image: "https://via.placeholder.com/200",
  }));

  await Product.insertMany(products);

  console.log("Seeded Successfully");
  process.exit();
})();
