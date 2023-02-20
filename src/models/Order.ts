import Mongoose from 'mongoose'

const Schema = Mongoose.Schema
const ObjectID = Mongoose.Schema.Types.ObjectId

const orderSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: 'User',
    },
    products: [
      {
        productId: {
          type: ObjectID,
          required: true,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
    },
    delivery: {
      deliveryOption: {
        type: String,
        trim: true,
      },
      shippingAddress: {
        type: String,
        trim: true,
      },
    },
    paymentMethod: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: 'Pending',
    },
  },
  { timestamps: true }
)

const Order = Mongoose.models.Order || Mongoose.model('Order', orderSchema)
export default Order
