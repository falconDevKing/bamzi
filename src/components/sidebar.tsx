import React from 'react'
import {
  FiHome,
  FiCircle,
  FiShoppingCart,
  FiBox,
  FiGrid,
  FiCalendar,
  FiCreditCard,
  FiUser,
  FiHelpCircle,
} from 'react-icons/fi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

type SidebarProps = {
  page: string
  showSidebar: boolean
}

const Sidebar = ({ showSidebar, page }: SidebarProps) => {
  const router = useRouter()
  const currentPage =
    'bg-primary text-white cursor-pointer py-0.5 px-2 flex items-center w-full border-none rounded-full'
  const regularPage =
    'cursor-pointer py-0.5 px-2 flex items-center w-full hover:bg-primary hover:text-white hover:border-none hover:rounded-full'
  const LinkReset = 'p-0 font-light'

  return (
    <div
      className={`absolute inset-y-0 left-0 z-10 flex w-64 transform flex-col space-y-8 bg-drawer bg-cover px-4 py-8 text-sm font-light text-primary transition duration-200 ease-in-out lg:relative lg:col-span-1 lg:w-auto lg:translate-x-0 ${
        showSidebar
          ? 'translate-x-0 shadow-lg'
          : '-translate-x-full shadow-none'
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={require('../assets/BAMZI.png')}
            alt="bamzi"
            width={108}
            height={60}
          />
        </Link>
        {/* <Image
          src={require("../assets/avatar-1.jpg")}
          alt="avatar"
          className="w-8 rounded-full lg:hidden"
          onClick={() => router.push("/customise-shop")}
        /> */}
      </div>
      <span className="px-2 text-sm text-primary lg:hidden">
        Evans Bex Electronics Store
      </span>

      <div className="flex flex-col space-y-2">
        <Link href="/dashboard" className={LinkReset}>
          <span className={page === 'dashboard' ? currentPage : regularPage}>
            <FiHome className="mr-4" /> Dashboard
          </span>
        </Link>

        <span className={regularPage}>
          <FiCircle className="mr-4" /> Analytics
        </span>

        <Link href="/marketing" className={LinkReset}>
          <span className={page === 'marketing' ? currentPage : regularPage}>
            <FiCircle className="mr-4" /> Marketing
          </span>
        </Link>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">PRODUCTS</h3>

        <Link href="/sales-page" className={LinkReset}>
          <span className={page === 'sales-page' ? currentPage : regularPage}>
            <FiShoppingCart className="mr-2" /> Sales
          </span>
        </Link>

        <Link href="/sellers-board" className={LinkReset}>
          <span
            className={page === 'sellers-board' ? currentPage : regularPage}
          >
            <FiBox className="mr-2" /> All Products
          </span>
        </Link>

        <span className={regularPage}>
          <FiGrid className="mr-2" /> Categories
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">TRANSACTIONS</h3>

        <Link href="/sales-history" className={LinkReset}>
          <span
            className={page === 'sales-history' ? currentPage : regularPage}
          >
            <FiCalendar className="mr-2" /> History
          </span>
        </Link>

        <span className={regularPage}>
          <FiCreditCard className="mr-2" /> Billings
        </span>
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">SETTINGS</h3>

        <span className={regularPage}>
          <FiUser className="mr-2" /> Account
        </span>

        <Link href="/customise-shop" className={LinkReset}>
          <span
            className={page === 'customise-shop' ? currentPage : regularPage}
          >
            <FiBox className="mr-2" /> Customize Shop
          </span>
        </Link>

        <span className={regularPage}>
          <FiHelpCircle className="mr-2" /> Help
        </span>
      </div>
    </div>
  )
}

export default Sidebar
