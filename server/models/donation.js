const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cause: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    raised: {
      type: Number,
    },
    beneficiaries: [
      {
        type: String,
        required: true,
      },
    ],
    closing: {
      type: Date,
    },
    bannerImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DonationModel = mongoose.model("donation", DonationSchema);
module.exports = DonationModel;
