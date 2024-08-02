const http = require("http");
const express = require("express");
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

const app = express();
const port = process.env.PORT || 3001;



app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true }));
app.set('trust proxy', 'loopback');
app.use(compression());
app.use(express.json({ limit: '5mb' }));

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