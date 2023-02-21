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
import Input from 'components/Input'
import { useFormik } from 'formik'
import SignUpValidation from 'utils/validation/signup'

export default function Signup() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { name, email, password } = values
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
        resetForm()
      }
    },
  })

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    formik

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
    console.log('facebookResponse', facebookResponse)
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
            <Input
              type="text"
              id="name"
              name="name"
              value={values['name']}
              autoComplete="off"
              placeholder="Full Name"
              className="rounded-full border border-gray-100 py-2 px-6 shadow-md"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors}
              touched={touched}
            />
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
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={values['confirmPassword']}
              autoComplete="off"
              placeholder="Confirm Password"
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
              Sign Up
            </button>
          </form>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
