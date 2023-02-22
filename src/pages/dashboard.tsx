import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SellersHeader from '../components/SellersHeader'
import { FaQuestionCircle, FaHeart } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { MdNotificationsActive, MdInfoOutline } from 'react-icons/md'
import { tickets, latestSales } from '../utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function SellersDashboard() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  // const { data: session } = useSession()
  // console.log({ session })

  return (
    <div className="relative min-h-screen font-poppins  lg:grid lg:grid-cols-6">
      <Sidebar showSidebar={showSidebar} page="dashboard" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:py-8 lg:px-16">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <p className="mt-10 text-sm text-black">Quick Stats</p>

        <div className="mt-2 flex flex-wrap">
          <div className="relative m-2 min-w-[8.5rem] rounded-xl bg-secondary pt-6 pr-8 pb-4 pl-4">
            <p className="text-xs text-black">Total Sales</p>
            <p className="text-xl text-black">28,345</p>
          </div>

          <div className=" relative m-2 min-w-[8.5rem] rounded-xl bg-red-500 pt-6 pr-8 pb-4 pl-4 text-white">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-white">Bad goods</p>
            <p className="text-xl text-white">28 errors</p>
          </div>

          <div className="relative m-2 min-w-[8.5rem] rounded-xl bg-primary pt-6 pr-8 pb-4 pl-4 text-white">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-white">Pending Sales</p>
            <p className="text-xl text-white">120</p>
          </div>

          <div className="relative m-2 min-w-[8.5rem] rounded-xl bg-white pt-6 pr-8 pb-4 pl-4 text-gray-400">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-black">Wishlist Store</p>
            <span className="flex items-center space-x-4 text-xl">
              <p className="text-black">500</p>
              <FaHeart className="text-secondary" />
            </span>
          </div>

          <div className="relative m-2 min-w-[8.5rem] rounded-xl bg-white pt-6 pr-8 pb-4 pl-4 text-gray-400">
            <FaQuestionCircle size={12} className=" absolute top-2 right-2" />
            <p className="text-xs text-black">Customers</p>
            <span className="flex items-center space-x-4 text-xl">
              <p className="text-black">829</p>
              <HiUsers className="text-black" />
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col-reverse items-start space-y-3 sm:mt-10 sm:flex-row sm:space-x-3 sm:space-y-0">
          <div className="mt-3 w-full space-y-3 rounded-lg bg-white py-4 px-4 sm:mt-0 sm:w-1/2">
            <p className="text-sm text-black">Latest Sales (28)</p>

            {latestSales.map((item) => (
              <div key={item._id}>
                <div className="flex space-x-3">
                  <div className="h-12 w-12 rounded border border-primary p-2">
                    <Image src={item.product.image} alt="" />
                  </div>

                  <div className="w-1/2 text-sm sm:w-3/5">
                    <p className="text-black">{item.product.name}</p>
                    <span className="flex space-x-1">
                      <p className="text-black">QTY</p>
                      <p className="rounded-xl bg-gray-200 py-0.5 px-3 text-center text-sm font-semibold text-gray-500">
                        {item.product.quantity}
                      </p>
                    </span>
                    <p className="text-secondary">${item.product.price}</p>
                  </div>

                  <p className="text-sm text-black">{item.timeOfSale}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <Link href="/sales-page" className="p-0">
                <button className="rounded bg-primary py-1.5 px-6 text-sm text-white">
                  View Sales
                </button>
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col space-y-3 sm:w-1/2 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="w-3/4 space-y-3 rounded-lg bg-secondary py-4 pr-8 pl-4 sm:w-1/2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <MdNotificationsActive size={16} />
              </div>

              <p className="text-xl font-semibold text-black">Error in Order</p>
              <p className="text-sm text-black">
                You have an urgent package to take care of please check this and
                revert to them
              </p>
            </div>

            <div className="w-3/4 space-y-2.5 rounded-lg bg-split py-4 pr-8 pl-4 sm:w-1/2">
              <div>
                <p className="text-black">Congratulations John!</p>
                <p className="text-xs text-black">Best Seller of the Month.</p>
              </div>

              <div className="flex items-center">
                <div className="w-2/3 space-y-2.5">
                  <p className="text-2xl text-black">$89k</p>

                  <div className="space-y-2">
                    <p className="text-xs text-black">
                      You have done 57.6% more sales today
                    </p>

                    <Link href="/sales-page" className="p-0">
                      <button className="mt-2 w-full rounded bg-primary py-1.5 text-xs text-white">
                        View Sales
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="-mt-6 w-1/3">
                  <Image src={require('../assets/cup.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col space-y-3 sm:mt-10 sm:flex-row sm:space-x-3 sm:space-y-0">
          <div className="w-full space-y-2 divide-y divide-gray-200 rounded-lg bg-white py-4 px-4 sm:w-7/12">
            <div className="relative">
              <MdInfoOutline className="absolute right-1" />
              <p className="text-sm font-semibold text-black">Lead Sales</p>
            </div>
            <Image src={require('../assets/dashboard.png')} alt="" />
          </div>

          <div className="w-full space-y-2 divide-y divide-gray-200 rounded-lg bg-white py-4 px-4 sm:w-5/12">
            <div className="relative">
              <MdInfoOutline className="absolute right-1" />
              <p className="text-sm font-semibold text-black">Latest Tickets</p>
            </div>

            {tickets.map((ticket) => (
              <div key={ticket._id} className="space-y-2">
                <span className="flex space-x-1 text-xs text-gray-400">
                  <p>Ticket</p>
                  <p className="text-primary">{`#${ticket.number}`}</p>
                </span>
                <p className="text-sm text-black">{ticket.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SellersDashboard.auth = true
