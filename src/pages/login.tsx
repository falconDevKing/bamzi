import React, { FormEvent, MouseEvent, useState } from 'react'
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
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useFormik } from 'formik'
import SignInValidation from 'utils/validation/signin'
import ErrorHandler from 'utils/ErrorHandler'
import SuccessHandler from 'utils/SuccessHandler'
import Input from 'components/Input'

export default function Login() {
  const router = useRouter()

  const initialValues = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignInValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { email, password } = values
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })
        console.log('logn res', result)

        SuccessHandler({ message: 'Log In Successful' })

        if (result?.ok && (!result?.url || result.url.includes('login'))) {
          resetForm()
          router.push('/sellers-store')
        }
      } catch (error: any) {
        ErrorHandler({ message: error.message ?? 'Error Signin Up' })
        console.log('signup error', error)
      }
    },
  })

  const loginGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const googleResponse = await signIn('google')
    console.log('googleResponse', googleResponse)
    if (!googleResponse?.url || googleResponse?.url.includes('login')) {
      router.push('/sellers-store')
    }
  }

  const loginFacebook = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const facebookResponse = await signIn('facebook')
    console.log('googleResponse', facebookResponse)
    if (!facebookResponse?.url || !facebookResponse?.url.includes('login')) {
      router.push('/sellers-store')
    }
  }

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    formik

  return (
    <AuthContainer>
      <Header bg />

      <AuthBody>
        <AuthStrip />

        <AuthContent>
          <div className="mb-1 flex items-center lg:-mt-16">
            <Link href="/login" className="w-1/2 p-0">
              <button className="w-full rounded-lg bg-secondary py-3 font-semibold shadow-sm">
                Sign In
              </button>
            </Link>
            <Link href="/signup" className="w-1/2 p-0">
              <button className="w-full rounded-r-lg bg-gray-200 py-2 font-semibold">
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
              Sign In with Google
            </span>
          </button>
          <button
            className="flex items-center justify-center space-x-3 rounded-lg bg-facebook py-2 text-white shadow-md"
            onClick={(e) => loginFacebook(e)}
          >
            <FaFacebookSquare size={24} />
            <span className="font-semibold">Sign In with Facebook</span>
          </button>
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <Input
              type="text"
              id="email"
              name="email"
              value={values['email']}
              autoComplete="off"
              placeholder="Email Address"
              className="rounded-full border border-gray-100 py-2 px-6 shadow-md"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors}
              touched={touched}
            />
            <Input
              type="password"
              id="password"
              name="password"
              value={values['password']}
              autoComplete="off"
              placeholder="Password"
              className="rounded-full border border-gray-100 py-2 px-6 shadow-md"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors}
              touched={touched}
            />
            <button
              className="rounded-lg bg-primary py-2 font-semibold text-white shadow-md"
              type="submit"
            >
              Login
            </button>
          </form>
          <Link href="/forgot-password">
            <a className="flex justify-center p-4">
              <span className="text-secondary underline">Forgot Password?</span>
            </a>
          </Link>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
