import { NextApiRequest, NextApiResponse } from 'next'
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
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email: email })

      if (!user) {
        const errorResponse = error(400, {}, 'No user found!')
        return res.status(errorResponse.status).json(errorResponse)
      }

      const result = await bcrypt.compare(password, user.password)

      if (!result) {
        const errorResponse = error(401, {}, 'Incorrect credentials!')
        return res.status(errorResponse.status).json(errorResponse)
      }

      let token = jwt.sign({ email: user.email }, 'secretValue', {
        expiresIn: '2h',
      })
      let refreshtoken = jwt.sign({ email: user.email }, 'refreshsecretValue', {
        expiresIn: '8h',
      })

      const successResponse = Success(
        200,
        {
          token,
          refreshtoken,
          seller: user.seller,
        },
        'Login successful!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error login in')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
