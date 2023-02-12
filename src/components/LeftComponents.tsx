import image from '../assets/D1-image5.png'
import image4 from '../assets/D1-image5.png'
import image5 from '../assets/Icon metro-shop.png'
import image6 from '../assets/D6-image4.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'

const LeftComponents = () => {
  return (
    <div className="px-8 lg:basis-2/3">
      <div className="rounded border bg-white px-8 py-4">
        {/* <!--Shopping cart div--> */}

        <div className="text-xl font-bold">Shopping Cart (4)</div>
        <div className="flex justify-between pt-4">
          <div className="">
            <input type="checkbox" id="" name="" value="Select" />
            <label htmlFor="" className="px-1 text-sm text-gray-600">
              Select All
            </label>
            <br />
          </div>
          <div className="item-center flex">
            <RiDeleteBin6Line />
            <div className="px-1 text-sm text-gray-600">Delete All</div>
          </div>
        </div>
      </div>

      <div className="mt-2 rounded border  bg-white px-8 py-3">
        <div className="flex items-center py-2">
          <input type="checkbox" value="Select" className="" />
          <Image src={image5} alt="" className="ml-3 h-4 w-4" />
          <div className="ml-3 text-gray-500">Evax Electronics Store</div>
        </div>
      </div>

      <div className="mt-2 w-full rounded border bg-white">
        <div className="flex w-full justify-between py-4 px-6">
          <div className="flex space-x-4">
            <div className="px-2">
              <input type="checkbox" value="Select" className="" />
            </div>

            <div className="flex h-28 w-28 items-center justify-center border">
              <div className="flex h-20 w-20">
                <Image className="" src={image} alt="product image" />
              </div>
            </div>
            <div className="px-3">
              <div className="font-bold">Apple Watch 2.0 Ipv4</div>
              <div className="flex py-2">
                <div className="text-md flex items-center font-normal">
                  Color
                  <div className="mx-2 h-5 w-5 rounded bg-red-500 shadow-md"></div>
                </div>
                <div className="text-md flex items-center font-normal">
                  Size
                  <div className="mx-2 h-5 w-10 rounded-xl bg-gray-300 shadow-md">
                    <div className="text-center text-xs">XL</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-yellow-400">
                  US $399
                </div>
                <div className="text-sm">
                  <span className="text-sm text-blue-600">
                    Shipping US $18.99
                  </span>
                  all Express Delivery
                </div>
                <div className="text-sm">
                  Estimated Delivery Time 25-30 Days
                </div>
              </div>
            </div>
          </div>
          <div className="mx-12">
            <div className="mb-6 flex justify-end space-x-2">
              <FiHeart size={24} />
              <RiDeleteBin6Line size={24} />
            </div>

            <div className="flex h-12 items-center">
              <span className="p-4 ">QTY</span>
              <span className="flex w-8 items-center justify-center rounded-l border bg-gray-300 text-gray-500">
                -
              </span>
              <span className="flex w-8 items-center justify-center border bg-gray-100 text-gray-500">
                01
              </span>
              <span className="flex w-8 items-center justify-center rounded-r border bg-gray-300 text-gray-500">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between py-4 px-6">
          <div className="flex space-x-4">
            <div className="px-2">
              <input type="checkbox" value="Select" className="" />
            </div>

            <div className="flex h-28 w-28 items-center justify-center border">
              <div className="flex h-20 w-20">
                <Image className="" src={image4} alt="product image" />
              </div>
            </div>
            <div className="px-3">
              <div className="font-bold">Apple Watch 2.0 Ipv4</div>
              <div className="flex py-2">
                <div className="text-md flex items-center font-normal">
                  Color
                  <div className="mx-2 h-5 w-5 rounded bg-blue-500 shadow-md"></div>
                </div>
                <div className="text-md flex items-center font-normal">
                  Size
                  <div className="mx-2 h-5 w-10 rounded-xl bg-gray-300 shadow-md">
                    <div className="text-center text-xs">XL</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-yellow-400">
                  US $399
                </div>
                <div className="text-sm">
                  <span className="text-sm text-blue-600">
                    Shipping US $18.99
                  </span>
                  all Express Delivery
                </div>
                <div className="text-sm">
                  Estimated Delivery Time 25-30 Days
                </div>
              </div>
            </div>
          </div>

          <div className="mx-12">
            <div className="mb-6 flex justify-end space-x-2">
              <FiHeart size={24} />
              <RiDeleteBin6Line size={24} />
            </div>

            <div className="flex h-12 items-center">
              <span className="p-4 ">QTY</span>
              <span className="flex w-8 items-center justify-center rounded-l border bg-gray-300 text-gray-500">
                -
              </span>
              <span className="flex w-8 items-center justify-center border bg-gray-100 text-gray-500">
                01
              </span>
              <span className="flex w-8 items-center justify-center rounded-r border bg-gray-300 text-gray-500">
                +
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 rounded border  bg-white px-8 py-3">
        <div className="flex items-center py-2">
          <input type="checkbox" value="Select" className="" />
          <Image src={image5} alt="" className="ml-3 h-4 w-4" />
          <div className="ml-3 text-gray-500">Lola Saloon and SPA</div>
        </div>
      </div>

      <div className="mt-2 flex w-full justify-between rounded border bg-white py-6 px-6">
        <div className="flex space-x-4">
          <div className="px-2">
            <input type="checkbox" value="Select" className="" />
          </div>
          <div className="h-24 w-24 border ">
            <div className="">
              <Link href="#" className="">
                <a>
                  <Image className="w-24" src={image6} alt="product image" />
                </a>
              </Link>
            </div>
          </div>
          <div className="px-3">
            <div className="text-sm font-bold">
              Weaving Fibrex set of wigs 12cm length silk
            </div>
            <div className="flex py-4">
              <div className="text-md flex items-center font-normal">
                Length
                <div className="mx-2 rounded-lg bg-gray-200 px-3 py-0.5 text-center text-xs shadow-md">
                  12cm-16cm
                </div>
              </div>
              <div className="text-md flex items-center font-normal">
                Texture
                <div className="mx-2 rounded-xl bg-gray-300 px-3 py-0.5 shadow-md">
                  <div className="text-center text-xs">Fibre</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-yellow-400">US $399</div>
              <div className="text-sm">
                <span className="text-sm text-blue-600">
                  Shipping US $18.99
                </span>
                all Express Delivery
              </div>
              <div className="text-sm">Estimated Delivery Time 25-30 Days</div>
            </div>
          </div>
        </div>
        <div className="mx-12">
          <div className="mb-6 flex justify-end space-x-2">
            <FiHeart size={24} />
            <RiDeleteBin6Line size={24} />
          </div>

          <div className="flex h-12 items-center">
            <span className="p-4 ">QTY</span>
            <span className="flex w-8 items-center justify-center rounded-l border bg-gray-300 text-gray-500">
              -
            </span>
            <span className="flex w-8 items-center justify-center border bg-gray-100 text-gray-500">
              01
            </span>
            <span className="flex w-8 items-center justify-center rounded-r border bg-gray-300 text-gray-500">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftComponents
