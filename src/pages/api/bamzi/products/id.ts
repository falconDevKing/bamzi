import { NextApiRequest, NextApiResponse } from 'next'
import Product from 'models/Product'
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
      const productID = req.body.productId

      const response = await Product.findById(productID)

      const successResponse = Success(
        200,
        response,
        'Product fetched successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching product')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
