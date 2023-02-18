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
  if (req.method === 'PUT') {
    try {
      const {
        name,
        description,
        category,
        subCategory,
        brand,
        images,
        price,
        colors,
        ram,
        sizes,
        length,
        texture,
        stock,
        productID,
      } = req.body

      let updatedData = {
        name: name,
        description: description,
        category: category,
        subCategory: subCategory,
        brand: brand,
        images: images,
        price: price,
        colors: colors,
        ram: ram,
        sizes: sizes,
        length: length,
        texture: texture,
        stock: stock,
      }

      const updatedProduct = await Product.findByIdAndUpdate(productID, {
        $set: updatedData,
      })

      const successResponse = Success(
        200,
        updatedProduct,
        'Product updated successfully!'
      )
      return res.status(successResponse.status).json(successResponse)
    } catch (err) {
      const errorResponse = error(500, err, 'Error updating product')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
