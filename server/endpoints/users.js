const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("../models/User");
const app = express();
require("dotenv").config();
const port = process.env.PORT2 || 3002;

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
  .catch((error) => console.log(error));

let currentUser;

app.post("/api/loggedin", (req, res) => {
  try {
    currentUser = req.body;
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/currentUser", async (req, res) => {
  try {
    const { email } = currentUser;
    try {
      const currentUser = await UserModel.findOne({ email });

      if (!currentUser) {
        res.send("current user not found");
      } else {
        res.json([currentUser]);
      }
    } catch (error) {
      res.send(error);
    }
  } catch (error) {
    res.send(error);
  }
});
