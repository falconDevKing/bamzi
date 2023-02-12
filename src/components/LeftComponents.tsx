import image from "../assets/D1-image5.png";
import image4 from "../assets/D1-image5.png";
import image5 from "../assets/Icon metro-shop.png";
import image6 from "../assets/D6-image4.png";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

const LeftComponents = () => {
  return (
    <div className="lg:basis-2/3 px-8">
      <div className="bg-white border px-8 py-4 rounded">
        {/* <!--Shopping cart div--> */}

        <div className="font-bold text-xl">Shopping Cart (4)</div>
        <div className="flex justify-between pt-4">
          <div className="">
            <input type="checkbox" id="" name="" value="Select" />
            <label htmlFor="" className="text-sm text-gray-600 px-1">
              Select All
            </label>
            <br />
          </div>
          <div className="flex item-center">
            <RiDeleteBin6Line />
            <div className="text-sm text-gray-600 px-1">Delete All</div>
          </div>
        </div>
      </div>

      <div className="bg-white border px-8  py-3 rounded mt-2">
        <div className="flex items-center py-2">
          <input type="checkbox" value="Select" className="" />
          <Image src={image5} alt="" className="w-4 h-4 ml-3" />
          <div className="ml-3 text-gray-500">Evax Electronics Store</div>
        </div>
      </div>

      <div className="bg-white w-full border rounded mt-2">
        <div className="flex py-4 px-6 w-full justify-between">
          <div className="flex space-x-4">
            <div className="px-2">
              <input type="checkbox" value="Select" className="" />
            </div>

            <div className="flex justify-center items-center border w-28 h-28">
              <div className="flex w-20 h-20">
                <Image className="" src={image} alt="product image" />
              </div>
            </div>
            <div className="px-3">
              <div className="font-bold">Apple Watch 2.0 Ipv4</div>
              <div className="flex py-2">
                <div className="flex font-normal text-md items-center">
                  {" "}
                  Color
                  <div className="bg-red-500 w-5 h-5 mx-2 rounded shadow-md"></div>
                </div>
                <div className="flex font-normal text-md items-center">
                  Size
                  <div className="bg-gray-300 w-10 h-5 mx-2 rounded-xl shadow-md">
                    <div className="text-xs text-center">XL</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-yellow-400 text-sm font-medium">
                  US $399
                </div>
                <div className="text-sm">
                  <span className="text-blue-600 text-sm">
                    Shipping US $18.99
                  </span>{" "}
                  all Express Delivery
                </div>
                <div className="text-sm">
                  Estimated Delivery Time 25-30 Days
                </div>
              </div>
            </div>
          </div>
          <div className="mx-12">
            <div className="flex justify-end mb-6 space-x-2">
              <FiHeart size={24} />
              <RiDeleteBin6Line size={24} />
            </div>

            <div className="flex items-center h-12">
              <span className="p-4 ">QTY</span>
              <span className="bg-gray-300 text-gray-500 border rounded-l w-8 flex justify-center items-center">
                -
              </span>
              <span className="bg-gray-100 text-gray-500 border w-8 flex justify-center items-center">
                01
              </span>
              <span className="bg-gray-300 text-gray-500 border rounded-r w-8 flex justify-center items-center">
                +
              </span>
            </div>
          </div>
        </div>

        <div className="flex py-4 px-6 w-full justify-between">
          <div className="flex space-x-4">
            <div className="px-2">
              <input type="checkbox" value="Select" className="" />
            </div>

            <div className="flex justify-center items-center border w-28 h-28">
              <div className="flex w-20 h-20">
                <Image className="" src={image4} alt="product image" />
              </div>
            </div>
            <div className="px-3">
              <div className="font-bold">Apple Watch 2.0 Ipv4</div>
              <div className="flex py-2">
                <div className="flex font-normal text-md items-center">
                  {" "}
                  Color
                  <div className="bg-blue-500 w-5 h-5 mx-2 rounded shadow-md"></div>
                </div>
                <div className="flex font-normal text-md items-center">
                  Size
                  <div className="bg-gray-300 w-10 h-5 mx-2 rounded-xl shadow-md">
                    <div className="text-xs text-center">XL</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-yellow-400 text-sm font-medium">
                  US $399
                </div>
                <div className="text-sm">
                  <span className="text-blue-600 text-sm">
                    Shipping US $18.99
                  </span>{" "}
                  all Express Delivery
                </div>
                <div className="text-sm">
                  Estimated Delivery Time 25-30 Days
                </div>
              </div>
            </div>
          </div>

          <div className="mx-12">
            <div className="flex justify-end mb-6 space-x-2">
              <FiHeart size={24} />
              <RiDeleteBin6Line size={24} />
            </div>

            <div className="flex items-center h-12">
              <span className="p-4 ">QTY</span>
              <span className="bg-gray-300 text-gray-500 border rounded-l w-8 flex justify-center items-center">
                -
              </span>
              <span className="bg-gray-100 text-gray-500 border w-8 flex justify-center items-center">
                01
              </span>
              <span className="bg-gray-300 text-gray-500 border rounded-r w-8 flex justify-center items-center">
                +
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border px-8  py-3 rounded mt-2">
        <div className="flex items-center py-2">
          <input type="checkbox" value="Select" className="" />
          <Image src={image5} alt="" className="w-4 h-4 ml-3" />
          <div className="ml-3 text-gray-500">Lola Saloon and SPA</div>
        </div>
      </div>

      <div className="bg-white w-full border rounded mt-2 flex py-6 px-6 justify-between">
        <div className="flex space-x-4">
          <div className="px-2">
            <input type="checkbox" value="Select" className="" />
          </div>
          <div className="border w-24 h-24 ">
            <div className="">
              <Link href="#" className="">
                <a>
                  <Image className="w-24" src={image6} alt="product image" />
                </a>
              </Link>
            </div>
          </div>
          <div className="px-3">
            <div className="font-bold text-sm">
              Weaving Fibrex set of wigs 12cm length silk
            </div>
            <div className="flex py-4">
              <div className="flex font-normal text-md items-center">
                {" "}
                Length
                <div className="bg-gray-200 mx-2 px-3 py-0.5 rounded-lg text-center shadow-md text-xs">
                  12cm-16cm
                </div>
              </div>
              <div className="flex font-normal text-md items-center">
                Texture
                <div className="bg-gray-300 px-3 py-0.5 mx-2 rounded-xl shadow-md">
                  <div className="text-xs text-center">Fibre</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-yellow-400 text-sm font-medium">US $399</div>
              <div className="text-sm">
                <span className="text-blue-600 text-sm">
                  Shipping US $18.99
                </span>{" "}
                all Express Delivery
              </div>
              <div className="text-sm">Estimated Delivery Time 25-30 Days</div>
            </div>
          </div>
        </div>
        <div className="mx-12">
          <div className="flex justify-end mb-6 space-x-2">
            <FiHeart size={24} />
            <RiDeleteBin6Line size={24} />
          </div>

          <div className="flex items-center h-12">
            <span className="p-4 ">QTY</span>
            <span className="bg-gray-300 text-gray-500 border rounded-l w-8 flex justify-center items-center">
              -
            </span>
            <span className="bg-gray-100 text-gray-500 border w-8 flex justify-center items-center">
              01
            </span>
            <span className="bg-gray-300 text-gray-500 border rounded-r w-8 flex justify-center items-center">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponents;
