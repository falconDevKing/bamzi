import React, { useEffect, useState } from 'react'
import Filter from '../components/filter'
import Footer from '../components/footer'
import Header from '../components/header'
import Card from '../components/card'
import {
  FiAlignLeft,
  FiGrid,
  FiAlignJustify,
  FiFilter,
  FiSearch,
} from 'react-icons/fi'
import { IoIosHeartEmpty, IoIosCart, IoIosHeart } from 'react-icons/io'
import axios from 'axios'
import Image from 'next/image'

export default function SellersStore() {
  const [tab, setTab] = useState(0)
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)

  const userID = '6234d264df9d2322e00785ef'

  const toggleTab = (index) => {
    setTab(index)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:4000/bamzi/products/')
      setProducts(res.data.response)
    }

    fetchData()
  }, [])

  const addToWishlist = async (productId) => {
    const res = await axios.post('http://localhost:4000/bamzi/wishlist/add', {
      user: userID,
      productId: productId,
    })
    console.log(res)
  }

  const addToCart = async (productId) => {
    const res = await axios.post('http://localhost:4000/bamzi/cart/add', {
      user: userID,
      productId: productId,
    })
    console.log(res)
  }

  return (
    <div className="bg-store bg-repeat font-poppins">
      <Header pryNav="user" secNav="user" />
      <div className="relative flex h-80 w-full items-end bg-storeHeader bg-cover py-6">
        <div className="flex flex-col space-y-4 px-6 md:flex-row md:items-center md:space-x-4 md:px-24">
          <div className="h-24 w-32 md:h-36 md:w-48 ">
            <Image
              src={require('../assets/fashion-img01.png')}
              alt=""
              className="rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white md:text-3xl">
              Sabrina Fashion Store
            </h2>
            <p className="text-xs text-white md:text-sm">
              Get the best out of royal fashion from Sabrina the great.
            </p>
          </div>
        </div>

        <button className="absolute right-0 top-10 w-48 rounded-l-xl border-none bg-lightPurple py-2 px-6 text-xs text-white md:w-64 md:text-sm">
          Add to Favourite Store
        </button>
      </div>
      <div className="flex w-full bg-gray-200 shadow-lg md:space-x-8 md:px-24 lg:space-x-16">
        <div className="flex w-3/4 items-center space-x-4 bg-lightPurple py-3 px-6 text-white md:w-48 md:px-4">
          <FiAlignLeft />
          <p className="text-sm text-white">Store Brands</p>
        </div>
        <ul className="hidden py-3 text-sm text-black md:flex md:space-x-4 lg:space-x-8">
          <li>Apple</li>
          <li>Canon</li>
          <li>HP</li>
          <li>LG</li>
          <li>Samsung</li>
          <li>Sony</li>
          <li>Xiaomi</li>
        </ul>
        <div className="flex w-1/4 justify-center bg-lightBrown py-3 text-white md:hidden">
          <IoIosHeart />
        </div>
      </div>

      <div className="px-6 py-3 lg:px-24">
        <nav className="flex space-x-4 border-b-2 border-b-gray-200 pt-3 pb-1 text-sm md:space-x-10 ">
          <div
            className={
              tab === 0
                ? 'relative cursor-pointer font-semibold text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:bg-lightBrown '
                : 'cursor-pointer font-semibold text-gray-400 hover:text-primary'
            }
            onClick={() => toggleTab(0)}
          >
            Products
          </div>
          <div
            className={
              tab === 1
                ? 'relative cursor-pointer font-semibold text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:bg-lightBrown '
                : 'cursor-pointer font-semibold text-gray-400 hover:text-primary'
            }
            onClick={() => toggleTab(1)}
          >
            Shop Info
          </div>
          <div
            className={
              tab === 2
                ? 'relative cursor-pointer font-semibold text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-1 after:w-full after:bg-lightBrown '
                : 'cursor-pointer font-semibold text-gray-400 hover:text-primary'
            }
            onClick={() => toggleTab(2)}
          >
            Promotions
          </div>
        </nav>

        <div className="mt-8 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <Filter
            showModal={showModal}
            closeModal={closeModal}
            products={products}
            setProducts={setProducts}
            btnColor="bg-lightBrown"
            accentColor="accent-lightBrown"
          />
          <div className="sm:col-span-1 lg:col-span-3">
            <div className="mb-3 flex flex-col items-center justify-between sm:flex-row">
              <form action="" className="w-full sm:w-1/2">
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here"
                    autoComplete="off"
                    aria-label="Search anything"
                    className="w-full rounded-2xl border-none p-2 text-xs text-black ring-2 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-500 lg:text-sm"
                  />
                  <FiSearch className="absolute right-2 h-4 w-4 lg:h-5 lg:w-5" />
                </div>
              </form>
              <div className="mt-3 flex items-center justify-between space-x-4 sm:mt-0 sm:justify-end">
                <span
                  className="flex items-center rounded-md border-none bg-white p-2 text-sm shadow sm:hidden"
                  onClick={() => setShowModal(true)}
                >
                  Filter <FiFilter className="ml-4" />
                </span>
                <div className="flex items-center space-x-2">
                  <span className="rounded-md bg-white p-2 shadow">
                    <FiGrid />
                  </span>
                  <span className="rounded-md bg-white p-2 shadow">
                    <FiAlignJustify />
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm">7,618 results found in 5ms</p>

            <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <div key={product._id}>
                  <Card product={product} btnColor="bg-lightBrown" />
                  <div className="-mt-1.5 flex items-center border-none text-sm shadow">
                    <span
                      className="flex w-1/2 items-center justify-center rounded-bl-md border-none bg-lightBrown py-2 text-white"
                      onClick={() => {
                        addToWishlist(product._id)
                      }}
                    >
                      <IoIosHeartEmpty className="mr-2" /> WISHLIST
                    </span>
                    <span
                      className="flex w-1/2 items-center justify-center rounded-br-md border-none bg-lightPurple py-2 text-white"
                      onClick={() => {
                        addToCart(product._id)
                      }}
                    >
                      <IoIosCart className="mr-2" /> ADD TO CART
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer bgColor="bg-lightPurple" btnColor="bg-lightBrown" />
    </div>
  )
}
