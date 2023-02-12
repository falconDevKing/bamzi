import React, { useState } from 'react'
import {
  IoIosCart,
  IoIosClose,
  IoIosHeartEmpty,
  IoIosMenu,
  IoIosSearch,
} from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

type HeaderProps = {
  pryNav?: string
  secNav?: string
  bg?: boolean
}

const Header = ({ pryNav, secNav, bg }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`${bg ? 'bg-bgcolors' : 'bg-white shadow-lg'}`}>
      <div className="w-full px-4 py-4 md:px-6 lg:px-24">
        <div className="flex w-full lg:justify-between">
          <div className="flex w-full items-center justify-between lg:justify-start">
            {/**Website Brand*/}
            <div>
              <Link href="/">
                <a>
                  <Image
                    src={require('../assets/BAMZI.png')}
                    className="w-20 lg:w-16"
                    alt="bamzi"
                    width={120}
                    height={60}
                  />
                </a>
              </Link>
            </div>

            {/**menu */}
            {pryNav || secNav ? (
              <div className="relative flex items-center justify-end lg:hidden">
                <button className="h-6 w-6" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
                </button>

                {isOpen && (
                  <div className="absolute top-0 right-0 z-50 mt-8 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/my-account"
                        className="items-center px-4 py-2 "
                      >
                        My Account
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/dashboard"
                        className="items-center px-4 py-2 "
                      >
                        Products
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/sellers-store"
                        className="items-center px-4 py-2 "
                      >
                        Store
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/wishlist"
                        className="items-center px-4 py-2 "
                      >
                        Wishlist
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/Shopping-Cart"
                        className="items-center px-4 py-2 "
                      >
                        Cart
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ''
            )}

            {/**Primary Nav Items */}

            {pryNav === 'auth' && (
              <div className="ml-10 hidden items-center space-x-10 py-4 lg:flex">
                <Link
                  href="/sellers-board"
                  className="font-bold text-primary hover:text-gray-400"
                >
                  Products
                </Link>
                <Link
                  href="/sellers-store"
                  className="font-bold text-primary hover:text-gray-400"
                >
                  Stores
                </Link>
                <Link
                  href="/"
                  className="font-bold text-primary hover:text-gray-400"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="font-bold text-primary hover:text-gray-400"
                >
                  Features
                </Link>
              </div>
            )}

            {pryNav === 'user' && (
              <div className="ml-10 hidden items-center space-x-4 lg:flex">
                <Link
                  href="/sellers-board"
                  className="font-semibold text-primary hover:text-gray-400"
                >
                  Products
                </Link>
                <Link
                  href="/sellers-store"
                  className="font-semibold text-primary hover:text-gray-400"
                >
                  Stores
                </Link>

                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search anything"
                    autoComplete="off"
                    aria-label="Search anything"
                    className="w-96 rounded-2xl border-none px-3 py-2 text-black ring-2 ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-gray-500"
                  />
                  <IoIosSearch className="absolute right-2 h-5 w-5" />
                </div>
              </div>
            )}
          </div>

          {/**secondary nav items */}
          {secNav === 'auth' && (
            <div className="hidden items-center space-x-3 lg:flex">
              <Link href="/Shopping-Cart">
                <a className="flex font-bold text-primary hover:text-gray-400">
                  <span className="mr-1">Cart</span>
                  <IoIosCart className="h-5 w-5" />
                </a>
              </Link>
              <Link href="/login">
                <a className="flex font-bold hover:text-gray-400">
                  <span className="mr-1 rounded-md border border-yellow-500 py-1 px-3">
                    Login
                  </span>
                </a>
              </Link>
            </div>
          )}

          {secNav === 'prelaunch' && (
            <div className="hidden w-52 items-center space-x-3 font-bold lg:flex ">
              <Link
                href=""
                className="flex w-24 p-0 font-semibold text-primary hover:text-gray-400"
              >
                Contact Us
              </Link>
              <Link
                href=""
                className="flex w-24 p-0 font-semibold text-primary hover:text-gray-400"
              >
                Features
              </Link>
            </div>
          )}

          {secNav === 'user' && (
            <div className="hidden items-center space-x-4 lg:flex">
              <Link href="/wishlist">
                <a className="flex font-semibold text-primary hover:text-gray-400">
                  <span className="mr-1">Wishlist</span>
                  <IoIosHeartEmpty className="h-5 w-5" />
                </a>
              </Link>
              <Link href="/shopping-cart">
                <a className="flex font-semibold text-primary hover:text-gray-400">
                  <span className="mr-1">Cart</span>
                  <IoIosCart className="h-5 w-5" />
                </a>
              </Link>

              <Link href="/my-account">
                <a className="w-14">
                  <Image
                    src={require('../assets/avatar-0.jpg')}
                    alt=""
                    className="aspect-square rounded-full object-contain shadow-sm"
                  />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
