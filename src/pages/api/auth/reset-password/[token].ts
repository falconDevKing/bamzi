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
  const { token } = req.query
  await ConnectMongo()

  if (req.method === 'GET') {
    try {
      const response = await User.findOne({ resetLink: token })

      if (!response) {
        throw new Error('Invalid token')
      }

      const successResponse = Success(200, response, 'Token fetch successful!')
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error: Invalid or expired token')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }

  if (req.method === 'PUT') {
    try {
      const hashedPass = await bcrypt.hash(req.body.password, 12)

      const updatedData = await User.findOneAndUpdate(
        { resetLink: token },
        { password: hashedPass }
      )

      const successResponse = Success(
        201,
        updatedData,
        'User password updated successfully!'
      )
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating password')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
