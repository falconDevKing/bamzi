import { NextApiRequest, NextApiResponse } from 'next'
import Sale from 'models/Sale'
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
  const { saleId } = router.query

  if (req.method === 'GET') {
    try {
      const response = await Sale.findById(saleId).populate('product', 'name')

      const successResponse = Success(200, response, 'Sale Data Found!')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching sale')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }

  if (req.method === 'PUT') {
    try {
      let updatedData = {
        status: req.body.status,
      }

      const response = await Sale.findByIdAndUpdate(saleId, {
        $set: updatedData,
      })

      const successResponse = Success(
        201,
        response,
        'Sale updated successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating sale')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
