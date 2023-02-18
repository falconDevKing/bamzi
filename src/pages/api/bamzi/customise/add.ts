import { NextApiRequest, NextApiResponse } from 'next'
import Wishlist from 'models/Wishlist'
import Customize from 'models/Customize'
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
      const user = await User.findById(req.body.user)

      if (!user) {
        const errorResponse = error(500, {}, 'User doesnt exist')
        return res.status(errorResponse.status).json(errorResponse)
      }

      const customize = await Customize.findOne({ user: req.body.user })

      if (customize) {
        let updateCustomize = {
          user: req.body.user,
          storeName: req.body.storeName,
          storeDescription: req.body.storeDescription,
          storeAddress: req.body.storeAddress,
          country: req.body.country,
          state: req.body.state,
          businessContact: req.body.businessContact,
          uploadLogo: req.body.uploadLogo,
          backgroundImage: req.body.backgroundImage,
        }
        const response = await Customize.findByIdAndUpdate(
          customize._id,
          updateCustomize
        )

        const successResponse = Success(
          201,
          response,
          'Shop updated successfully!'
        )
        return res.status(successResponse.status).json(successResponse)
      } else {
        let newCustomize = new Customize({
          user: req.body.user,
          storeName: req.body.storeName,
          storeDescription: req.body.storeDescription,
          storeAddress: req.body.storeAddress,
          country: req.body.country,
          state: req.body.state,
          businessContact: req.body.businessContact,
          uploadLogo: req.body.uploadLogo,
          backgroundImage: req.body.backgroundImage,
        })

        const response = await newCustomize.save()

        const successResponse = Success(
          201,
          response,
          'Shop details created successfully!'
        )
        return res.status(successResponse.status).json(successResponse)
      }
    } catch (err) {
      const errorResponse = error(500, err, 'Error adding customize')
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
