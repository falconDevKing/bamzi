const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = mongoose.Schema.Types.ObjectId

const productIdSchema = new Schema({
  productId: {
    type: ObjectID,
    required: true,
    ref: "Product",
  },
})

const wishListSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    products: [String],
  },
  { timestamps: true }
)

const Wishlist = mongoose.model("Wishlist", wishListSchema)
module.exports = Wishlist
