import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/sidebar'
import SellersHeader from '../components/SellersHeader'
import Image from 'next/image'
import { FiBox } from 'react-icons/fi'
import { BsPaletteFill, BsStack } from 'react-icons/bs'

export default function CustomiseShop() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [image, setImage] = useState('')
  const [bgImage, setBgImage] = useState('')
  const [loading, setLoading] = useState(true)

  const uploadImage = (e) => {
    const files = e.target.files[0]
    const formData = new FormData()
    formData.append('upload_preset', 'bamzi_image')
    formData.append('file', files)

    axios
      .post('https://api.cloudinary.com/v1_1/bamzi/image/upload', formData)
      .then((res) => {
        console.log(res)
        setImage(res.data.secure_url)
        setLoading(false)
      })

      .catch((err) => console.log(err))
  }

  const uploadBgImage = (e) => {
    const files = e.target.files[0]
    const formData = new FormData()
    formData.append('upload_preset', 'bamzi_image')
    formData.append('file', files)
    setLoading(true)

    axios
      .post('https://api.cloudinary.com/v1_1/bamzi/image/upload', formData)
      .then((res) => {
        console.log(res)
        setBgImage(res.data.secure_url)
        setLoading(false)
      })

      .catch((err) => console.log(err))
  }
  return (
    <div className="relative min-h-screen font-poppins  lg:grid lg:grid-cols-6">
      <Sidebar showSidebar={showSidebar} page="customise-shop" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:py-8 lg:px-16">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        <div className="mt-4 flex w-full items-center justify-between py-4">
          <span className="flex space-x-2 text-primary">
            <FiBox size={32} />
            <p className="text-lg font-semibold text-black">Customise Shop</p>
          </span>
          <button className="w-4/12 rounded-lg bg-primary py-2 text-center text-white">
            Save
          </button>
        </div>

        <div className="flex flex-col space-y-4 py-4 md:flex-row md:space-x-4 md:space-y-0">
          {/** store info */}
          <div className="w-full space-y-2 md:w-8/12">
            <div className="rounded bg-white p-4 font-semibold shadow">
              Store Info
            </div>

            <div className="space-y-4 rounded bg-white p-4 shadow">
              <input
                type="text"
                className="w-full rounded-lg border border-primary px-4 py-2 placeholder:text-sm placeholder:text-gray-400 lg:w-8/12"
                placeholder="Store Name"
                autoComplete=""
              />

              <div className="flex space-x-4">
                <textarea
                  className="w-full rounded-lg border border-primary px-4 py-2 placeholder:text-sm placeholder:text-gray-400 lg:w-8/12"
                  rows="4"
                  placeholder="Store Description Max (40)"
                ></textarea>
                <p className="hidden w-3/12 text-sm italic lg:block">
                  This is a short description of what your store offers be
                  short, precise and brief as this is what customers would see.
                </p>
              </div>

              <input
                type="text"
                className="w-full rounded-lg border border-primary px-4 py-2 placeholder:text-sm placeholder:text-gray-400 lg:w-8/12"
                placeholder="Store full legal address"
              />

              <div className="flex w-full space-x-2 lg:w-8/12">
                <div className="w-1/2 rounded-lg border border-primary px-4 py-2">
                  <span className="flex items-center justify-center space-x-2 sm:justify-start">
                    <Image
                      src={require('../assets/nigeria.png')}
                      alt=""
                      className="mt-1 h-3 w-6 sm:mt-0"
                      width={24}
                      height={16}
                    />
                    <p className="hidden text-sm sm:block">Nigeria</p>
                  </span>
                </div>
                <input
                  type="text"
                  className="w-1/2 rounded-lg border border-primary px-4 py-2 placeholder:text-sm placeholder:text-gray-400"
                  placeholder="State"
                />
              </div>

              <input
                type="text"
                className="w-full rounded-lg border border-primary px-4 py-2 placeholder:text-sm placeholder:text-gray-400 lg:w-8/12"
                placeholder="Business Contact"
                autoComplete=""
              />

              <input
                type="text"
                className="w-full rounded-lg border border-primary px-4 py-2 placeholder:text-sm placeholder:text-gray-400 lg:w-8/12"
                placeholder="Store Name"
                autoComplete="Additional Info"
              />
            </div>
          </div>

          {/** store appearance */}
          <div className="w-full space-y-5 rounded bg-white p-4 shadow md:w-4/12">
            <p className="py-2 text-lg font-semibold text-black">
              Store Appearance
            </p>

            <div className="flex items-center">
              <label className="text-md text-gray-700">Upload Logo</label>
              <BsStack className="text-xl" style={{ paddingLeft: '8px' }} />
            </div>
            <input
              type="file"
              name="file"
              onChange={(e) => uploadImage(e)}
              className="w-full"
            />
            <div className="flex items-center">
              <label className="text-md text-gray-700">Background Image</label>
              <BsPaletteFill
                className="text-xl"
                style={{ paddingLeft: '8px' }}
              />
            </div>
            <input
              type="file"
              name="file"
              onChange={(e) => uploadBgImage(e)}
              className="w-full"
            />

            {loading ? (
              <div className="flex h-[300px] w-full items-end justify-center rounded-lg bg-shop bg-cover bg-center pb-2">
                <Image
                  src={require('../assets/avatar-0.jpg')}
                  alt=""
                  className="mb-12 rounded-full"
                  width={188}
                  height={188}
                />
              </div>
            ) : (
              <div className="relative h-[240px] w-full rounded-lg">
                <Image
                  src={bgImage}
                  className="h-full w-full object-contain"
                  alt=""
                />

                <Image
                  className="absolute left-24 bottom-20 h-24 w-24 rounded-full"
                  src={image}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
