import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
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

      const deletedUser = await User.findOneAndDelete({ email: email }).exec()

      if (!deletedUser) {
        const errorResponse = error(500, {}, 'No user found!')
        await CloseConnection()
        return res.status(errorResponse.status).json(errorResponse)
      }

      const successResponse = Success(
        202,
        deletedUser,
        'User deleted successfully!'
      )
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error deleting user')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
