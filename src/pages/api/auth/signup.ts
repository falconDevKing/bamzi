import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import { ConnectMongo, CloseConnection } from 'utils/connectMongo'

type Data = {
  status: number
  message: string
  data?: any
  error?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body

      await ConnectMongo()

      const existingUser = await User.findOne({ email: email }).exec()
      console.log('exisiting user', existingUser)

      if (existingUser) {
        const errorResponse = error(422, existingUser, 'User Exsits')
        await CloseConnection()
        return res.status(errorResponse.status).json(errorResponse)
      }

      const hashedPass = await bcrypt.hash(password, 12)

      let user = new User({
        name: name,
        email: email,
        password: hashedPass,
      })
      const newUser = await user.save()

      const successResponse = Success(201, newUser, 'User added successfully!')
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error creating user')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
