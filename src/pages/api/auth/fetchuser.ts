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
      const { email } = req.body

      await ConnectMongo()
      const existingUser = await User.findOne({ email: email }).exec()
      console.log('fetchUser existing', existingUser)

      if (!existingUser) {
        const errorResponse = error(500, {}, 'No user found!')
        return res.status(errorResponse.status).json(errorResponse)
      }

      const successResponse = Success(
        200,
        existingUser,
        'User fetched successfully!'
      )
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      console.log('Error fetching user', err)
      const errorResponse = error(500, err, 'Error fetching user')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
