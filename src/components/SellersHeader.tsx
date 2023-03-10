import React from "react";
import { FiEyeOff, FiBell, FiMail, FiMenu } from "react-icons/fi";
import { AiFillBank } from "react-icons/ai";
import { FaStoreAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const SellersHeader = ({ setShowSidebar, showSidebar }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-white rounded shadow">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <span className="text-sm text-white w-40 bg-primary rounded-2xl items-center justify-center flex py-1 mr-3">
          <AiFillBank className="mr-1" /> Account: $12,990
        </span>
        <div className="flex items-center">
          <FiEyeOff className="mr-3" />
          <FiBell className="mr-3" />
          <FiMail className="mr-3" />
          <div
            className="lg:hidden cursor-pointer focus:bg-gray-200"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FiMenu />
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex items-center space-x-4 cursor-pointer"
        onClick={() => router.push("/customise-shop")}
      >
        <div className="flex items-center">
          <FaStoreAlt className="mr-2" /> Evans Bex Electronics Store
        </div>

        <div className="flex items-center">
          <Image
            src={require("../assets/avatar-1.jpg")}
            alt="avatar"
            width={40}
            height={40}
            className="w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SellersHeader;
