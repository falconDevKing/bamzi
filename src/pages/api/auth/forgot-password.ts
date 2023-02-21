import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import { CloseConnection, ConnectMongo } from 'utils/connectMongo'

type Data = {
  status: number
  message: string
  data?: any
  error?: any
}

const RESET_TOKEN_SECRET = process.env.RESET_TOKEN_SECRET as string
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string
const CLIENT_URL = process.env.CLIENT_URL as string
const FROM_EMAIL = process.env.FROM_EMAIL as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      let email = req.body.email

      await ConnectMongo()

      const user = await User.findOne({ email: email })
      if (!user) {
        throw new Error('User doesnt exist')
      }

      let resetToken = jwt.sign({ email: user.email }, RESET_TOKEN_SECRET, {
        expiresIn: '1h',
      })

      sgMail.setApiKey(SENDGRID_API_KEY)
      const link = `${CLIENT_URL}/reset-password/${resetToken}`
      const message = {
        to: user.email,
        from: FROM_EMAIL,
        subject: 'Password Reset',
        html: `
                    <h2>Dear ${user.name}</h2>
                    <p>Please click on the following <a href=${link}>link</a> to reset your password.</p>
                    <br />
                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
                `,
      }

      const success = await user.updateOne({ resetLink: resetToken })
      const result = await sgMail.send(message)

      const successResponse = Success(
        200,
        result,
        `A reset mail has been sent to ${user.email}`
      )
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err: any) {
      const errorResponse = error(
        500,
        err,
        err?.message ?? 'Error in forgot Password'
      )
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
