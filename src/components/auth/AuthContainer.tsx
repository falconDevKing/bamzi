import React from 'react'

const AuthContainer = (props: any) => {
  return (
    <div className="min-h-screen bg-skyBlue lg:h-screen lg:py-8">
      {props.children}
    </div>
  )
}

export default AuthContainer
