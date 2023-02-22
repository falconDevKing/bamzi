import React from 'react'
import Image from 'next/image'

const AuthCart = () => {
  return (
    <div className="relative h-[40vh] rounded-r-2xl bg-primary lg:mt-[100px] lg:h-[50vh] lg:w-2/5 xl:mt-0 xl:h-[72vh] xl:w-1/2">
      <Image
        src={require('assets/home-image.jpg')}
        alt=""
        className="mx-auto -mt-4 h-[30vh] w-full object-cover object-center sm:h-[60vh] lg:h-[20%] lg:w-auto lg:rounded-lg"
        layout="fill"
      />
    </div>
  )
}

export default AuthCart
