import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

const selpSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    topics: [String],
  },
  { timestamps: true }
)

const Selp = Mongoose.models.Selp || Mongoose.model('Selp', selpSchema)

export default Selp
