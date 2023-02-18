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
      const { name, email, password } = req.body

      const hashedPass = await bcrypt.hash(password, 12)

      let user = new User({
        name: name,
        email: email,
        password: hashedPass,
      })

      const newUser = await user.save()

      const successResponse = Success(201, newUser, 'User added successfully!')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error creating user')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
