const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const AuthRoutes = require("./auth.js");
const DataRoutes = require("./routes.js");

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

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
