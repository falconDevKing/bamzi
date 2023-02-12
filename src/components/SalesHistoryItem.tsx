import React from 'react'
import { RiEqualizerFill } from 'react-icons/ri'

type SalesHistoryItemProps = {
  item: {
    _id: number
    product: {
      title: string
    }
    transaction_id: string
    price: number
    status: string
    buyers_info: string
    qty: number
    date: string
  }
}

const SalesHistoryItem = ({ item }: SalesHistoryItemProps) => {
  return (
    <div className="flex w-full items-center">
      <div className="text-md flex w-5/12 items-center space-x-4 p-4 lg:w-4/12">
        <input type="checkbox" className="accent-secondary" />

        <p className="">{item.product.title}</p>
      </div>
      <div className="w-1/12 pr-3 xl:w-2/12">
        <span className="py-1 text-sm font-semibold">
          {item.transaction_id}
        </span>
      </div>

      <div className="w-2/12 xl:w-2/12">
        <p className="text-green-600 ml-24 text-xs font-semibold lg:text-sm">{`$${item.price}`}</p>
      </div>

      <div className="w-1/12 xl:w-2/12">
        <span className="ml-12 py-1 text-sm font-semibold">{item.status}</span>
      </div>
      <div className="w-3/12 xl:w-2/12">
        <span className="ml-2 py-1 text-sm font-semibold">
          {item.buyers_info}
        </span>
      </div>

      <div className="w-1/12 xl:w-2/12">
        <span className="ml-8 rounded-xl bg-gray-200 py-1 px-4 text-sm font-semibold text-gray-500">
          {item.qty}
        </span>
      </div>
      <div className="hidden w-1/12 xl:block xl:w-2/12">
        <span className="flex items-center justify-evenly">
          <p className="text-sm font-semibold">{item.date}</p>
          <RiEqualizerFill size={20} />
        </span>
      </div>
    </div>
  )
}

export default SalesHistoryItem
