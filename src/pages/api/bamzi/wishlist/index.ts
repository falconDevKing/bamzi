import { NextApiRequest, NextApiResponse } from 'next'
import Wishlist from 'models/Wishlist'
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
      const response = await Wishlist.find()
        .populate('user', 'name')
        .populate({
          path: 'products',
          populate: {
            path: 'productId',
            select: 'name price',
          },
        })

      console.log(response)
      const productArray = []
      const { products } = response[0]
      for (const element of products) {
        const prod = await Product.findById(element, {
          name: 1,
          images: 1,
          price: 1,
        })
        productArray.push(prod)
      }
      console.log('pa', productArray)

      const successResponse = Success(
        200,
        productArray,
        'Wishlist Products fetched successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error fetching products')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
