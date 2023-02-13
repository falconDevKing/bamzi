import React, { useState, FormEvent } from 'react'
import AuthStrip from '../components/auth/AuthStrip'
import AuthCart from '../components/auth/AuthCart'
import AuthBody from '../components/auth/AuthBody'
import AuthContent from '../components/auth/AuthContent'
import AuthContainer from '../components/auth/AuthContainer'
import Header from '../components/header'
import axios from 'axios'
import Link from 'next/link'

export default function ForgotPassword() {
  const url = 'http://localhost:4000/bamzi/forgot-password'
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .put(url, {
        email: email,
      })
      .then((res) => {
        console.log(res)
      })
    setEmail('')
  }

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
            mailbox
          </p>
          <form
            className="flex flex-col space-y-3"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              id="email"
              value={email}
              autoComplete="off"
              placeholder="Email Address"
              className="rounded border border-gray-100 py-2 px-6 shadow"
              onChange={(e) => setEmail(e.target.value)}
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
