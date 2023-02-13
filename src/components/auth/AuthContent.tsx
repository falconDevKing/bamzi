import React from 'react'

const AuthContent = (props: any) => {
  return (
    <div className="mt-10 mb-16 flex flex-col space-y-2.5 px-4 md:px-24 lg:mt-0 lg:w-2/5 lg:place-content-center lg:px-10 xl:w-1/2">
      {props.children}
    </div>
  )
}

export default AuthContent
