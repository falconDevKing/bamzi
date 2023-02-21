import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { RiMailUnreadLine } from 'react-icons/ri'
import { FaMailBulk } from 'react-icons/fa'
import Sidebar from 'components/sidebar'
import SellersHeader from 'components/SellersHeader'

export default function Marketing() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="relative min-h-screen font-poppins  lg:grid lg:grid-cols-6">
      <Sidebar showSidebar={showSidebar} page="marketing" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:py-8 lg:px-16">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="mt-10 flex w-4/5 flex-col space-y-1">
          <p className="text-xl font-bold text-black">Marketing</p>
          <p className="text-xs text-black">
            Every products needs a customer. Use the best marketing practices to
            acquire new customers, raise the average order value, and keep
            buyers coming back for more.
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col lg:flex-row">
          <div className="w-full pr-2 lg:w-3/12">
            <p className="mb-2 text-sm font-semibold text-black">
              Get more traffic
            </p>
            <p className="text-xs text-black">
              Start an advertising campaign to reach your target audience and
              get more traffic into your store.
            </p>
          </div>

          <div className="mt-2 flex w-full flex-col space-y-4 lg:w-9/12">
            <div className="flex w-full flex-col items-center justify-center rounded-md border border-solid bg-white py-2 px-4 shadow sm:flex-row">
              <div className="flex w-full items-center pr-0 sm:w-9/12 sm:pr-1">
                <span className="flex w-[10%] justify-center">
                  <FcGoogle size={24} />
                </span>

                <div className="flex w-[90%] flex-col space-y-1.5 px-2 py-1">
                  <h1 className="text-sm font-semibold">
                    Advertise across Google
                  </h1>

                  <p className="text-xs text-gray-600">
                    Advertise your products to people who have displayed
                    interest in similar products. Launch an automated ad
                    campaign in 5 minutes right from store&apos;s dashboard
                  </p>
                </div>
              </div>

              <button className="mt-2 w-full rounded bg-blue-500 py-2 text-center text-xs text-white sm:mt-0 sm:w-3/12">
                Get Started
              </button>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-md border border-solid bg-white py-2 px-4 shadow sm:flex-row">
              <div className="flex w-full items-center pr-0 sm:w-9/12 sm:pr-1">
                <span className="flex w-[10%] justify-center">
                  <RiFacebookBoxFill size={24} color={'#6366F1'} />
                </span>

                <div className="flex w-[90%] flex-col space-y-1.5 px-2 py-1">
                  <h1 className="text-sm font-semibold">
                    Promote and Sell on Facebook
                  </h1>

                  <p className="text-xs text-gray-600">
                    Connect with Facebook to get your very own Facebook Shop and
                    launch an ad campaign to show your products in newsfeed of
                    potential customers.
                  </p>
                </div>
              </div>

              <button className="mt-2 w-full rounded bg-blue-500 py-2 text-center text-xs text-white sm:mt-0 sm:w-3/12">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col lg:flex-row">
          <div className="pr-2 lg:w-3/12">
            <p className="mb-2 text-sm font-semibold text-black">
              Make customers loyal
            </p>
            <p className="text-xs text-black">
              Engage past customers to build loyalty and have them return as
              repeat buyers.
            </p>
          </div>

          <div className="mt-2 flex flex-col space-y-4 lg:w-9/12">
            <div className="flex w-full flex-col items-center justify-center rounded-md border border-solid bg-white py-2 px-4 shadow sm:flex-row">
              <div className="flex w-full items-center pr-0 sm:w-9/12 sm:pr-1">
                <span className="flex w-[10%] justify-center">
                  <RiMailUnreadLine size={24} color={'#FBBF24'} />
                </span>

                <div className="flex w-[90%] flex-col space-y-1.5 px-2 py-1">
                  <h1 className="text-sm font-semibold">
                    Retain customers with automated emails
                  </h1>

                  <p className="text-xs text-gray-600">
                    Automated marketing emails remind customers of the products
                    they liked, offer related goods, personal discounts, and
                    more.The emails are sent in response to customers&apos;
                    actions and timely encourage them to come back and buy.
                  </p>
                </div>
              </div>

              <button className="mt-2 w-full rounded bg-blue-500 py-2 text-center text-xs text-white sm:mt-0 sm:w-3/12">
                Manage Emails
              </button>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-md border border-solid bg-white py-2 px-4 shadow sm:flex-row">
              <div className="flex w-full items-center pr-0 sm:w-9/12 sm:pr-1">
                <span className="flex w-[10%] justify-center">
                  <FaMailBulk size={24} color={'#FBBF24'} />
                </span>

                <div className="flex w-[90%] flex-col space-y-1.5 px-2 py-1">
                  <h1 className="text-sm font-semibold">
                    Engaged customers with emails newsletters
                  </h1>

                  <p className="text-xs text-gray-600">
                    Send out newsletters promoting new arrivals, discounts and
                    special offers to convert first-time customers to repeat
                    buyers.
                  </p>
                </div>
              </div>

              <button className="mt-2 w-full rounded bg-blue-500 py-2 text-center text-xs text-white sm:mt-0 sm:w-3/12">
                Create Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Marketing.auth = true
