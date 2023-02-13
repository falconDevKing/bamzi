import Mongoose from 'mongoose'

const Schema = Mongoose.Schema
const ObjectID = Mongoose.Schema.Types.ObjectId

const cartSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: 'User',
    },
    products: [
      {
        type: String,
        required: true,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
)

const Cart = Mongoose.model('Cart', cartSchema)

export default Cart
