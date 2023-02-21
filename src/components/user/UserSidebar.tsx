import React, { useState } from 'react'
import Link from 'next/link'
import { FaShoppingBag, FaTruck, FaUser } from 'react-icons/fa'
import { number } from 'yup'

type UserSidebarProps = {
  page: string
}

const UserSidebar = ({ page }: UserSidebarProps) => {
  const currentPage =
    'flex items-center space-x-2 py-2 px-4 bg-gray-200 relative md:before:absolute md:before:left-0 md:before:h-6 md:before:w-1 md:before:bg-primary after:absolute after:w-full after:h-1 after:bg-primary after:left-0 after:bottom-0 md:after:w-0 md:after:h-0 cursor-pointer'
  const regularPage =
    'flex items-center space-x-2 py-2 px-4 relative cursor-pointer'
  const LinkReset = 'p-0'
  const tooltip =
    'absolute bottom-3 left-0 text-xs font-light bg-white bg-opacity-100 z-10 border border-black text-black py-1 px-2'
  const [showTooltip, setShowTooltip] = useState(false)
  const [id, setId] = useState(0)

  const toggleId = (index: number) => {
    setId(index)
  }

  return (
    <div className="flex justify-center bg-gray-100 shadow md:flex-col md:justify-start md:rounded-xl md:py-16 lg:w-3/12">
      <Link href="/my-account" className={`LinkReset`}>
        <span
          className={page === 'my-account' ? currentPage : regularPage}
          onMouseEnter={() => {
            toggleId(1)
            setShowTooltip(true)
          }}
          onMouseLeave={() => {
            toggleId(0)
            setShowTooltip(false)
          }}
        >
          <FaUser className="text-gray-700" />
          <p className="hidden text-sm font-semibold text-primary lg:block lg:text-lg">
            Bamzi Account
          </p>
          <span
            className={`${tooltip} ${
              id === 1 && showTooltip ? 'block lg:hidden' : 'hidden'
            }`}
          >
            Bamzi Account
          </span>
        </span>
      </Link>

      <Link href="/orders" className={LinkReset}>
        <span
          className={page === 'orders' ? currentPage : regularPage}
          onMouseEnter={() => {
            toggleId(2)
            setShowTooltip(true)
          }}
          onMouseLeave={() => {
            toggleId(0)
            setShowTooltip(false)
          }}
        >
          <FaShoppingBag className="text-gray-700" />
          <p className="hidden text-sm font-semibold text-primary lg:block lg:text-lg">
            Orders
          </p>
          <span
            className={`${tooltip} ${
              id === 2 && showTooltip ? 'block lg:hidden' : 'hidden'
            }`}
          >
            Orders
          </span>
        </span>
      </Link>

      <Link href="/shippinginfo" className={LinkReset}>
        <span
          className={page === 'shipping' ? currentPage : regularPage}
          onMouseEnter={() => {
            toggleId(3)
            setShowTooltip(true)
          }}
          onMouseLeave={() => {
            toggleId(0)
            setShowTooltip(false)
          }}
        >
          <FaTruck className="text-gray-700" />
          <p className="hidden text-sm font-semibold text-primary lg:block lg:text-lg">
            Shipping Address
          </p>
          <span
            className={`${tooltip} ${
              id === 3 && showTooltip ? 'block lg:hidden' : 'hidden'
            }`}
          >
            Shipping Address
          </span>
        </span>
      </Link>
    </div>
  )
}

export default UserSidebar
