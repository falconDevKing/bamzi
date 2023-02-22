import { NextApiRequest, NextApiResponse } from 'next'
import User from 'models/User'
import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
import sgMail from '@sendgrid/mail'
import { error, Success } from 'utils/response'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { ConnectMongo, CloseConnection } from 'utils/connectMongo'
import { useSession, signIn, signOut } from 'next-auth/react'
import jwt from 'next-auth/jwt'
import SaveOAuth from 'utils/saveOAuth'

const accessSecret = process.env.ACCESS_TOKEN_SECRET as string
const refreshSecret = process.env.REFRESH_TOKEN_SECRET as string
const googleClientId = process.env.GOOGLE_CLIENT_ID as string
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string
const facebookClientId = process.env.FACEBOOK_CLIENT_ID as string
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET as string

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 4 * 60 * 60,
  },
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    FacebookProvider({
      clientId: facebookClientId,
      clientSecret: facebookClientSecret,
    }),
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
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('user', user)
      console.log('account', account)
      console.log('profile', profile)
      console.log('isNewUser', isNewUser)
      console.log('token', token)

      if (user && account?.provider) {
        console.log('save called')
        const savedOAuth = await SaveOAuth(user, account?.provider)
        console.log('save done', savedOAuth)
      }
      return token
    },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   console.log('ssession', session)
    //   console.log('stoken', token)
    //   console.log('suser', user)
    // },
  },
}

export default NextAuth(authOptions)
