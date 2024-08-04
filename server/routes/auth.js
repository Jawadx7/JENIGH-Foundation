require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 12;
const secretKey = "Donations2024?????";
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");
const UserModel = require("../models/User");

const validateInput = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Password is required")
    .escape(),
];

const extractEmail = (req, res, next) => {
  req.email = req.body.email;
  next();
};

const createUserRateLimiter = (email) =>
  rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 5,
    keyGenerator: (req) => email(req),
    handler: (req, res, next) => {
      res
        .status(429)
        .json({
          error: "Too many Login requests, please try again after 2 minutes",
        });
    },
  });

function generateJoinDate() {
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate());
  const formattedJoinDate = currentDate.toISOString().split("T")[0];

  return formattedJoinDate;
}
router.post("/register", validateInput, async (req, res) => {
  const errors = validationResult(req);
  const joinDate = generateJoinDate();
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ error: "Missing Field." });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password Must be 8 Characters or More." });
  }

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
      userName,
      joinDate,
    });

    await newUser.save();

    const newToken = jwt.sign({ email }, secretKey, { expiresIn: "7d" });

    return res
      .status(200)
      .json({ token: newToken, username: userName, email: email, bio: "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

router.post(
  "/login",
  extractEmail,
  createUserRateLimiter((req) => req.email),
  validateInput,
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    let profilePictureUrl;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing Field." });
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "Incorrect email or password." });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect email or password." });
      }

      const newToken = jwt.sign({ email: user.email }, secretKey, {
        expiresIn: "7d",
      });

      if (user.profilePicture) {
        const formattedUrl = user.profilePicture.replace(/\\/g, "/");
        profilePictureUrl = `${req.protocol}://${req.get(
          "host"
        )}/${formattedUrl}`;
      }

      res
        .status(200)
        .json({
          token: newToken,
          username: user.userName,
          email: user.email,
          bio: user.bio || "",
          profilePictureUrl: profilePictureUrl || "",
        });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong on our side." });
    }
  }
);

module.exports = router;
