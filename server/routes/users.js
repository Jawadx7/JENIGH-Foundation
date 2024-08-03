const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const firebase = require("firebase-admin");
const db = firebase.database();
const secretKey =  "Donations2024?????";


router.put("/users/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findByIdAndUpdate(id, req.body);
      if (!user) {
        return res.status(404).json({ message: "User  not found" });
      } else {
        const updatedUser = await UserModel.findById(id);
        res.status(200).json(updatedUser);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get("/users", async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.status(200).send(users);
    } catch (error) {
      res.send(error);
    }
  });

  module.exports = router;