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
      console.log('req.body', req.body)

      const user = await User.findById(req.body.user)

      if (!user) {
        const errorResponse = error(500, {}, 'User doesnt exist')
        return res.status(errorResponse.status).json(errorResponse)
      }

      const wishlist = await Wishlist.findOne({ user: req.body.user })

      if (wishlist) {
        const response = await Wishlist.findByIdAndUpdate(wishlist._id, {
          $addToSet: { products: req.body.productId },
        })

        const successResponse = Success(
          201,
          response,
          'Wishlist updated successfully!'
        )
        return res.status(successResponse.status).json(successResponse)
      } else {
        let newWishlist = new Wishlist({
          user: req.body.user,
          products: [req.body.productId],
        })

        const response = await newWishlist.save()

        const successResponse = Success(
          201,
          response,
          'Wishlist Products added successfully!'
        )
        return res.status(successResponse.status).json(successResponse)
      }
    } catch (err) {
      const errorResponse = error(500, err, 'Error adding wishlist')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
