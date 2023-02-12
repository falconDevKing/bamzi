const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Reservation = mongoose.model("Reservation", reservationSchema)
module.exports = Reservation
