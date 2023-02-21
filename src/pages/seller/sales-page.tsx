import React, { useState } from 'react'

import Sidebar from 'components/sidebar'
import SellersHeader from 'components/SellersHeader'
import { salesData } from 'utils/data'
import SalesItem from 'components/SalesItem'

import {
  FaTruck,
  FaQuestionCircle,
  FaChevronDown,
  FaCalendarAlt,
} from 'react-icons/fa'
import { FiGrid, FiSearch } from 'react-icons/fi'

export default function SalesPage() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="relative min-h-screen font-poppins  lg:grid lg:grid-cols-6">
      <Sidebar showSidebar={showSidebar} page="sales-page" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:py-8 lg:px-16">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="mt-8 flex w-full flex-col lg:flex-row">
          <div className="w-full pr-4 lg:w-2/5 xl:w-1/2">
            <span className="flex items-center space-x-3">
              <FaTruck size={32} className="text-primary" />
              <p className="text-lg font-semibold text-primary">
                Sales and Order
              </p>
              <p className="text-sm text-blue-500 underline">
                View Sales History
              </p>
            </span>

            <form action="" className="mt-4 w-full sm:w-3/4">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <input
                  type="text"
                  name="search"
                  placeholder="Search anything"
                  autoComplete="off"
                  aria-label="Search anything"
                  className="w-full rounded-2xl border-none py-2 px-4 text-xs text-black ring-2 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-500 lg:text-sm"
                />
                <FiSearch className="absolute right-4 h-4 w-4 lg:h-5 lg:w-5" />
              </div>
            </form>

            <p className="mt-4 text-sm italic text-gray-600">
              You can check list goods that as been delivered to your customers
              and once a good has been delivered set the order to delivered
            </p>
          </div>

          <div className="mt-4 flex w-full flex-col items-start justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 lg:mt-0 lg:w-3/5 lg:justify-end xl:w-1/2">
            <div className="flex space-x-4">
              <div className="relative rounded-xl bg-red-500 pt-6 pr-8 pb-4 pl-4 text-white">
                <FaQuestionCircle
                  size={12}
                  className=" absolute top-2 right-2"
                />
                <p className="text-xs text-white">Bad goods</p>
                <p className="text-xl text-white">28 errors</p>
              </div>
              <div className="relative rounded-xl bg-primary pt-6 pr-8 pb-4 pl-4 text-white">
                <FaQuestionCircle
                  size={12}
                  className="absolute top-2 right-2"
                />
                <p className="text-xs text-white">Pending Sales </p>
                <p className="text-xl text-white">120</p>
              </div>
            </div>

            <div className="flex items-start space-x-2 sm:-mt-8">
              <span className="flex items-center space-x-8 rounded-md border-none bg-white p-2 text-sm shadow">
                <p>Filter</p> <FaChevronDown />
              </span>
              <span className="rounded-md border-none bg-white p-2 shadow">
                <FiGrid />
              </span>
              <span className="rounded-md border-none bg-white p-2 shadow">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="flex w-full items-center bg-primary py-2 px-4 text-white">
            <span className="w-5/12 text-center lg:w-4/12">Product Name</span>
            <span className="hidden w-2/12 text-center sm:block xl:w-1/12">
              Options
            </span>
            <span className="hidden w-2/12 text-center sm:block">
              Shipping Address
            </span>
            <span className="w-1/6 text-center md:w-1/12">QTY</span>
            <span className="w-1/6 text-center md:w-1/12">Price</span>
            <span className="w-3/12 text-center md:w-1/12">Status</span>
            <span className="hidden w-2/12 text-center xl:block">Date</span>
          </div>

          <div className="w-full bg-white">
            {salesData.map((item) => (
              <div key={item._id}>
                <SalesItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SalesPage.auth = true
