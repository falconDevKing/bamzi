import Mongoose from 'mongoose'
const Schema = Mongoose.Schema
const ObjectID = Mongoose.Schema.Types.ObjectId

const saleSchema = new Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: 'User',
    },
    order: {
      type: ObjectID,
      required: true,
      ref: 'Order',
    },
    buyer: {
      type: ObjectID,
      required: true,
      ref: 'User',
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
      default: 'Delivered',
    },
  },
  { timestamps: true }
)

const Sale = Mongoose.models.Sale || Mongoose.model('Sale', saleSchema)
export default Sale
