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

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
export default function Login() {
  // const url = 'http://localhost:4000/bamzi/signin'
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    console.log('logn res', result)

    if (result?.ok) {
      setEmail('')
      setPassword('')
      router.push('/dashboard')
    }
  }

  const loginGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const googleResponse = await signIn('google')
    console.log('googleResponse', googleResponse)
  }

  const loginFacebook = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const facebookResponse = await signIn('facebook')
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
