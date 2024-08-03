require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const firebase = require("firebase-admin");
const saltRounds = 12;
const db = firebase.database();
const secretKey =  "Donations2024?????";
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');


const validateInput = [
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('password').isString().notEmpty().withMessage('Password is required').escape(),

];

const extractEmail = (req, res, next) => {
    req.email = req.body.email;
    next();
  };

const createUserRateLimiter = (email) => rateLimit({
    windowMs: 2 * 60 * 1000, 
    max: 5, 
    keyGenerator: (req) => email(req),
    handler: (req, res, next) => {
      res.status(429).json({ error: 'Too many Login requests, please try again after 2 minutes' });
    }
  });

function generateJoinDate() {
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate());
    const formattedJoinDate = currentDate.toISOString().split('T')[0];

    return formattedJoinDate;
}

router.post("/register", validateInput, async (req, res) => {
    const errors = validationResult(req);
    const joinDate = generateJoinDate();
    const { userName, email, password } = req.body;
    

    if (!userName || !email || !password) {
        return res.status(400).json({ error: "Missing Field." });
    };

    if (password < 8) {
        return res.status(400).json({ error: "Password Must be 8 Charcaters or More." });
    }


    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
       
        const emailSnapshot = await db.ref('users').orderByChild('email').equalTo(email).once('value');
        if (emailSnapshot.exists()) {
            return res.status(400).json({ error: "Email already registered." });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userRef = db.ref('users').push();
        await userRef.set({
            email: email,
            password: hashedPassword,
            username: userName,
            joinDate: joinDate,

        });


        const newToken = jwt.sign(
            { email: email },
            secretKey,
            { expiresIn: "7D" }
        );

        return res.status(200).json({ token: newToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong." })
    }
});

router.post("/login", extractEmail, createUserRateLimiter((req) => req.email), validateInput, async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!email || !password) {
        return res.status(400).json({ error: "Missing Field." });
    };

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        const snapshot = await db.ref('users').orderByChild('email').equalTo(email).once('value');
        const userData = snapshot.val();

        if (!userData) {

            return res.status(404).json({ error: "Incorrect email or password." });
        }

        const userId = Object.keys(userData)[0];
        const user = userData[userId];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(401).json({ error: "Incorrect email or password." });
          }

        const userRef = db.ref(`users/${userId}`);
        await userRef.update({ isLoggedIn: true });

        const newToken = jwt.sign(
            { email: user.email },
            secretKey,
            { expiresIn: "7d" }
        );

        res.status(200).json({ token: newToken });
    } catch (error) {
        res.status(500).json({error:"Something went wrong on our side."});
    }
});

module.exports = router;
