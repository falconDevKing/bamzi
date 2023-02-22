import Mongoose from 'mongoose'

const Schema = Mongoose.Schema

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Reservation =
  Mongoose.models.Reservation ||
  Mongoose.model('Reservation', reservationSchema)

export default Reservation
