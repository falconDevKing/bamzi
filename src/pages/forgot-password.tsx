import React, { useState, FormEvent } from 'react'
import AuthStrip from '../components/auth/AuthStrip'
import AuthCart from '../components/auth/AuthCart'
import AuthBody from '../components/auth/AuthBody'
import AuthContent from '../components/auth/AuthContent'
import AuthContainer from '../components/auth/AuthContainer'
import Header from '../components/header'
import axios from 'axios'
import Link from 'next/link'
import { useFormik } from 'formik'
import SignInValidation from 'utils/validation/signin'
import ErrorHandler from 'utils/ErrorHandler'
import SuccessHandler from 'utils/SuccessHandler'
import Input from 'components/Input'
import * as Yup from 'yup'

export default function ForgotPassword() {
  const url = 'http://localhost:3000/bamzi/forgot-password'
  const [email, setEmail] = useState('')

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
    }),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { email } = values
        const forget = await axios.post('/api/auth/forgot-password', {
          email: email,
        })

        console.log('logn res', forget)

        SuccessHandler({
          message: forget.data?.message ?? 'Mail sent Successful',
        })
      } catch (error: any) {
        if (error?.response?.data?.message !== 'User doesnt exist') {
          ErrorHandler({ message: error.message ?? 'Error Resetting Password' })
          console.log('signup error', error)
        }
      } finally {
        resetForm()
      }
    },
  })

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    formik

  return (
    <AuthContainer>
      <Header bg />

      <AuthBody>
        <AuthStrip />
        <AuthContent>
          <Link href="/login" className="p-0 font-normal">
            <p className="cursor-pointer text-secondary underline">
              Remember Password?
            </p>
          </Link>
          <p className="text-4xl font-bold leading-6 text-primary">
            Verification
          </p>
          <p className="text-sm text-gray-400">
            Input your email and a verification link would be sent to your
            mailbox if you have an account with us
          </p>
          <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
            <Input
              type="text"
              id="email"
              name="email"
              value={values['email']}
              autoComplete="off"
              placeholder="Email Address"
              className="rounded border border-gray-100 py-2 px-6 shadow"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors}
              touched={touched}
            />
            <button
              type="submit"
              className="rounded bg-primary py-2 font-semibold text-white"
            >
              Reset
            </button>
          </form>
        </AuthContent>
        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
