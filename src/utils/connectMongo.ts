import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_URL as string

const connectMongo = async () => mongoose.connect(mongoUrl)

export default connectMongo
