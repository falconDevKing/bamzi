import React from 'react'
import Image from 'next/image'
import { MdError } from 'react-icons/md'

type SalesItemsProps = {
  item: {
    _id: number
    product: {
      img: any
      title: string
    }
    options: {
      color?: string
      size?: string
      ram?: number
    }
    shipping: {
      customer: string
      address: string
    }
    qty: number
    price: number
    status: string
    date: string
  }
}

const SalesItem = ({ item }: SalesItemsProps) => {
  return (
    <div className="flex w-full items-center">
      <div className="flex w-5/12 items-center space-x-4 p-4 lg:w-4/12">
        <input type="checkbox" className="accent-secondary" />
        <div className="hidden h-12 w-12 rounded border border-primary py-1.5 px-2 md:block">
          <Image src={item.product?.img} alt="" width={30} height={36} />
        </div>
        <p className="text-black">{item?.product?.title}</p>
      </div>

      <div className="hidden w-2/12 space-y-2 p-2 sm:block xl:w-1/12">
        {item?.options?.color === 'red' && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold text-black">Color</p>
            <span className="h-4 w-4 rounded bg-red-500"></span>
          </div>
        )}
        {item.options?.color === 'blue' && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold text-black">Color</p>
            <span className="h-4 w-4 rounded bg-blue-500"></span>
          </div>
        )}
        {item.options?.ram && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold text-black">RAM</p>
            <span className="rounded-xl bg-gray-200 py-1 px-3 text-center text-sm font-semibold text-gray-500">
              6
            </span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold text-black">Size</p>
          <span className="rounded-xl bg-gray-200 py-1 px-3 text-center text-sm font-semibold text-gray-500">
            {item.options?.size}
          </span>
        </div>
      </div>

      <div className="hidden w-2/12 space-y-2 p-4 sm:block">
        <p className="text-sm text-black">{item.shipping?.customer}</p>
        <p className="text-sm text-blue-500 underline">Shipping Address</p>
      </div>

      <div className="w-1/6 p-4 md:w-1/12">
        <span className="rounded-xl bg-gray-200 py-1 px-4 text-center text-sm font-semibold text-gray-500">
          {item.qty}
        </span>
      </div>

      <div className="w-1/6 p-4 md:w-1/12">
        <p className="text-xs font-semibold text-black lg:text-sm">{`$${item.price}`}</p>
      </div>

      <div className="-mt-1 w-3/12 py-2 pr-2 md:w-1/12 lg:mt-0">
        {item.status === 'Error' ? (
          <span className="flex items-center space-x-2">
            <p className="text-xs font-semibold text-black lg:text-base">
              {item.status}
            </p>
            <MdError className="text-red-500" size={20} />
          </span>
        ) : (
          <span className="text-xs font-semibold lg:text-base">
            {item.status}
          </span>
        )}
      </div>

      <div className="hidden w-2/12 py-2 px-6 xl:block">
        <span className="flex items-center justify-center">
          <p className="text-sm font-semibold text-black">{item.date}</p>
        </span>
      </div>
    </div>
  )
}

export default SalesItem
