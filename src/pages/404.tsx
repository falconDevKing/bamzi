import React from 'react'
import Link from 'next/link'
import { IoIosWarning } from 'react-icons/io'
import Header from '../components/header'
import Image from 'next/image'

export default function Errorpage() {
  return (
    <div>
      <div className={'my-0 mx-auto h-screen w-full bg-bluelight'}>
        <Header bg />
        <div
          className={
            'my-10 mx-auto mt-16 flex flex-col items-center justify-between py-0 px-0 sm:mt-0 sm:py-2 sm:px-6 lg:flex-row lg:py-12 lg:px-20'
          }
        >
          <div
            className={
              'w-full bg-none bg-contain bg-left bg-no-repeat pl-0 lg:w-1/2 lg:bg-errorbg lg:pl-16'
            }
          >
            <div>
              <h1
                className={
                  'mx-auto text-center text-3xl text-gray-500 lg:text-right'
                }
              >
                Page Not Found
              </h1>
            </div>

            <div className={'flex items-start justify-center text-[#f6da8b]'}>
              <Image
                src={require('assets/Cart404.png')}
                className={'w-[320px] sm:w-[400px]'}
                alt=""
              />
            </div>
          </div>

          <div
            className={
              'mt-4 mb-16 w-full items-center bg-none bg-contain bg-right bg-no-repeat pr-0 lg:mt-0 lg:w-1/2 lg:bg-errorbg lg:pr-16'
            }
          >
            <div className={'flex flex-col py-0 px-6 text-gray-500'}>
              <span className={'inline-block text-sm sm:text-base'}>
                <IoIosWarning
                  size={24}
                  color={'#f1a79c'}
                  style={{ display: 'inline-block' }}
                />
                OOPs!!! Looks like the page you are looking for is not available
                or is missing, kindly contact us for any further problem.
              </span>

              <Link href="/" className="p-0">
                <button
                  className={
                    'mt-4 w-full rounded-lg bg-primary py-4 px-0 text-center text-sm font-normal text-white sm:text-base sm:font-bold'
                  }
                >
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
