const express = require("express");
const cors = require("cors");
const UserModel = require("./models/User");
const DonationModel = require("./models/donation");
const app = express();

app.use(cors());
app.use(express.json());
const router = express.Router();

// add donation
router.post("/donations/new", (req, res) => {
  const newDonation = req.body;
  DonationModel.create(newDonation)
    .then((result) => res.status(200).json({ message: "donation added" }))
    .catch((error) => res.status(400).json({ message: "donation not added" }));
});

// get all donation
router.get("/donations", async (req, res) => {
  try {
    const donations = await DonationModel.find({});
    res.status(200).send(donations);
  } catch (error) {
    res.send(error);
  }
});

// get all users
router.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).send(users);
  } catch (error) {
    res.send(error);
  }
});

// get single donation
router.get("/donations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await DonationModel.findById(id);
    res.status(200).send(donation);
  } catch (error) {
    res.send(error);
  }
});

// update donation
router.put("/donations/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await DonationModel.findByIdAndUpdate(id, req.body);
    if (!donation) {
      return res.status(404).json({ message: "Donation  not found" });
    } else {
      const updatedDonation = await DonationModel.findById(id);
      res.status(200).json(updatedDonation);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update user
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

// get and store current user
// let currentUser;

// app.post("/api/loggedin", (req, res) => {
//   try {
//     currentUser = req.body;
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.get("/api/currentUser", async (req, res) => {
//   try {
//     const { email } = currentUser;
//     try {
//       const currentUser = await UserModel.findOne({ email });

//       if (!currentUser) {
//         res.send("current user not found");
//       } else {
//         res.json([currentUser]);
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
