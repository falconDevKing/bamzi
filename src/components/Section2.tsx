import image5 from '../assets/Group 11581.png'
import image6 from '../assets/day78-wallet.png'
import image7 from '../assets/day77-pocket-knief.png'
import image8 from '../assets/day80-tea.png'
import image9 from '../assets/M2-image2.png'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

const Section2 = () => {
  return (
    <>
      <div className="rightbg-image">
        <div className="flex-row md:flex lg:flex">
          <div className="left-image w-1/2">
            <Image src={image5} alt="" className="pl-32" />
          </div>
          <div className="w-1/2 justify-center px-12 md:flex md:flex-col">
            <div className="font-bold sm:mt-16 sm:text-xl lg:mt-24 lg:text-4xl">
              Get your Store online
            </div>
            <div className="sm:text-md mt-4 text-gray-400 lg:text-xl">
              Every Product deserves a digital presence. Create your store from
              Bamzi and have a wide reach of market audience. Its simple and
              flexible to use.
            </div>
            <div className="sm:text-md text-gray-400 sm:mt-6 sm:lg:mt-8 lg:text-lg">
              Every Product deserves a digital presence. Create your store from
              Bamzi and have a wide reach of market audience. Its simple and
              flexible to use.
            </div>
            <div className="sm:py-6 lg:py-16">
              <button className="rounded-xl border py-2 px-10 text-gray-400 focus:outline-none focus:ring focus:ring-blue-300">
                Get Started <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="my-8 py-8 text-center font-extrabold sm:text-3xl lg:text-4xl">
          Why use Bamzi
        </div>
        <div className="px-28 lg:flex">
          <div className="rounded bg-bgcolors lg:pt-8">
            <Image src={image6} alt="" className="" />
            <div className="text-center text-lg font-bold">Make More Money</div>
            <div className="pt-4 pb-6 text-center text-gray-600 sm:mx-12 lg:mx-3">
              Save time, avoid losing work and information,delegate, and track
              tasks to stay on schedule
            </div>
          </div>
          <div className="my-14 mx-14 rounded bg-primary pt-8">
            <Image src={image7} alt="" />
            <div className="text-center text-lg font-bold text-white">
              Flexible Digital Store
            </div>
            <div className="px-3 pt-4 pb-6 text-center text-white sm:mx-12 lg:mx-3">
              Save time, avoid losing work and information,delegate, and track
              tasks to stay on schedule
            </div>
          </div>
          <div className="rounded bg-bgcolors pt-8">
            <Image src={image8} alt="" />
            <div className="text-center text-lg font-bold">
              Sell products with convenience
            </div>
            <div className="px-3 pt-4 pb-6 text-center text-gray-600 sm:mx-12 lg:mx-3">
              Save time, avoid losing work and information,delegate, and track
              tasks to stay on schedule
            </div>
          </div>
        </div>
        <div className="mt-24 flex px-28">
          <div className="">
            <Image src={image9} alt="" className="" />
          </div>
          <div className="px-8">
            <div className="font-bold uppercase sm:text-2xl lg:text-4xl">
              Easy store with bamzi !!!
            </div>
            <div className="py-4 text-gray-300">
              Get the best from us with flexible store customization. Easy to
              setup and mobile responsive. We make your customer closer to you
            </div>

            <div className="py-6">
              <button className="sm:text-md rounded-xl border bg-primary font-bold text-white sm:py-2 sm:px-8 lg:py-4 lg:px-14 lg:text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="mx-8 border-b-2 py-4"></div>
      </div>
    </>
  )
}

export default Section2
