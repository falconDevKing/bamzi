import Mongoose from 'mongoose'

const Schema = Mongoose.Schema
const ObjectID = Mongoose.Schema.Types.ObjectId

const customizeSchema = new Schema(
  {
    user: {
      type: ObjectID,
      required: true,
      ref: 'User',
    },
    storeName: {
      type: String,
      trim: true,
      required: true,
    },
    storeDescription: {
      type: String,
      trim: true,
      required: true,
    },
    storeAddress: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    businessContact: {
      type: String,
      trim: true,
      required: true,
    },
    uploadLogo: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Customize =
  Mongoose.models.Customize || Mongoose.model('Customize', customizeSchema)

export default Customize
