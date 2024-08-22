const http = require("http");
const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const cors = require("cors");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");

const port = process.env.PORT || 3001;
const app = express();

const AuthRoutes = require("./routes/auth");
const UsersRoutes = require("./routes/users");
const DonationsRoutes = require("./routes/donations");

app.use(cookieParser());

// CORS setup
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, origin || "*");
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(helmet());
app.use(hpp());
app.use(
  helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true })
);
app.set("trust proxy", "loopback");
app.use(compression());
app.use(express.json({ limit: "5mb" }));
app.use(xss());
app.use(morgan("combined"));

// Set CORP header
app.use((req, res, next) => {
  res.header("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again after 15 minutes",
});

app.use(limiter);
app.use("/auth/login", limiter);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/auth", AuthRoutes);
app.use("/users", UsersRoutes);
app.use("/donations", DonationsRoutes);

let currentUser = "";

app.post("/current", (req, res) => {
  console.log(req.body);
});

// app.get("/currentUser", (req, res) => {
//   res.status(200).json({ message: currentUser });
// });

http.createServer(app).listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
