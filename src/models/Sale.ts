const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = mongoose.Schema.Types.ObjectId

const saleSchema = new Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    order: {
      type: ObjectID,
      required: true,
      ref: "Order",
    },
    buyer: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    order: {
      type: ObjectID,
      required: true,
      ref: "Order",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      trim: true,
      default: "Delivered",
    },
  },
  { timestamps: true }
)

const Sale = mongoose.model("Sale", saleSchema)
module.exports = Sale
