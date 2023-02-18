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
  if (req.method === 'GET') {
    try {
      const response = await Product.find()

      const successResponse = Success(
        200,
        response,
        'Products fetched successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching products')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
