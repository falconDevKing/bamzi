import { NextApiRequest, NextApiResponse } from 'next'
import Wishlist from 'models/Wishlist'
import Product from 'models/Product'
import User from 'models/User'
import Cart from 'models/Cart'
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
      let cartId = req.body.cartId
      const response = await Cart.findById(cartId)
        .populate('user', 'name')
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: 'name price sizes colors',
          },
        })

      const successResponse = Success(201, response, 'Cart Data Found!')
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Cart not found')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
