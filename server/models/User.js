const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'Username cannot be blank'],
    },
    email: {
      type: String,
      required: [true, 'Email cannot be blank'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password cannot be blank'],
    },
    bio: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);


const UserModel = mongoose.model('User', UserSchema);


module.exports = UserModel;
