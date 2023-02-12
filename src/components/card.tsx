import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

type CardProps = {
  product: {
    _id: string
    title?: string
    price?: number
    rating?: number
    intro?: string
    name?: string
    description?: string
    image?: any
    images?: any
  }
  btnColor: string
}

const Card = ({ product, btnColor }: CardProps) => {
  return (
    <div className="flex flex-col rounded-md border-none bg-white py-4 shadow">
      <div className="flex h-48 w-48 items-center justify-center self-center">
        <Image
          className=""
          src={product.images ? product.images[0] : product.image}
          alt="item"
        />
      </div>

      <div className="mt-4 h-32 px-4">
        <div className="mb-4 flex justify-between">
          <div
            className={`${btnColor} flex items-center space-x-1 rounded px-3`}
          >
            <span className="mt-1 text-white">{product.rating}</span>
            <FaStar className="text-secondary" />
          </div>
          <div className="text-lg font-bold text-primary">{`$${product.price}`}</div>
        </div>
        <h6>{product.name ? product.name : product.intro}</h6>
        <p className="text-sm font-light">
          {product.description ? product.description : product.intro}
        </p>
      </div>
    </div>
  )
}

export default Card
