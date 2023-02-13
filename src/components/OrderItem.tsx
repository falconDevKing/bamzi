import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

interface OrderItemProps {
  order: {
    id: number
    product: {
      img: any
      title: string
      price: number
      qty: number
      color: string
      size: string
    }
    statusMsg: string
    date: string
  }
  showDetails: boolean
  setShowDetails: Dispatch<SetStateAction<boolean>>
  setShowStatus: Dispatch<SetStateAction<boolean>>
}

const OrderItem = ({
  order,
  showDetails,
  setShowDetails,
  setShowStatus,
}: OrderItemProps) => {
  return (
    <div className="flex flex-col rounded-sm bg-gray-50 p-4 shadow-sm md:flex-row">
      <div className="flex w-full space-x-4 md:w-8/12">
        <div className="h-24 w-24 rounded-sm bg-white py-3 px-3 shadow-sm md:py-3 md:px-4 lg:py-4 xl:py-2">
          <Image src={order.product.img} alt="" className="object-cover" />
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-sm font-semibold text-black">
            {order.product.title}
          </p>

          <div className="flex space-x-4">
            {order.product.color === 'red' && (
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-black">Color</p>
                <span className="h-6 w-6 rounded bg-red-500"></span>
              </div>
            )}
            {order.product.color === 'blue' && (
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-black">Color</p>
                <span className="h-6 w-6 rounded bg-blue-500"></span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <p className="text-sm font-semibold text-black">Size</p>
              <span className="rounded-xl bg-gray-200 py-1 px-3 text-center text-sm font-semibold text-gray-500">
                {order.product.size}
              </span>
            </div>
          </div>
        </div>
      </div>

      {!showDetails && (
        <div className="mt-4 flex w-full flex-col space-y-3 md:mt-0 md:w-4/12 md:justify-between md:space-y-0">
          <span className="flex items-center justify-between text-sm font-semibold">
            <p className="text-green underline">Confirm Order</p>
            <p className="text-black">{order.date}</p>
          </span>

          <button
            className="w-full rounded-lg bg-primary py-2 text-center text-sm text-white"
            onClick={() => setShowDetails(true)}
          >
            View Details
          </button>
        </div>
      )}

      {showDetails && (
        <div className="mt-4 flex w-full flex-col space-y-3 md:mt-0 md:w-4/12 md:justify-between md:space-y-0">
          <span className="flex items-center justify-between text-sm font-semibold">
            <p className="text-primary underline">{order.statusMsg}</p>
            <p className="text-primary">{order.date}</p>
          </span>

          <span className="flex items-center justify-between text-sm font-semibold">
            <p className="text-secondary">{`$${order.product.price}`}</p>
            <p className="text-primary">{`QTY: ${order.product.qty}`}</p>
          </span>

          <button
            className="w-full rounded-lg bg-primary py-2 text-center text-sm text-white"
            onClick={() => setShowStatus(true)}
          >
            View Status
          </button>
        </div>
      )}
    </div>
  )
}

export default OrderItem
