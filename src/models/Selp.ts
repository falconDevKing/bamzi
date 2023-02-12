const mongoose = require("mongoose")
const Schema = mongoose.Schema

const selpSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    topics: [String],
  },
  { timestamps: true }
)

const Selp = mongoose.model("Selp", selpSchema)
module.exports = Selp
