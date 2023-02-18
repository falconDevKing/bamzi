import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { tokenCreator, verifier } from 'utils/auth'
import { Success, error } from 'utils/response'

const accessSecret = process.env.ACCESS_TOKEN_SECRET as string
const refreshSecret = process.env.REFRESH_TOKEN_SECRET as string

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
    const { refreshToken, userData } = req.body
    const authHeader = req.headers['authorization']
    try {
      const token = authHeader && authHeader.split(' ')[1]

      if (!token) {
        const errorResponse = error(401, { auth: false }, 'Token not sent')
        return res.status(errorResponse.status).json(errorResponse)
      }

      //verify access token
      const { err, decoded } = verifier(token, accessSecret)

      if (decoded) {
        //send success response
        const successResponse = Success(
          200,
          {
            auth: true,
            accessToken: token,
            refreshToken,
          },
          'Access token valid'
        )
        return res.status(successResponse.status).json(successResponse)
      } else {
        // verify refreshToken
        const { err: errorRefresh, decoded: userRefresh } = verifier(
          refreshToken,
          refreshSecret
        )

        if (errorRefresh) {
          //send error response
          const errorResponse = error(
            401,
            {
              auth: false,
            },
            'User Unauthenticated'
          )
          return res.status(errorResponse.status).json(errorResponse)
        } else {
          //generate new access token and send
          const accessToken = tokenCreator(userData, accessSecret, 3600)
          const successResponse = Success(
            200,
            {
              auth: true,
              accessToken,
              refreshToken,
            },
            'New token generated'
          )
          return res.status(successResponse.status).json(successResponse)
        }
      }
    } catch (err: any) {
      const errorResponse = error(
        err.status_code ?? 500,
        {
          auth: false,
          error: err,
        },
        'User Verification failed'
      )
      return res.status(errorResponse.status).json(errorResponse)
    }
  }
}
