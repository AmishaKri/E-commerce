const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();
const bcrypt = require('bcrypt');
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
app.use(express.json());
app.use(cors());
 // Registration
app.post("/register", async (req, resp) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      resp.status(409).send("User already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the salt rounds

    let user = new User({
      email: req.body.email,
      password: hashedPassword,
      name:req.body.name,
    });
    let result = await user.save();
    result = result.toObject();
    

    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        resp.status(500).send({
          result: "Something went wrong. Please try again later.",
        });
      }
      resp.send({ result, auth: token });
    });
  } catch (error) {
    resp.status(500).send("Internal Server Error");
  }
});


// login
app.post("/login", async (req, resp) => {
  try {
    if (req.body.password && req.body.email) {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        
        if (passwordMatch) {
          const userWithoutPassword = { ...user.toObject() };
          delete userWithoutPassword.password;

          Jwt.sign({ user: userWithoutPassword }, jwtKey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
              resp.status(500).send({
                result: "Something went wrong. Please try again later.",
              });
            }
            resp.send({ user: userWithoutPassword, auth: token });
          });
        } else {
          resp.status(401).send({ result: "Invalid password" });
        }
      } else {
        resp.status(404).send({ result: "No user found" });
      }
    } else {
      resp.status(400).send({ result: "Invalid credentials" });
    }
  } catch (error) {
    resp.status(500).send("Internal Server Error");
  }
});

// add product
app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

// product list
app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "No product found" });
  }
});
//  to delete product
app.delete("/products/:id", async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

// update
app.get("/products/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No record found." });
  }
});
// update
app.put("/products/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

// search product
app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
app.listen(5000);
