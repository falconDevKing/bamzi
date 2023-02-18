import { NextApiRequest, NextApiResponse } from 'next'
import Wishlist from 'models/Wishlist'
import Product from 'models/Product'
import User from 'models/User'
import Order from 'models/Order'

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

      const productList = req.body.products.filter(async (e: any) => {
        return await Product.findById(e.productId)
      })

      let newOrder = new Order({
        user: req.body.userId,
        products: productList,
        amount: req.body.amount,
        delivery: req.body.delivery,
        paymentMethod: req.body.paymentMethod,
      })

      const response = await newOrder.save()

      const successResponse = Success(
        201,
        response,
        'Order added successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error adding order')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
