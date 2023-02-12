const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = mongoose.Schema.Types.ObjectId;

const customizeSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    storeName: {
      type: String,
      trim: true,
      required: true,
    },
    storeDescription: {
      type: String,
      trim: true,
      required: true,
    },
    storeAddress: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    businessContact: {
      type: String,
      trim: true,
      required: true,
    },
    uploadLogo: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

const Customize = mongoose.model("Customize", customizeSchema)
module.exports = Customize
