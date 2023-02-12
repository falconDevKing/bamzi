import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import Header from '../components/header'
import OrderItem from '../components/OrderItem'
import UserBody from '../components/user/UserBody'
import UserSidebar from '../components/user/UserSidebar'
import { orders } from '../utils/data'

export default function Orders() {
  const [tab, setTab] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [showStatus, setShowStatus] = useState(false)

  const toggleTab = (index: number) => {
    setTab(index)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="orders" />

        <div className="w-full space-y-8 bg-white py-3 px-4 shadow md:rounded-r-xl md:py-6 md:px-8 lg:w-9/12 lg:py-12 lg:px-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span
                className={`cursor-pointer text-sm font-semibold ${
                  tab === 0
                    ? 'relative text-primary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-secondary '
                    : 'text-gray-400 hover:text-primary'
                }`}
                onClick={() => toggleTab(0)}
              >
                Orders
              </span>
              <span
                className={`cursor-pointer text-sm font-semibold ${
                  tab === 1
                    ? 'relative text-primary after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-secondary '
                    : 'text-gray-400 hover:text-primary'
                }`}
                onClick={() => toggleTab(1)}
              >
                Order History
              </span>
            </div>

            {/* <div className="flex space-x-2 items-center">
              <span className="flex items-center space-x-8 p-2 bg-white rounded-md border-none shadow text-sm">
                <p>Filter</p> <FaChevronDown />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FiGrid />
              </span>
              <span className="p-2 bg-white rounded-md border-none shadow">
                <FaCalendarAlt />
              </span>
            </div> */}
          </div>

          {!showStatus && showDetails && (
            <div className="flex flex-col space-y-2">
              <span
                className="flex cursor-pointer items-center space-x-2 text-sm font-semibold text-blue-500"
                onClick={() => setShowDetails(false)}
              >
                <FaChevronLeft size={10} />
                <p className="text-blue-500">Back</p>
              </span>

              <span className="flex w-full items-center text-sm md:w-4/12">
                <p className="w-1/2 font-semibold text-black">Order Number</p>
                <p className="w-1/2 text-blue-500">ODD908u023</p>
              </span>

              <div>
                <span className="flex w-full items-center text-sm md:w-4/12">
                  <p className="w-1/2 text-black">No of items</p>
                  <p className="w-1/2 text-blue-500">2</p>
                </span>
                <span className="flex w-full items-center text-sm md:w-4/12">
                  <p className="w-1/2 text-black">Placed On</p>
                  <p className="w-1/2 text-blue-500">3/12/2020</p>
                </span>
              </div>
            </div>
          )}

          <div>
            {!showStatus && showDetails && (
              <span className="text-sm font-semibold text-black">
                Items in your order
              </span>
            )}
            <div className="space-y-6">
              {!showStatus &&
                orders.map((order) => (
                  <div key={order.id}>
                    <OrderItem
                      order={order}
                      showDetails={showDetails}
                      setShowDetails={setShowDetails}
                      setShowStatus={setShowStatus}
                    />
                  </div>
                ))}
            </div>
          </div>

          {!showStatus && showDetails && (
            <div>
              <div className="flex flex-col-reverse text-black md:flex-row md:justify-between">
                <div className="mt-6 w-full space-y-2 text-sm md:mt-0 md:w-5/12">
                  <p className="text-black">Payment Information</p>
                  <span className="flex items-center">
                    <p className="w-1/2 text-black">Sub Total</p>
                    <p className="w-1/2 text-black">$799.98</p>
                  </span>
                  <span className="flex items-center">
                    <p className="w-1/2 text-black">Shipping Fee</p>
                    <p className="w-1/2 text-black">$49.99</p>
                  </span>
                  <span className="flex items-center text-base font-semibold">
                    <p className="w-1/2 text-black">Total Payment</p>
                    <p className="w-1/2 text-secondary">$849.97</p>
                  </span>
                </div>
                <div className="w-full space-y-2 text-sm md:w-5/12">
                  <p className="text-black">Shipping Address</p>
                  <p className="text-black">
                    Shipping Address by you, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          )}

          {showStatus && (
            <div className="flex flex-col space-y-8">
              <span
                className="flex cursor-pointer items-center space-x-2 text-sm font-semibold text-blue-500"
                onClick={() => setShowStatus(false)}
              >
                <FaChevronLeft size={10} />
                <p className="text-blue-500">Back</p>
              </span>

              <div className="flex flex-col space-y-8">
                <div className="flex space-x-4">
                  <span className="relative h-8 w-8 rounded-full border-4 border-secondary bg-primary after:absolute after:left-2.5 after:-bottom-14 after:block after:h-14 after:w-1 after:bg-secondary"></span>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-secondary">
                      Order Placed
                    </p>
                    <p className="text-sm text-gray-500">3/12/2020</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <span className="relative h-8 w-8 rounded-full border-4 border-secondary bg-primary after:absolute after:left-2.5 after:-bottom-14 after:block after:h-14 after:w-1 after:bg-secondary"></span>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-secondary">
                      Shipping in Progress
                    </p>
                    <p className="text-sm text-gray-500">
                      3/12/2020 - 5/12/2020
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <span className="h-8 w-8 rounded-full border-4 border-secondary bg-white"></span>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-secondary">
                      Delivered
                    </p>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                  <button className="w-1/2 rounded-lg bg-gray-400 py-2 text-center text-sm text-white sm:w-1/4 xl:w-1/5">
                    Confirm Delivery
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </UserBody>
    </div>
  )
}
