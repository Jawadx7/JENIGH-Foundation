const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require('path');
const secretKey = "Donations2024?????";
const multer = require('multer');
const UserModel = require('../models/User');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


router.post('/updateProfile', upload.single('profilePicture'), async (req, res) => {
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
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.bio) {
      newBio = user.bio || '';
    };

    if (user.profilePicture) {
      const formattedUrl = user.profilePicture.replace(/\\/g, '/');
      profilePictureUrl =`${req.protocol}://${req.get('host')}/${formattedUrl}` ;
    }

    

    res.status(200).json({ username: user.userName, email: user.email, newBio: newBio, profilePictureUrl: profilePictureUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later' });
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