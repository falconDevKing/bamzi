import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

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
      const session = await getServerSession(req, res, authOptions)
      if (!session) {
        const errorResponse = error(401, {}, 'Unauthenticated User')
        return res.status(errorResponse.status).json(errorResponse)
      }

      let userID = req.body.userID
      const deletedUser = await User.findByIdAndRemove(userID)

      const successResponse = Success(
        201,
        deletedUser,
        'User deleted successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error deleting user')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
