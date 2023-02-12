const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 64,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
    },
    dob: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    seller: {
      type: Boolean,
      default: false,
    },
    resetLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User
