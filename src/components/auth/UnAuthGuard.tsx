import { useSession, signIn, signOut } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const UnAuthGuard = ({ children }: PropsWithChildren) => {
  const { status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'authenticated') {
    signOut()
  }

  return <>{children}</>
}

export default UnAuthGuard
