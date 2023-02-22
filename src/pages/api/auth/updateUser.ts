import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { ConnectMongo, CloseConnection } from 'utils/connectMongo'
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
  if (req.method === 'PUT') {
    try {
      const { name, phoneNumber, dob, gender, email } = req.body

      await ConnectMongo()

      const existingUser = await User.findOne({ email: email }).exec()

      if (!existingUser) {
        const errorResponse = error(500, {}, 'No user found!')
        await CloseConnection()
        return res.status(errorResponse.status).json(errorResponse)
      }

      existingUser.name = name
      existingUser.phoneNumber = phoneNumber
      existingUser.dob = dob
      existingUser.gender = gender

      const updatedUser = await existingUser.save()

      const successResponse = Success(
        202,
        updatedUser,
        'User details updated successfully!'
      )
      await CloseConnection()
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      console.log('updateUser err', err)
      const errorResponse = error(500, err, 'Error updating user ')
      await CloseConnection()
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
