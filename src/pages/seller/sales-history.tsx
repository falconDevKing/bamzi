import React, { useState } from 'react'
import { FaChevronDown, FaCalendarAlt } from 'react-icons/fa'
import { FiGrid, FiSearch, FiUsers } from 'react-icons/fi'

import Sidebar from 'components/sidebar'
import SellersHeader from 'components/SellersHeader'
import { salesHistoryData } from 'utils/data'
import SalesHistoryItem from 'components/SalesHistoryItem'

export default function SaleHistory() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="relative min-h-screen bg-seller bg-cover font-poppins lg:grid lg:grid-cols-6">
      <Sidebar showSidebar={showSidebar} page="sales-history" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="mt-8 flex w-full flex-col lg:flex-row">
          <div className="w-full pr-4 lg:w-2/5 xl:w-1/2">
            <span className="flex items-center space-x-3">
              <FiUsers size={28} className="text-primary" />
              <p className="text-lg font-semibold text-primary">
                Sales History
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
          </div>

          <div className="flex w-full flex-col items-start justify-start space-y-4 pt-16 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0 lg:mt-0 lg:w-3/5 lg:justify-end xl:w-1/2">
            <div className="flex items-start space-x-2 sm:-mt-8">
              <span className="flex items-center space-x-8 rounded-md border-none bg-white p-2 text-sm shadow">
                <p>Export</p> <FaChevronDown />
              </span>
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
            <span className="w-4/12 pl-6 md:w-3/12">Product Name</span>
            <span className="ml-8 hidden w-2/12 pl-8 sm:block xl:w-2/12">
              Transaction ID
            </span>
            <span className="hidden w-2/12 text-center sm:block">Price</span>
            <span className="text-center">Status</span>
            <span className="w-2/6 pl-6 text-center md:w-2/12">
              Buyer&apos;s Info
            </span>
            <span className="w-3/12 text-center md:w-1/12">QTY</span>
            <span className="hidden w-2/12 text-center xl:block">Date</span>
          </div>

          <div className="w-full bg-white">
            {salesHistoryData.map((item) => (
              <div key={item._id}>
                <SalesHistoryItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SaleHistory.auth = true
