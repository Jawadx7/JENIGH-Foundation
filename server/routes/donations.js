const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = "Donations2024?????";

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await DonationModel.findById(id);
    res.status(200).send(donation);
  } catch (error) {
    res.send(error);
  }
});

// update donation
router.put("/update/:id", async (req, res) => {
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

// add new donation
router.post("/new", async (req, res) => {
  try {
    console.log(req.body);
    // DonationModel.create(req.body)
    //   .then(() => {
    //     res.status(200).json({ message: "donation added to database" });
    //   })
    //   .catch(() => {
    //     res.status(400).json({ message: "donation not added" });
    //   });
  } catch (error) {
    res
      .status(500)
      .json({ message: "could not send new donation to database" });
  }
});

// get all donation
router.get("/", async (req, res) => {
  try {
    const donations = await DonationModel.find({});
    res.status(200).send(donations);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
