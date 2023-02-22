import React, { useEffect, useState } from 'react'
import AuthStrip from '../../components/auth/AuthStrip'
import AuthCart from '../../components/auth/AuthCart'
import AuthBody from '../../components/auth/AuthBody'
import AuthContent from '../../components/auth/AuthContent'
import AuthContainer from '../../components/auth/AuthContainer'
import Header from '../../components/header'
import axios from 'axios'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { Formik } from 'formik'
import { GetServerSideProps } from 'next'
import Input from 'components/Input'
import ErrorHandler from 'utils/ErrorHandler'
import SuccessHandler from 'utils/SuccessHandler'

interface ResetPasswordProps {
  email: string | null
  errorMessage: string | null
}

export default function ResetPassword({
  email,
  errorMessage,
}: ResetPasswordProps) {
  const router = useRouter()
  const { token } = router.query

  if (errorMessage) {
    ErrorHandler({ message: errorMessage })
    router.push('/login')
  }

  const schema = yup.object({
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be atleast 8 characters.'),
    repeatPassword: yup
      .string()
      .required('Repeat Password is required')
      .oneOf([yup.ref('password')], 'Password must match'),
  })

  return (
    <AuthContainer>
      <Header pryNav="auth" bg />

      <AuthBody>
        <AuthStrip />

        <AuthContent>
          <p className="text-4xl font-bold leading-6 text-primary">
            Reset Password
          </p>
          <p className="text-sm font-semibold text-primary">{email}</p>

          <Formik
            initialValues={{
              password: '',
              repeatPassword: '',
            }}
            validateOnBlur={true}
            validateOnChange={true}
            validationSchema={schema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const resetResponse = await axios.put(
                  `/api/auth/reset-password/${token}`,
                  {
                    password: values.password,
                  }
                )
                SuccessHandler({ message: 'Password updated Successfully' })
                router.push('/login')
              } catch (error) {
                ErrorHandler({
                  message: 'Unable to change password. Try again',
                })
              } finally {
                resetForm()
              }
            }}
          >
            {(props) => (
              <form
                className="flex flex-col space-y-3"
                onSubmit={props.handleSubmit}
              >
                <div className="flex flex-col">
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={props.values.password}
                    autoComplete="off"
                    placeholder="New Password"
                    className="rounded border border-gray-100 py-2 px-6 shadow"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.touched.password && props.errors.password ? (
                    <p className="text-xs text-red-400">
                      {props.errors.password}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <Input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={props.values.repeatPassword}
                    autoComplete="off"
                    placeholder="Repeat Password"
                    className="rounded border border-gray-100 py-2 px-6 shadow"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.touched.repeatPassword &&
                  props.errors.repeatPassword ? (
                    <p className="text-xs text-red-400">
                      {props.errors.repeatPassword}
                    </p>
                  ) : null}
                </div>

                <button
                  className="rounded bg-primary py-2 text-white"
                  onClick={() => props.handleSubmit}
                  disabled={props.dirty && props.isValid ? false : true}
                >
                  Reset
                </button>
              </form>
            )}
          </Formik>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { token } = ctx.query
    console.log('token', token)

    const response = await axios.get(
      `http://localhost:3000/api/auth/reset-password/${token}`
    )

    const email = response?.data?.data?.email

    return {
      props: {
        email: email,

        errorMessage: null,
      },
    }
  } catch (error) {
    return {
      props: {
        email: null,
        errorMessage: 'Invalid or expired token',
      },
    }
  }
}
