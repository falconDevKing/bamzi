import Mongoose from 'mongoose'

const Schema = Mongoose.Schema

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

const Product =
  Mongoose.models.Product || Mongoose.model('Product', productSchema)

export default Product
