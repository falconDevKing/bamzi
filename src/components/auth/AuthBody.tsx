import React from 'react'

const AuthBody = (props: any) => {
  return (
    <div className="lg:px-16">
      <div className="mt-0 flex flex-col-reverse bg-contain bg-left bg-no-repeat py-4 lg:-ml-24 lg:h-[85vh] lg:flex-row lg:space-x-4 lg:bg-exclusion lg:py-0 lg:px-0 lg:pl-32 xl:-ml-48 xl:pl-32">
        {props.children}
      </div>
    </div>
  )
}

export default AuthBody
