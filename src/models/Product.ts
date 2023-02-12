const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
    },
    subCategory: {
      type: String,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      default: undefined,
    },
    price: {
      type: Number,
    },
    colors: {
      type: [String],
      default: undefined,
    },
    sizes: {
      type: [String],
      default: undefined,
    },
    length: {
      type: String,
      trim: true,
    },
    texture: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product
