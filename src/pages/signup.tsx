import React, { FormEvent, MouseEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import AuthStrip from '../components/auth/AuthStrip'
import AuthCart from '../components/auth/AuthCart'
import AuthBody from '../components/auth/AuthBody'
import AuthContent from '../components/auth/AuthContent'
import AuthContainer from '../components/auth/AuthContainer'
import Header from '../components/header'
import axios from 'axios'
import ErrorHandler from 'utils/ErrorHandler'
import SuccessHandler from 'utils/SuccessHandler'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Signup() {
  const url = 'http://localhost:4000/bamzi/signup'
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const signupResponse = await axios.post('api/auth/signup', {
        name,
        email,
        password,
      })
      if (signupResponse) {
        SuccessHandler({ message: 'Sign Up Successful' })
      }
      console.log(signupResponse)

      router.push('/my-account')
    } catch (error: any) {
      ErrorHandler({ message: error.message ?? 'Error Signin Up' })
      console.log('signup error', error)
    } finally {
      setName('')
      setEmail('')
      setPassword('')
    }
  }

  const loginGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const googleResponse = await signIn('google', {
      callbackUrl: 'http://localhost:3000/my-account',
    })
    console.log('googleResponse', googleResponse)
  }

  const loginFacebook = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const facebookResponse = await signIn('facebook', {
      callbackUrl: 'http://localhost:3000/my-account',
    })
    console.log('googleResponse', facebookResponse)
  }

  return (
    <AuthContainer>
      <Header bg />

      <AuthBody>
        <AuthStrip />

        <AuthContent>
          <div className="mb-1 flex items-center lg:-mt-16">
            <Link href="/login" className="w-1/2 p-0">
              <button className="w-full rounded-l-lg bg-gray-200 py-2 font-semibold">
                Sign In
              </button>
            </Link>
            <Link href="/signup" className="w-1/2 p-0">
              <button className="w-full rounded-lg bg-secondary py-3 font-semibold shadow-sm">
                Sign Up
              </button>
            </Link>
          </div>

          <button
            className="flex items-center justify-center space-x-3 rounded-lg border border-gray-100 bg-white py-2 text-white shadow-md"
            onClick={(e) => loginGoogle(e)}
          >
            <FcGoogle size={24} />
            <span className="font-semibold text-black">
              Sign Up with Google
            </span>
          </button>
          <button
            className="flex items-center justify-center space-x-3 rounded-lg bg-facebook py-2 text-white shadow-md"
            onClick={(e) => loginFacebook(e)}
          >
            <FaFacebookSquare size={24} />
            <span className="font-semibold">Sign Up with Facebook</span>
          </button>
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              autoComplete="off"
              placeholder="Full Name"
              className="rounded-full border border-gray-100 py-2 px-6 shadow-md"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="email"
              value={email}
              autoComplete="off"
              placeholder="Email Address"
              className="rounded-full border border-gray-100 py-2 px-6 shadow-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              className="rounded-full border border-gray-100 py-2 px-6 shadow-md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="rounded-lg bg-primary py-2 font-semibold text-white shadow-md"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
