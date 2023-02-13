import React from 'react'

const UserBody = (props: any) => {
  return (
    <div className="flex flex-col md:flex-row md:px-8 md:py-6 lg:px-16 lg:py-12">
      {props.children}
    </div>
  )
}

export default UserBody
