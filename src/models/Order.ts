const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = mongoose.Schema.Types.ObjectId

const orderSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: ObjectID,
          required: true,
          ref: "Product",
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
      default: "Pending",
    },
  },
  { timestamps: true }
)

const Order = mongoose.model("Order", orderSchema)
module.exports = Order
