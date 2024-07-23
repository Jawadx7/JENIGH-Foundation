const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT1 || 3001;
const UserModel = require("./models/User");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://jxdAdmin:${process.env.PASSWORD}@jenighdb.oope8gi.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=jenighDB`
  )
  .then(() => {
    console.log("conected to database");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch(() => console.log("could not connect to database"));

app.get("/", (req, res) => {
  res.send([
    { username: "Jawad", email: "jwd@gmail.com" },
    { username: "Dori", email: "dori@gmail.com" },
  ]);
});

app.post("/register", async (req, res) => {
  try {
    const { password, ...others } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltrounds);

    const newUser = {
      ...others,
      password: hashedPassword,
    };

    UserModel.create(newUser)
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(400).json(error));
  } catch (error) {
    console.log("error when hashing and sending to db");
  }
});

app.post("/login", async (req, res) => {
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
    res.send(error);
  }
});
