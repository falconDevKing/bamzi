import { useSession, signIn, signOut } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return <>{children}</>
}

export default AuthGuard
