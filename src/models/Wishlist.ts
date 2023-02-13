import Mongoose from 'mongoose'
const Schema = Mongoose.Schema
const ObjectID = Mongoose.Schema.Types.ObjectId

const productIdSchema = new Schema({
  productId: {
    type: ObjectID,
    required: true,
    ref: 'Product',
  },
})

const wishListSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: 'User',
    },
    products: [String],
  },
  { timestamps: true }
)

const Wishlist = Mongoose.model('Wishlist', wishListSchema)

export default Wishlist
