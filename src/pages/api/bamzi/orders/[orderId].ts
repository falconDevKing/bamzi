import { NextApiRequest, NextApiResponse } from 'next'
import Order from 'models/Order'
import Product from 'models/Product'
import User from 'models/User'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import { useRouter } from 'next/router'

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
  const { orderId } = router.query

  if (req.method === 'GET') {
    try {
      const response = await Order.findById(orderId)
        .populate('user', 'name')
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: 'name price sizes colors',
          },
        })

      const successResponse = Success(200, response, 'Order Data Found!')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching order')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }

  if (req.method === 'PUT') {
    try {
      let updatedData = {
        status: req.body.status,
      }

      const response = await Order.findByIdAndUpdate(orderId, {
        $set: updatedData,
      })

      const successResponse = Success(
        201,
        response,
        'Order updated successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating order')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
