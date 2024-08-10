const express = require("express");
const router = express.Router();
const DonationModel = require("../models/donation");
// const jwt = require("jsonwebtoken");
// const secretKey = "Donations2024?????";

// get all donations
router.get("/", async (req, res) => {
  try {
    const donations = await DonationModel.find({});
    return res.status(200).send(donations);
  } catch (error) {
    return res.send(error);
  }
});

// get one donations
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await DonationModel.findById(id);
    return res.status(200).send(donation);
  } catch (error) {
    return res.send(error);
  }
});

// add new donation
router.post("/new", async (req, res) => {
  try {
    const donation = await DonationModel.create(req.body);
    if (donation) {
      return res.status(200).json({ message: "donationcreated" });
    }
    res.json({ message: "donation not created" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "could not send new donation to database" });
  }
});

// // update donation
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await DonationModel.findByIdAndUpdate(id, req.body);
    if (!donation) {
      return res.status(404).json({ message: "Donation  not found" });
    } else {
      const updatedDonation = await DonationModel.findById(id);
      return res.status(200).json(updatedDonation);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// delete donation
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const donation = await DonationModel.findByIdAndDelete(id);

  if (!donation) {
    return res.status(404).json({ message: "Donation Not Found" });
  }
  return res.status(200).json({ message: "Donation Deleted" });
});

module.exports = router;
