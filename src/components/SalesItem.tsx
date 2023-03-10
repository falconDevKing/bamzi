import React from "react";
import Image from "next/image";
import { MdError } from "react-icons/md";

const SalesItem = ({ item }) => {
  return (
    <div className="flex w-full items-center">
      <div className="lg:w-4/12 w-5/12 p-4 flex items-center space-x-4">
        <input type="checkbox" className="accent-secondary" />
        <div className="border border-primary rounded w-12 h-12 py-1.5 px-2 hidden md:block">
          <Image src={item.product.img} alt="" width={30} height={36} />
        </div>
        <p className="text-black">{item.product.title}</p>
      </div>

      <div className="xl:w-1/12 w-2/12 p-2 space-y-2 hidden sm:block">
        {item.options.color === "red" && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold text-black">Color</p>
            <span className="w-4 h-4 rounded bg-red-500"></span>
          </div>
        )}
        {item.options.color === "blue" && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold text-black">Color</p>
            <span className="w-4 h-4 rounded bg-blue-500"></span>
          </div>
        )}
        {item.options.ram && (
          <div className="flex items-center space-x-2">
            <p className="text-sm font-semibold text-black">RAM</p>
            <span className="text-center text-sm py-1 px-3 rounded-xl font-semibold bg-gray-200 text-gray-500">
              6
            </span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold text-black">Size</p>
          <span className="text-center text-sm py-1 px-3 rounded-xl font-semibold bg-gray-200 text-gray-500">
            {item.options.size}
          </span>
        </div>
      </div>

      <div className="w-2/12 p-4 space-y-2 hidden sm:block">
        <p className="text-sm text-black">{item.shipping.customer}</p>
        <p className="text-blue-500 text-sm underline">Shipping Address</p>
      </div>

      <div className="md:w-1/12 w-1/6 p-4">
        <span className="text-center text-sm py-1 px-4 rounded-xl font-semibold bg-gray-200 text-gray-500">
          {item.qty}
        </span>
      </div>

      <div className="md:w-1/12 w-1/6 p-4">
        <p className="font-semibold lg:text-sm text-xs text-black">{`$${item.price}`}</p>
      </div>

      <div className="md:w-1/12 w-3/12 py-2 pr-2 lg:mt-0 -mt-1">
        {item.status === "Error" ? (
          <span className="flex items-center space-x-2">
            <p className="font-semibold lg:text-base text-xs text-black">
              {item.status}
            </p>
            <MdError className="text-red-500" size={20} />
          </span>
        ) : (
          <span className="font-semibold lg:text-base text-xs">
            {item.status}
          </span>
        )}
      </div>

      <div className="w-2/12 py-2 px-6 hidden xl:block">
        <span className="flex items-center justify-center">
          <p className="text-sm font-semibold text-black">{item.date}</p>
        </span>
      </div>
    </div>
  );
};

export default SalesItem;
