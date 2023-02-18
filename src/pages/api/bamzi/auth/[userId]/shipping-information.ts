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
  const { userId } = router.query

  const { name, phoneNumber, shippingAddress } = req.body

  if (req.method === 'PUT') {
    try {
      let updatedData = {
        name: name,
        phoneNumber: phoneNumber,
        shippingAddress: shippingAddress,
      }

      const shippingInfo = await User.findByIdAndUpdate(userId, {
        $set: updatedData,
      })

      const successResponse = Success(
        200,
        shippingInfo,
        'Shipping Information stored successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating shipping info ')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
