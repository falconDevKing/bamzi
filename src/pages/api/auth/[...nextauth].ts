import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials'
import { ConnectMongo, CloseConnection } from 'utils/connectMongo'

const accessSecret = process.env.ACCESS_TOKEN_SECRET as string
const refreshSecret = process.env.REFRESH_TOKEN_SECRET as string

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 4 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'sample@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email as string
        const password = credentials?.password as string

        await ConnectMongo()

        const user = await User.findOne({ email: email })

        if (!user) {
          await CloseConnection()
          throw new Error('No user found!')
        }

        const result = await bcrypt.compare(password, user.password)

        if (!result) {
          await CloseConnection()
          throw new Error('Incorrect credentials!')
        }

        const userData = {
          id: user._id,
          email: email,
          name: user.name,
          seller: user.seller,
        }

        await CloseConnection()
        return { ...userData }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/404', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
})
