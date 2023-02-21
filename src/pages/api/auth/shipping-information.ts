import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
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
  const { email, shippingAddress } = req.body

  if (req.method === 'POST') {
    try {
      await ConnectMongo()

      const existingUser = await User.findOne({ email: email }).exec()

      if (!existingUser) {
        const errorResponse = error(500, {}, 'No user found!')
        await CloseConnection()
        return res.status(errorResponse.status).json(errorResponse)
      }

      existingUser.shippingAddress = shippingAddress

      const updatedUser = await existingUser.save()

      const successResponse = Success(
        202,
        updatedUser,
        'User details updated successfully!'
      )
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating shipping info ')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
