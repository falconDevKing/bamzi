import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import { ConnectMongo, CloseConnection } from 'utils/connectMongo'

type userData = {
  id?: string | null
  name?: string | null
  email?: string | null
  image?: string | null
}

export default async function SaveOAuth(userData: userData, provider: string) {
  try {
    const { name, email, image } = userData

    await ConnectMongo()

    const existingUser = await User.findOne({ email: email }).exec()
    console.log('exisiting user', existingUser)

    let updatedOAuth

    if (!existingUser) {
      console.log('newUserPath')
      let user = new User({
        name: name,
        email: email,
        image: image,
        provider: [provider],
      })
      updatedOAuth = await user.save()
    }

    if (existingUser) {
      const newProvider = !existingUser.provider.includes(provider)
      console.log('newProvider', newProvider)

      const data = {
        image: image,
        provider: [...existingUser.provider, provider],
      }

      newProvider && console.log('newUserPath')
      updatedOAuth =
        newProvider &&
        (await User.findByIdAndUpdate(existingUser._id, {
          $set: data,
        }))
    }

    const successResponse = Success(
      201,
      updatedOAuth,
      'User saved successfully!'
    )
    await CloseConnection()
    return successResponse
  } catch (err) {
    const errorResponse = error(500, err, 'Error saving user')
    return errorResponse
  }
}
