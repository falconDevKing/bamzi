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
      const { email, oldPassword, newPassword } = req.body

      await ConnectMongo()
      console.log('chane called', { email, oldPassword, newPassword })

      const existingUser = await User.findOne({ email: email }).exec()
      console.log('exisiting user', existingUser)

      if (!existingUser) {
        const errorResponse = error(422, existingUser, 'User not found')
        await CloseConnection()
        return res.status(errorResponse.status).json(errorResponse)
      }

      if (!oldPassword && existingUser.password) {
        const errorResponse = error(
          422,
          existingUser,
          'You have an existing password'
        )
        await CloseConnection()
        return res.status(errorResponse.status).json(errorResponse)
      }

      if (oldPassword) {
        const correctOldPassword = await bcrypt.compare(
          oldPassword,
          existingUser.password
        )

        if (!correctOldPassword) {
          const errorResponse = error(
            422,
            existingUser,
            'Incorrect credentials'
          )
          await CloseConnection()
          return res.status(errorResponse.status).json(errorResponse)
        }
      }

      console.log('chane about')
      const hashedPass = await bcrypt.hash(newPassword, 12)
      const updatedUser = await existingUser.updateOne({ password: hashedPass })

      const successResponse = Success(
        202,
        updatedUser,
        'Password Updated successfully!'
      )
      await CloseConnection()
      console.log('chane done')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error creating user')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
