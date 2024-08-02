const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const UserModel = require("./models/User");
const bcrypt = require("bcrypt");
const saltrounds = 10;
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/register", async (req, res) => {
  try {
    const { password, ...others } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltrounds);

    const newUser = {
      ...others,
      password: hashedPassword,
    };

    UserModel.create(newUser)
      .then((result) => res.status(201).send(result))
      .catch((error) => res.status(400).send(error));
  } catch (error) {
    console.log("error when hashing and sending to db");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.send("no user found");
    } else {
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        res.send("login failed");
      } else {
        res.send("login success");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
