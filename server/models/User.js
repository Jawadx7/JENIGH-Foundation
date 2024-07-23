const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username cannot be blank"],
    },
    email: {
      type: String,
      required: [true, "email cannot be blank"],
    },
    password: {
      type: String,
      required: [true, "password cannot be blank"],
    },
    confirmPassword: {
      type: String,
      required: [true, "password cannot be blank"],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
