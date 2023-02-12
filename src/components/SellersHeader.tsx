import React, { Dispatch, SetStateAction } from 'react'
import { FiEyeOff, FiBell, FiMail, FiMenu } from 'react-icons/fi'
import { AiFillBank } from 'react-icons/ai'
import { FaStoreAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Image from 'next/image'

type SellersHeaderProps = {
  setShowSidebar: Dispatch<SetStateAction<boolean>>
  showSidebar: boolean
}

const SellersHeader = ({ setShowSidebar, showSidebar }: SellersHeaderProps) => {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between rounded bg-white px-2 py-1 shadow">
      <div className="flex w-full items-center justify-between lg:w-auto">
        <span className="mr-3 flex w-40 items-center justify-center rounded-2xl bg-primary py-1 text-sm text-white">
          <AiFillBank className="mr-1" /> Account: $12,990
        </span>
        <div className="flex items-center">
          <FiEyeOff className="mr-3" />
          <FiBell className="mr-3" />
          <FiMail className="mr-3" />
          <div
            className="cursor-pointer focus:bg-gray-200 lg:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FiMenu />
          </div>
        </div>
      </div>
      <div
        className="hidden cursor-pointer items-center space-x-4 lg:flex"
        onClick={() => router.push('/customise-shop')}
      >
        <div className="flex items-center">
          <FaStoreAlt className="mr-2" /> Evans Bex Electronics Store
        </div>

        <div className="flex items-center">
          <Image
            src={require('../assets/avatar-1.jpg')}
            alt="avatar"
            width={40}
            height={40}
            className="w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default SellersHeader
