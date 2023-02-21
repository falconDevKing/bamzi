import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import Header from '../components/header'
import Image from 'next/image'
import { FaStore } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'

export default function Prelaunch() {
  const url = 'http://localhost:4000/bamzi/reservation'
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [industry, setIndustry] = useState<string>('')
  const [designation, setDesignation] = useState<string>('')
  const [buyerCols, setBuyerCols] = useState<string>(
    'bg-transparent text-gray-500'
  )
  const [sellerCols, setSellerCols] = useState<string>(
    'bg-lightorange text-white'
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      name: name,
      email: email,
      industry: industry,
      designation: designation,
    })
    // axios
    //   .post(url, {
    //     name: name,
    //     email: email,
    //     industry: industry,
    //     designation: designation,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    setName('')
    setEmail('')
    setIndustry('')
    setDesignation('')
  }

  return (
    <div className={'my-0 mx-auto w-full bg-bluelight'}>
      <Header secNav="prelaunch" bg />

      <div
        className={
          'flex w-full flex-col items-center py-6 px-6  md:px-16 lg:flex-row lg:px-24'
        }
      >
        <div className={'text-center'}>
          <h1
            className={
              'text-left text-2xl font-bold text-primary sm:text-4xl lg:text-6xl'
            }
          >
            Get Ready, Online Stores Coming Through
          </h1>
          <p
            className={
              'mt-4 text-left text-sm text-gray-500 sm:text-base lg:text-xl'
            }
          >
            Get awesome rewards and discounts, be the first to book your space
            in this awesome digital world. Join us on the train to greatness.
          </p>

          <form
            className={'mt-8 w-full py-0 lg:w-11/12'}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={
                'min-h-7 my-2 mx-0 w-full rounded-3xl border-none py-3 px-4 outline-none'
              }
              type="text"
              id="name"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <div className={'flex w-full flex-row justify-between space-x-4'}>
              <input
                type="text"
                id="email"
                value={email}
                className={' my-2 w-1/2 rounded-3xl px-4 py-3 sm:w-2/3'}
                placeholder="Email here"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                id="industry"
                value={industry}
                className={'my-2 w-1/2 rounded-3xl px-4 py-3 sm:w-1/3'}
                placeholder="Industry"
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>

            <div className={'my-2 mx-0 grid grid-cols-2 gap-1.5'}>
              <div
                className={`${buyerCols} flex cursor-pointer items-center justify-center space-x-4 rounded-3xl border-2 border-lightorange bg-transparent py-2 px-0`}
                onClick={() => {
                  setDesignation('Buyer')
                  setBuyerCols('bg-lightorange text-white')
                  setSellerCols('bg-transparent text-gray-500')
                }}
              >
                <MdShoppingCart size={32} /> &nbsp; Buyer
              </div>
              <div
                className={`${sellerCols} flex cursor-pointer items-center justify-center space-x-4 rounded-3xl border-2 border-lightorange py-2 px-0`}
                onClick={() => {
                  setDesignation('Seller')
                  setSellerCols('bg-lightorange text-white')
                  setBuyerCols('bg-transparent text-gray-500')
                  console.log(designation)
                  console.log(sellerCols)
                }}
              >
                <FaStore size={32} /> &nbsp; Seller
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className={
                  'my-2 mx-0 w-full rounded-md bg-primary py-4 px-0 text-center font-bold text-white sm:w-5/6 sm:px-16 '
                }
                style={{ backgroundColor: '#000033' }}
              >
                Book your reservation
              </button>
            </div>
          </form>
        </div>

        <div className={'bg-shapes bg-cover'}>
          <Image
            src={require('assets/Mask.png')}
            className={'h-auto max-w-full object-cover'}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
