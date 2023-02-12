import React from 'react'
import { MdDelete, MdShoppingCart } from 'react-icons/md'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface LeftCompoProps {
  products: any[]
}

const LeftCompo = ({ products }: LeftCompoProps) => {
  return (
    <div className="px-8 py-10 lg:basis-2/3">
      <div className="rounded-md border bg-white px-8 py-4">
        <div className="flex justify-between">
          <div className="sm:text-md font-extrabold lg:text-xl">
            Wishlist (3)
          </div>
          <div className="item-center flex">
            <RiDeleteBin6Line size={20} />
            <div className="px-1 text-sm text-gray-600">Delete All</div>
          </div>
        </div>
      </div>

      <div>
        {products.map((product) => (
          <div
            key={product._id}
            className="mt-10 flex flex-col border py-4 px-6 md:flex-row"
          >
            <div className="hidden h-32 w-32 items-center justify-center border border-primary md:flex">
              <Image
                src={product.images[0]}
                className="h-24 w-24 object-contain"
                alt=""
              />
            </div>

            <div className="flex w-full flex-row justify-between md:w-1/2 md:flex-col md:justify-start md:space-y-4 md:px-4">
              <p className="text-lg font-semibold text-primary">
                {product.name}
              </p>
              <p className="font-semibold text-secondary">{`$${product.price}`}</p>
            </div>

            <div className="mt-4 flex w-full flex-row-reverse justify-between md:mt-0 md:w-1/3 md:flex-col md:items-end md:justify-start md:space-y-4">
              <MdDelete size={24} />

              <button className="flex w-7/12 items-center justify-center space-x-1 rounded-md bg-primary py-1.5 text-sm text-white">
                <MdShoppingCart size={24} />
                <p className="text-sm text-white">Add to Cart</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftCompo
