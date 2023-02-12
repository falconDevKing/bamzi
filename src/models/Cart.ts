const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    products: [
      {
        type: String,
        required: true,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
)

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart
