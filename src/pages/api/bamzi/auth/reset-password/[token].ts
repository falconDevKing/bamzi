import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'

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
  const router = useRouter()
  const { token } = router.query

  if (req.method === 'GET') {
    try {
      const response = await User.findOne({ resetLink: token })

      const successResponse = Success(200, response, 'Token fetch successful!')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error: Invalid or expired token')
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
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating password')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
