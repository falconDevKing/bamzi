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
      const user = await User.findById(req.body.user)

      if (!user) {
        const errorResponse = error(500, {}, 'No user found')
        return res.status(errorResponse.status).json(errorResponse)
      }

      const cart = await Cart.findOne({ user: req.body.user })

      if (!cart) {
        const errorResponse = error(500, {}, 'No cart found')
        return res.status(errorResponse.status).json(errorResponse)
      }

      const response = await Cart.findByIdAndUpdate(cart._id, {
        products: [],
      })

      const successResponse = Success(
        201,
        response,
        'Cart Deleted Successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching cart')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
