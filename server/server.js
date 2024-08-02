const http = require("http");
const express = require("express");
<<<<<<< HEAD
const firebase = require("firebase-admin");
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
require('dotenv').config();
=======
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const AuthRoutes = require("./auth.js");
const DataRoutes = require("./routes.js");
>>>>>>> 6087d8cc1e8e209d9e77834e37db0d2cc1669e64

const port = process.env.PORT || 3001;
const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 3001;



app.use(cookieParser());
=======
>>>>>>> 6087d8cc1e8e209d9e77834e37db0d2cc1669e64
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));
app.set('trust proxy', 'loopback');
app.use(compression());
app.use(express.json({ limit: '5mb' }));

<<<<<<< HEAD
app.use(xss());

// CORS setup
const corsOptions = {
  origin: function(origin, callback) {
    callback(null, origin || '*');
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again after 15 minutes'
});

app.use(limiter);
app.use('/auth/login', limiter);

app.use(morgan('combined'));

// Firebase initialization
const firebaseServiceAccount = require('./donations.json');

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseServiceAccount),
  databaseURL: "https://donations-da524-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// Routes
const authRouter = require('./routes/auth');
const users = require('./routes/users');

app.use('/auth', authRouter);
app.use('/users', users);


http.createServer(app).listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
=======
mongoose
  .connect(
    // `mongodb+srv://jxdAdmin:${process.env.PASSWORD}@jenighdb.oope8gi.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority&appName=jenighDB`
    "mongodb://localhost:27017/"
  )
  .then(() => {
    console.log("conected to database");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));

// authentication route
app.use("/auth", AuthRoutes);
app.use("/api", DataRoutes);
>>>>>>> 6087d8cc1e8e209d9e77834e37db0d2cc1669e64
