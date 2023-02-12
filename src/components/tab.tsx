import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiAward, FiAlertTriangle } from 'react-icons/fi'
import Image from 'next/image'

type TabProps = {
  product: {
    _id: string
    title: string
    price: number
    views: any[]
    variants: {
      src: any[]
      colors: string[]
    }

    sizes: string[]
    stock: number
    brand: string
    category: string
    subCategory: string
    seller: string
    description: {
      content: string
      image: any
    }
    reviews: {
      name: string
      avatar: any
      content: string
      date: string
      rating: number
    }[]
  }
}

const Tab = ({ product }: TabProps) => {
  const [tab, setTab] = useState(0)

  const toggleTab = (index: number) => {
    setTab(index)
  }

  let ratings: number[] = []
  product.reviews.forEach((review) => {
    ratings.push(review.rating)
  })

  let total = 0
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i]
  }
  const average = Math.floor(total / ratings.length)

  let starRating = []
  for (var i = 1; i <= 5; i++) {
    let icon = <FaStar className="text-secondary" />

    if (i > average) {
      icon = <FaStar className="text-gray-200" />
    }

    starRating.push(icon)
  }

  return (
    <div className="my-5 w-full">
      <nav className="flex space-x-4 border-b-2 border-b-gray-200 pb-1 ">
        <div
          className={
            tab === 0
              ? 'relative cursor-pointer border-b-secondary font-semibold text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:bg-secondary '
              : 'cursor-pointer font-semibold text-gray-400 hover:text-primary'
          }
          onClick={() => toggleTab(0)}
        >
          Description
        </div>
        <div
          className={
            tab === 1
              ? 'relative cursor-pointer border-b-secondary font-semibold text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:bg-secondary'
              : 'cursor-pointer font-semibold text-gray-400 hover:text-primary'
          }
          onClick={() => toggleTab(1)}
        >
          Reviews
        </div>
      </nav>

      <div className="mt-5">
        <div className={tab === 0 ? 'block' : 'hidden'}>
          <p className="mb-4 text-sm text-gray-400">
            {product.description.content}
          </p>
          <Image
            src={product.description.image}
            alt=""
            className="aspect-auto h-72 w-full object-cover"
          />
        </div>

        <div className={`${tab === 1 ? 'block' : 'hidden'} bg-gray-50 p-8`}>
          <div className="mb-6 flex items-center">
            <p className="font-semibold lg:w-1/4">{`Customer's Reviews (${product.reviews.length})`}</p>
            <div className="hidden w-1/4 items-center space-x-4 lg:flex">
              <div className="flex space-x-1">{starRating}</div>
              <p className="text-lg font-semibold">{average}</p>
            </div>
            <span className="text-green-500 hidden w-1/4 items-center space-x-2 lg:flex">
              <FiAward />
              <p>Verified Seller</p>
            </span>
            <span className="hidden w-1/4 items-center space-x-2 lg:flex">
              <FiAlertTriangle />
              <p>Report Item</p>
            </span>

            <div></div>
          </div>
          {product.reviews.map((review, index) => {
            let stars = []

            for (var i = 1; i <= 5; i++) {
              let icon = <FaStar className="text-secondary" />

              if (i > review.rating) {
                icon = <FaStar className="text-gray-200" />
              }

              stars.push(icon)
            }

            return (
              <div
                key={index}
                className="flex flex-col-reverse p-4 lg:flex-row lg:p-2"
              >
                <div className="mt-2 flex items-center space-x-2 lg:mt-0 lg:w-1/4">
                  <div className="w-16">
                    <Image
                      src={review.avatar}
                      className="aspect-square rounded-full object-contain"
                      alt=""
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">{review.name}</p>
                    <p className="text-sm font-semibold">{review.date}</p>
                  </div>
                </div>
                <div className="space-y-2 ">
                  <div className="flex space-x-1">{stars}</div>
                  <p className="text-sm md:text-base ">{review.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tab
