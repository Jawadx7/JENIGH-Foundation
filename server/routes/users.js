const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
const secretKey = "Donations2024?????";
const multer = require("multer");
const UserModel = require("../models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post(
  "/updateProfile",
  upload.single("profilePicture"),
  async (req, res) => {
    const { userName, bio, token } = req.body;
    const profilePicture = req.file;
    let email;
    let newBio;
    let profilePictureUrl;

    const updateFields = {};
    if (userName && userName.trim()) updateFields.userName = userName;
    if (token && token.trim()) decodedToken = jwt.verify(token, secretKey);
    if (bio && bio.trim()) updateFields.bio = bio;
    if (profilePicture) updateFields.profilePicture = profilePicture.path;

    try {
      email = decodedToken.email;
      const user = await UserModel.findOneAndUpdate({ email }, updateFields, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.bio) {
        newBio = user.bio || "";
      }
      if (user.profilePicture) {
        const formattedUrl = user.profilePicture.replace(/\\/g, "/");
        profilePictureUrl = `${req.protocol}://${req.get(
          "host"
        )}/${formattedUrl}`;
        // }
        res.status(200).json({
          username: user.userName,
          email: user.email,
          newBio: newBio,
          profilePictureUrl: profilePictureUrl,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error, please try again later" });
    }
  }
);

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.send(error);
  }
});

// Get a user by email
router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;

    // Find user by email
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user details
    return res.status(200).json(user);
  } catch (error) {
    // Handle any errors that occur during the query
    return res.status(500).json({ message: "Server error", error });
  }
});

// delete user
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndDelete(id);
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }
  return res.status(200).json({ message: "User Deleted" });
});

// update user donations list
router.put("/updateDonations/:email", async (req, res) => {
  const { email } = req.params;
  const donations = req.body.donations; // Assuming donations is an array in req.body
  try {
    const result = await UserModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      { $set: { donations: donations } }, // Set the donations array to the new one
      { new: true } // Return the updated document
    );
    res
      .status(200)
      .json({ message: "Donations updated successfully", data: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// update user Total Donation Amount
router.put("/updateTotalDonationAmount/:email", async (req, res) => {
  const { email } = req.params;
  const { totalAmountDonated } = req.body;
  try {
    console.log(totalAmountDonated, email);
    const result = await UserModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      { $inc: { totalAmountDonated: totalAmountDonated } },
      { new: true }
    );
    res.status(200).json({
      message: "User's Total Amount Donated updated successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
