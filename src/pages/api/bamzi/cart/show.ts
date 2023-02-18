import { NextApiRequest, NextApiResponse } from 'next'
import Wishlist from 'models/Wishlist'
import Product from 'models/Product'
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
      let wishlistId = req.body.wishlistId
      const response = await Wishlist.findById(wishlistId)
        .populate('user', 'name')
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: 'name price',
          },
        })

      const successResponse = Success(201, response, 'Wishlist Data Found!')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching wishlist')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
